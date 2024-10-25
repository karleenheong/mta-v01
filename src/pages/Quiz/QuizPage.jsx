import { useParams, useNavigate } from 'react-router-dom';
import QuizSystem from '../../components/quiz/QuizSystem';
import { quizSections } from '../../data/quiz/sections/quizSections';
import { quickQuizSection } from '../../data/quiz/sections/quickQuizSection';
import styles from './QuizPage.module.css';

const QuizPage = ({ quizType }) => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  
  // Determine which section to use based on quizType or sectionId
  const section = quizType === 'quick' 
    ? quickQuizSection 
    : quizSections.find(section => section.id === sectionId);

  const handleComplete = (answers) => {
    if (quizType === 'quick') {
      // Handle quick quiz completion
      const existingPreferences = JSON.parse(localStorage.getItem('preferences') || '{}');
      const mappedAnswers = {
        workspace: {
          primary_location: answers.work_location,
          internet_speed: answers.internet_speed,
          schedule: answers.work_schedule
        },
        property: {
          stay_duration: answers.stay_duration,
          budget: answers.monthly_budget,
          must_have_amenities: answers.must_have_amenities
        },
        neighborhood: {
          area_type: answers.area_type,
          important_features: answers.neighborhood_features
        }
      };

      const updatedPreferences = {
        ...existingPreferences,
        quickQuiz: mappedAnswers
      };
      localStorage.setItem('preferences', JSON.stringify(updatedPreferences));
    } else {
      // Handle section quiz completion
      const existingPreferences = JSON.parse(localStorage.getItem('preferences') || '{}');
      const updatedPreferences = {
        ...existingPreferences,
        [sectionId]: answers
      };
      localStorage.setItem('preferences', JSON.stringify(updatedPreferences));
    }
    
    navigate('/preference-center');
  };

  const handleBack = () => {
    navigate('/preference-center');
  };

  if (!section) {
    return (
      <div className={styles.container}>
        <h1>Section not found</h1>
        <button onClick={handleBack} className={styles.backButton}>
          Return to Preference Center
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={handleBack} className={styles.backButton}>
        ← Back to Preference Center
      </button>
      <h1 className={styles.title}>{section.title}</h1>
      <QuizSystem 
        sections={[section]} 
        onComplete={handleComplete} 
      />
    </div>
  );
};

export default QuizPage;