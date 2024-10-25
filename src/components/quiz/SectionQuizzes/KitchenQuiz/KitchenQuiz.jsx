import { useState } from 'react';
import QuizLayout from '../../QuizLayout/QuizLayout';
import styles from './KitchenQuiz.module.css';

const KITCHEN_QUIZ_QUESTIONS = [
  {
    id: 'kitchenType',
    type: 'choice',
    question: 'What type of kitchen setup do you prefer?',
    options: [
      { value: 'full', label: 'Full kitchen (separate room)' },
      { value: 'openPlan', label: 'Open-plan kitchen' },
      { value: 'kitchenette', label: 'Kitchenette' },
      { value: 'shared', label: 'Shared kitchen' }
    ]
  },
  {
    id: 'cookingFrequency',
    type: 'choice',
    question: 'How often do you cook?',
    options: [
      { value: 'multipleDaily', label: 'Every day, multiple meals' },
      { value: 'onceDaily', label: 'Daily, one main meal' },
      { value: 'fewTimes', label: 'A few times per week' },
      { value: 'rarely', label: 'Rarely' }
    ]
  },
  {
    id: 'stoveType',
    type: 'choice',
    question: 'Select your preferred stove type:',
    options: [
      { value: 'gas', label: 'Gas' },
      { value: 'electric', label: 'Electric' },
      { value: 'induction', label: 'Induction' },
      { value: 'any', label: 'Any is fine' }
    ]
  },
  {
    id: 'fridgeSize',
    type: 'choice',
    question: 'Which size refrigerator do you need?',
    options: [
      { value: 'full', label: 'Full-size (with freezer)' },
      { value: 'medium', label: 'Medium size' },
      { value: 'mini', label: 'Small/mini fridge' },
      { value: 'any', label: 'No preference' }
    ]
  },
  {
    id: 'counterSpace',
    type: 'slider',
    question: 'How much counter space do you need?',
    min: 1,
    max: 5,
    step: 1,
    labels: {
      1: 'Minimal',
      3: 'Moderate',
      5: 'Extensive'
    }
  }
];

const KitchenQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    
    if (currentQuestion < KITCHEN_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Kitchen preferences:', answers);
    // Here you would typically save the preferences and navigate back
    // to the preference center or to the next section
  };

  const currentQuestionData = KITCHEN_QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / KITCHEN_QUIZ_QUESTIONS.length) * 100;

  return (
    <QuizLayout progressPercentage={progress}>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>{currentQuestionData.question}</h2>
        
        {currentQuestionData.type === 'choice' && (
          <div className={styles.options}>
            {currentQuestionData.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestionData.id, option.value)}
                className={styles.optionButton}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {currentQuestionData.type === 'slider' && (
          <div className={styles.sliderContainer}>
            <input
              type="range"
              min={currentQuestionData.min}
              max={currentQuestionData.max}
              step={currentQuestionData.step}
              className={styles.slider}
              onChange={(e) => handleAnswer(currentQuestionData.id, e.target.value)}
            />
            <div className={styles.sliderLabels}>
              {Object.entries(currentQuestionData.labels).map(([value, label]) => (
                <span key={value}>{label}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </QuizLayout>
  );
};

export default KitchenQuiz;