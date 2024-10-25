import { useState } from 'react';
import QuizLayout from '../QuizLayout/QuizLayout';
import styles from './InitialQuiz.module.css';

const INITIAL_QUIZ_QUESTIONS = [
  {
    id: 'stayDuration',
    type: 'choice',
    question: 'How long do you typically stay in one location?',
    options: [
      { value: 'lessThan1', label: 'Less than 1 month' },
      { value: '1to3', label: '1-3 months' },
      { value: '3to6', label: '3-6 months' },
      { value: '6plus', label: '6+ months' }
    ]
  },
  {
    id: 'budget',
    type: 'slider',
    question: 'What\'s your preferred accommodation budget per month?',
    min: 500,
    max: 3000,
    step: 100
  },
  // Add more questions following this pattern
];

const InitialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    
    if (currentQuestion < INITIAL_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    // Handle quiz submission
    console.log('Quiz answers:', answers);
  };

  const currentQuestionData = INITIAL_QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / INITIAL_QUIZ_QUESTIONS.length) * 100;

  return (
    <QuizLayout progressPercentage={progress}>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>{currentQuestionData.question}</h2>
        {currentQuestionData.type === 'choice' && (
          <div className={styles.options}>
            {currentQuestionData.options.map(option => (
              <button
                key={option.value}
                className={styles.optionButton}
                onClick={() => handleAnswer(currentQuestionData.id, option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        {currentQuestionData.type === 'slider' && (
          <input
            type="range"
            min={currentQuestionData.min}
            max={currentQuestionData.max}
            step={currentQuestionData.step}
            className={styles.slider}
            onChange={(e) => handleAnswer(currentQuestionData.id, e.target.value)}
          />
        )}
      </div>
    </QuizLayout>
  );
};

export default InitialQuiz;