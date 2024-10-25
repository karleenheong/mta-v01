import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './QuizNavigation.module.css';

const QuizNavigation = ({ 
  currentQuestionIndex, 
  totalQuestions, 
  onNext, 
  onPrevious, 
  hasAnswer 
}) => {
  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrevious}
        disabled={currentQuestionIndex === 0}
      >
        <ArrowLeft className={styles.navIcon} />
        Previous
      </button>

      <div className={styles.questionCount}>
        {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
        disabled={!hasAnswer}
      >
        {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
        <ArrowRight className={styles.navIcon} />
      </button>
    </div>
  );
};

export default QuizNavigation;