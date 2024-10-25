import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PreferenceCenter.module.css';

const PreferenceCenter = () => {
  const navigate = useNavigate();
  // This would normally come from your app's state/database
  const [preferences, setPreferences] = useState({
    workspace: {},
    kitchen: {},
    bathroom: {},
    bedroom: {},
    livingArea: {},
    property: {},
    buildingAmenities: {},
    layoutAndSpace: {},
    neighborhood: {},
    digitalNomad: {},
    professional: {},
    essential: {},
    transportation: {},
    entertainment: {}
  });

  const sections = [
    {
      id: 'lifestyle',
      title: 'Lifestyle Preferences',
      subsections: [
        {
          id: 'workspace',
          title: 'Workspace',
          icon: '💻',
          description: 'Configure your ideal work setup preferences',
          completed: Object.keys(preferences.workspace).length > 0
        },
        {
          id: 'digitalNomad',
          title: 'Digital Nomad Infrastructure',
          icon: '🌐',
          description: 'Set your digital nomad and connectivity requirements',
          completed: Object.keys(preferences.digitalNomad).length > 0
        }
      ]
    },
    {
      id: 'living',
      title: 'Living Spaces',
      subsections: [
        {
          id: 'kitchen',
          title: 'Kitchen',
          icon: '🍳',
          description: 'Define your kitchen and cooking preferences',
          completed: Object.keys(preferences.kitchen).length > 0
        },
        {
          id: 'bathroom',
          title: 'Bathroom',
          icon: '🚿',
          description: 'Set your bathroom preferences',
          completed: Object.keys(preferences.bathroom).length > 0
        },
        {
          id: 'bedroom',
          title: 'Bedroom',
          icon: '🛏️',
          description: 'Configure bedroom preferences',
          completed: Object.keys(preferences.bedroom).length > 0
        },
        {
          id: 'livingArea',
          title: 'Living Area',
          icon: '🛋️',
          description: 'Set living space preferences',
          completed: Object.keys(preferences.livingArea).length > 0
        }
      ]
    },
    {
      id: 'property',
      title: 'Property & Building',
      subsections: [
        {
          id: 'property',
          title: 'Property Features',
          icon: '🏠',
          description: 'Set general property preferences',
          completed: Object.keys(preferences.property).length > 0
        },
        {
          id: 'buildingAmenities',
          title: 'Building Amenities',
          icon: '🏢',
          description: 'Choose important building features',
          completed: Object.keys(preferences.buildingAmenities).length > 0
        },
        {
          id: 'layoutAndSpace',
          title: 'Layout & Space',
          icon: '📐',
          description: 'Configure space and layout preferences',
          completed: Object.keys(preferences.layoutAndSpace).length > 0
        }
      ]
    },
    {
      id: 'location',
      title: 'Location & Surroundings',
      subsections: [
        {
          id: 'neighborhood',
          title: 'Neighborhood',
          icon: '🏘️',
          description: 'Set neighborhood preferences',
          completed: Object.keys(preferences.neighborhood).length > 0
        },
        {
          id: 'professional',
          title: 'Professional Services',
          icon: '💼',
          description: 'Configure nearby service requirements',
          completed: Object.keys(preferences.professional).length > 0
        },
        {
          id: 'essential',
          title: 'Essential Services',
          icon: '🏪',
          description: 'Set essential service preferences',
          completed: Object.keys(preferences.essential).length > 0
        },
        {
          id: 'transportation',
          title: 'Transportation',
          icon: '🚇',
          description: 'Configure transport preferences',
          completed: Object.keys(preferences.transportation).length > 0
        },
        {
          id: 'entertainment',
          title: 'Entertainment & Culture',
          icon: '🎭',
          description: 'Set entertainment preferences',
          completed: Object.keys(preferences.entertainment).length > 0
        }
      ]
    }
  ];

  const handleSectionClick = (sectionId) => {
    navigate(sectionId);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Preference Center</h1>
        <p className={styles.subtitle}>
          Customize your accommodation preferences to find your perfect NomadNest
        </p>
      </header>

      <div className={styles.sections}>
        {sections.map(section => (
          <div key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.subsectionGrid}>
              {section.subsections.map(subsection => (
                <button
                  key={subsection.id}
                  className={styles.subsectionCard}
                  onClick={() => handleSectionClick(subsection.id)}
                >
                  <div className={styles.subsectionHeader}>
                    <span className={styles.icon}>{subsection.icon}</span>
                    <h3 className={styles.subsectionTitle}>
                      {subsection.title}
                      {subsection.completed && (
                        <span className={styles.completedBadge}>✓</span>
                      )}
                    </h3>
                  </div>
                  <p className={styles.description}>{subsection.description}</p>
                  <span className={styles.actionText}>
                    {subsection.completed ? 'Update preferences' : 'Set preferences'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferenceCenter;