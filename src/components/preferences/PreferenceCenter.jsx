import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import styles from './PreferenceCenter.module.css';

const PreferenceCenter = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [hasCompletedQuickQuiz, setHasCompletedQuickQuiz] = useState(false);
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
    entertainment: {},
    localCommunity: {},
    nomadCommunity: {},
  });

  const sections = [
    {
      id: 'lifestyle',
      title: 'Lifestyle Preferences',
      subsections: [
        {
          id: 'digitalNomad',
          title: 'Digital Nomad Travel Style',
          icon: '🌐',
          description: 'Set your travel style and duration preferences',
          completed: Object.keys(preferences.digitalNomad).length > 0
        },
        {
          id: 'workspace',
          title: 'Workspace',
          icon: '💻',
          description: 'Configure your ideal work setup preferences',
          completed: Object.keys(preferences.workspace).length > 0
        },
        {
          id: 'nomadCommunity',
          title: 'Nomad Community',
          icon: '👥',
          description: 'Define your community and networking preferences',
          completed: Object.keys(preferences.nomadCommunity).length > 0
        },
        {
          id: 'localCommunity',
          title: 'Local Community',
          icon: '🏠',
          description: 'Set preferences for local interaction and culture',
          completed: Object.keys(preferences.localCommunity).length > 0
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
          description: 'Set your bathroom and amenity preferences',
          completed: Object.keys(preferences.bathroom).length > 0
        },
        {
          id: 'bedroom',
          title: 'Bedroom',
          icon: '🛏️',
          description: 'Configure bedroom comfort and setup preferences',
          completed: Object.keys(preferences.bedroom).length > 0
        },
        {
          id: 'livingArea',
          title: 'Living Area',
          icon: '🛋️',
          description: 'Set living space and relaxation preferences',
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
          description: 'Set preferences for property type and features',
          completed: Object.keys(preferences.property).length > 0
        },
        {
          id: 'buildingAmenities',
          title: 'Building Amenities',
          icon: '🏢',
          description: 'Choose important building features and services',
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
          description: 'Set preferences for your ideal neighborhood',
          completed: Object.keys(preferences.neighborhood).length > 0
        },
        {
          id: 'professional',
          title: 'Professional Services',
          icon: '💼',
          description: 'Configure nearby professional service requirements',
          completed: Object.keys(preferences.professional).length > 0
        },
        {
          id: 'essential',
          title: 'Essential Services',
          icon: '🏪',
          description: 'Set preferences for essential nearby services',
          completed: Object.keys(preferences.essential).length > 0
        },
        {
          id: 'transportation',
          title: 'Transportation',
          icon: '🚇',
          description: 'Configure transport and accessibility preferences',
          completed: Object.keys(preferences.transportation).length > 0
        },
        {
          id: 'entertainment',
          title: 'Entertainment & Culture',
          icon: '🎭',
          description: 'Set preferences for leisure and cultural activities',
          completed: Object.keys(preferences.entertainment).length > 0
        }
      ]
    }
  ];

  const handleSectionClick = (sectionId) => {
    // Change this line to navigate to the correct route
    navigate(`/section-quiz/${sectionId}`, {
      // Optionally pass any initial state data
      state: {
        quizData: preferences[sectionId] || {}
      }
    });
  };

  const handleQuizComplete = (quizAnswers) => {
    const updatedPreferences = {
      ...preferences,
      workspace: {
        ...preferences.workspace,
        primary_location: quizAnswers.workspace,
        internet_speed: quizAnswers.internet,
        ergonomic_importance: quizAnswers.ergonomics
      },
      property: {
        ...preferences.property,
        stay_duration: quizAnswers.duration,
        budget: quizAnswers.budget,
        schedule: quizAnswers.schedule,
        property_type: quizAnswers.property_type
      },
      neighborhood: {
        ...preferences.neighborhood,
        area_type: quizAnswers.area_type,
        walking_distances: quizAnswers.walking_times,
        important_features: quizAnswers.neighborhood
      }
    };

    setPreferences(updatedPreferences);
    setHasCompletedQuickQuiz(true);
    setShowQuiz(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Preference Center</h1>
        <p className={styles.subtitle}>
          Tell us how you like to live and work, and we'll find your ideal spaces
        </p>
      </header>

      <div className={styles.quickQuiz}>
        {hasCompletedQuickQuiz ? (
          <div className={styles.quickQuizContent}>
            <div className={styles.quickQuizInfo}>
              <div className={styles.quickQuizHeader}>
                <CheckCircle className={styles.successIcon} />
                <h2>Your preferences are dialed in!</h2>
              </div>
              <p>
                Fine-tune any category below to get even more personalized matches
              </p>
            </div>
            <button 
              onClick={() => setShowQuiz(true)}
              className={styles.secondaryButton}
            >
              Update Preferences
            </button>
          </div>
        ) : (
          <div className={styles.quickQuizContent}>
            <div className={styles.quickQuizInfo}>
              <div className={styles.quickQuizHeader}>
                <Sparkles className={styles.sparkleIcon} />
                <h2>Let's Find Your Perfect Match</h2>
              </div>
              <p>
                Take a quick 5-minute quiz to discover spaces that align perfectly with your remote work lifestyle
              </p>
            </div>
            <button 
              onClick={() => navigate('/quiz')}
              className={styles.primaryButton}
            >
              Start Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>

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
                  <button 
                    className={`${styles.cardButton} ${
                      subsection.completed ? styles.completed : ''
                    }`}
                  >
                    {subsection.completed 
                      ? `Adjust ${subsection.title.toLowerCase()} preferences` 
                      : `Set ${subsection.title.toLowerCase()} preferences`}
                  </button>
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