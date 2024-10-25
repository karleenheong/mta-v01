import { useState } from 'react';
import QuizSection from './QuizSection';
import styles from './QuizSystem.module.css';

const QuizSystem = ({ sections, onComplete }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const progress = ((currentSectionIndex + 1) / sections.length) * 100;
  
  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };
  
  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };
  
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const currentSection = sections[currentSectionIndex];
  
  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>{currentSection.title}</h2>
          {currentSection.description && (
            <p className={styles.description}>{currentSection.description}</p>
          )}
        </div>
        
        <div className={styles.content}>
          <QuizSection
            section={currentSection}
            answers={answers}
            onAnswerChange={handleAnswerChange}
          />
          
          <div className={styles.navigation}>
            <button
              className={`${styles.button} ${styles.buttonOutline}`}
              onClick={handlePrevious}
              disabled={currentSectionIndex === 0}
            >
              Previous
            </button>
            
            <button 
              className={styles.button}
              onClick={handleNext}
            >
              {currentSectionIndex === sections.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSystem;