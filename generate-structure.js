// run with command: node generate-structure.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateDirectoryStructure(startPath, indent = '', ignorePatterns = []) {
    // Default files and directories to ignore
    const defaultIgnore = [
        'node_modules',
        '.git',
        'dist',
        'build',
        '.DS_Store',
        '*.log',
        '.env',
        '.cache',
        'coverage',
        '.vscode',
        '.idea'
    ];

    const ignore = [...defaultIgnore, ...ignorePatterns];

    let structure = '';

    // Check if path exists
    if (!fs.existsSync(startPath)) {
        console.error(`Path ${startPath} does not exist`);
        return '';
    }

    // Read directory contents
    const items = fs.readdirSync(startPath);

    // Sort items (directories first, then files)
    items.sort((a, b) => {
        const aPath = path.join(startPath, a);
        const bPath = path.join(startPath, b);
        const aIsDir = fs.statSync(aPath).isDirectory();
        const bIsDir = fs.statSync(bPath).isDirectory();

        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
    });

    // Process each item
    items.forEach((item, index) => {
        // Check if item should be ignored
        if (ignore.some(pattern => {
            if (pattern.includes('*')) {
                const regex = new RegExp(pattern.replace('*', '.*'));
                return regex.test(item);
            }
            return item === pattern;
        })) {
            return;
        }

        const itemPath = path.join(startPath, item);
        const isLast = index === items.length - 1;
        const stats = fs.statSync(itemPath);
        const isDirectory = stats.isDirectory();

        // Add item to structure
        structure += `${indent}${isLast ? '└── ' : '├── '}${item}\n`;

        // Recursively process directories
        if (isDirectory) {
            structure += generateDirectoryStructure(
                itemPath,
                `${indent}${isLast ? '    ' : '│   '}`,
                ignore
            );
        }
    });

    return structure;
}

// Example usage
const projectRoot = './'; // Current directory
const customIgnore = []; // Add any custom patterns to ignore

try {
    const structure = generateDirectoryStructure(projectRoot, '', customIgnore);
    console.log('Project Structure:');
    console.log(structure);

    // Get absolute path for the output file
    const outputPath = path.join(process.cwd(), 'project-structure.txt');
    
    // Save to file
    fs.writeFileSync(outputPath, structure);
    console.log('Structure has been saved to:', outputPath);
} catch (error) {
    console.error('Error generating directory structure:', error);
}