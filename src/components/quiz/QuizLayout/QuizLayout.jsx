import styles from './QuizLayout.module.css';

const QuizLayout = ({ children, progressPercentage }) => {
  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {children}
    </div>
  );
};

export default QuizLayout;