import styles from './QuizQuestion.module.css';

const QuizQuestion = ({ question, value, onChange }) => {
  switch (question.type) {
    case 'single':
      return (
        <div className={styles.question}>
          <label className={styles.label}>{question.question}</label>
          <div className={styles.options}>
            {question.options?.map(option => (
              <div key={option.value} className={styles.radioOption}>
                <input
                  type="radio"
                  id={option.value}
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className={styles.radio}
                />
                <label htmlFor={option.value} className={styles.radioLabel}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
      
    case 'multiple':
      return (
        <div className={styles.question}>
          <label className={styles.label}>{question.question}</label>
          <div className={styles.options}>
            {question.options?.map(option => (
              <div key={option.value} className={styles.checkboxOption}>
                <input
                  type="checkbox"
                  id={option.value}
                  value={option.value}
                  checked={value?.includes(option.value)}
                  onChange={(e) => {
                    const newValue = value || [];
                    if (e.target.checked) {
                      onChange([...newValue, option.value]);
                    } else {
                      onChange(newValue.filter(v => v !== option.value));
                    }
                  }}
                  className={styles.checkbox}
                />
                <label htmlFor={option.value} className={styles.checkboxLabel}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
      
    case 'slider':
      return (
        <div className={styles.question}>
          <label className={styles.label}>{question.question}</label>
          <input
            type="range"
            min={question.min || 0}
            max={question.max || 100}
            step={question.step || 1}
            value={value || question.min || 0}
            onChange={(e) => onChange(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.sliderLabels}>
            <span>{question.min || 0}</span>
            <span>{question.max || 100}</span>
          </div>
        </div>
      );
      
    case 'text':
      return (
        <div className={styles.question}>
          <label className={styles.label}>{question.question}</label>
          <textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your answer here..."
            className={styles.textarea}
          />
        </div>
      );
      
    default:
      return null;
  }
};

export default QuizQuestion;