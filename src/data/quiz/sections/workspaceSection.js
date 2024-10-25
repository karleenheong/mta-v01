export const workspaceSection = {
  id: 'workspace',
  title: 'Workspace Preferences',
  description: 'Help us understand your ideal work setup',
  questions: [
    {
      id: 'workspace-type',
      type: 'single',
      question: 'What type of workspace do you prefer?',
      options: [
        { value: 'dedicated-room', label: 'Dedicated office room' },
        { value: 'desk-bedroom', label: 'Desk in bedroom' },
        { value: 'desk-living', label: 'Desk in living area' },
        { value: 'flexible', label: 'Flexible workspace' }
      ]
    },
    // Add more workspace questions here
  ]
};