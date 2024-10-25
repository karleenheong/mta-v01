import InitialQuiz from '../../components/quiz/InitialQuiz/InitialQuiz';
import styles from './QuizPage.module.css';

const QuizPage = () => {
  return (
    <div className={styles.quizPage}>
      <h1 className={styles.title}>Tell Us Your Preferences</h1>
      <InitialQuiz />
    </div>
  );
};

export default QuizPage;