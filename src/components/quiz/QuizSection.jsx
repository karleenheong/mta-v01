import QuizQuestion from './QuizQuestion';
import styles from './QuizSection.module.css';

const QuizSection = ({ section, answers, onAnswerChange }) => {
  return (
    <div className={styles.section}>
      {section.questions.map(question => (
        <QuizQuestion
          key={question.id}
          question={question}
          value={answers[question.id]}
          onChange={(value) => onAnswerChange(question.id, value)}
        />
      ))}
    </div>
  );
};

export default QuizSection;