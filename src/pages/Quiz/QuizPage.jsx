import { useParams, useNavigate } from 'react-router-dom';
import QuizSystem from '../../components/quiz/QuizSystem';
import { quizSections } from '../../data/quiz/sections/quizSections';
import styles from './QuizPage.module.css';

const QuizPage = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  
  // Find the appropriate section data based on the sectionId
  const section = quizSections.find(section => section.id === sectionId);

  const handleComplete = (answers) => {
    console.log('Quiz completed:', answers);
    // Save answers here
    // Then navigate back to preference center - updated path
    navigate('/preference-center');
  };

  const handleBack = () => {
    // Updated path to match new routing structure
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

  // Add some basic error handling for missing section data
  if (!section.title || !section.questions) {
    return (
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.backButton}>
          ← Back to Preference Center
        </button>
        <h1>Error loading quiz</h1>
        <p>There was a problem loading this quiz section. Please try again.</p>
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