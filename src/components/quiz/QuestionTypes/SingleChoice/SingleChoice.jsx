import styles from './SingleChoice.module.css';

const SingleChoice = ({ question, value, onChange }) => {
  return (
    <div className={styles.optionsContainer}>
      {question.options.map(option => (
        <button
          key={option.value}
          className={`${styles.optionButton} ${
            value === option.value ? styles.selected : ''
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SingleChoice;