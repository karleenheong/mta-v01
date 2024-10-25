import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import QuizLayout from '../QuizLayout/QuizLayout';
import styles from './InitialQuiz.module.css';

const QUIZ_QUESTIONS = [
  {
    id: 'stayDuration',
    type: 'choice',
    category: 'Digital Nomad Style & Duration',
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
    category: 'Digital Nomad Style & Duration',
    question: 'What\'s your preferred accommodation budget per month?',
    min: 500,
    max: 3000,
    step: 100,
    format: (value) => `$${value}`
  },
  {
    id: 'workSchedule',
    type: 'choice',
    category: 'Digital Nomad Style & Duration',
    question: 'What\'s your work schedule like?',
    options: [
      { value: 'standard', label: 'Standard work hours (9-5)' },
      { value: 'nightOwl', label: 'Night owl (evening/night)' },
      { value: 'earlyBird', label: 'Early bird (morning)' },
      { value: 'flexible', label: 'Flexible/variable hours' }
    ]
  },
  {
    id: 'workLocation',
    type: 'choice',
    category: 'Workspace Priorities',
    question: 'Where do you primarily work?',
    options: [
      { value: 'homeOffice', label: 'Need dedicated home office room' },
      { value: 'livingSpace', label: 'Work from living space desk' },
      { value: 'mixed', label: 'Mix of home and coworking spaces' },
      { value: 'coworking', label: 'Mostly coworking spaces' }
    ]
  },
  {
    id: 'internetSpeed',
    type: 'slider',
    category: 'Workspace Priorities',
    question: 'What\'s your minimum internet speed requirement?',
    min: 10,
    max: 1000,
    step: 10,
    format: (value) => `${value} Mbps`
  },
  {
    id: 'ergonomics',
    type: 'slider',
    category: 'Workspace Priorities',
    question: 'How important is a proper ergonomic setup?',
    min: 1,
    max: 5,
    step: 1,
    format: (value) => {
      const labels = ['Not important', 'Somewhat', 'Moderate', 'Important', 'Essential'];
      return labels[value - 1];
    }
  },
  {
    id: 'areaType',
    type: 'choice',
    category: 'Location & Neighborhood',
    question: 'What\'s your preferred area type?',
    options: [
      { value: 'cityCenter', label: 'City center' },
      { value: 'residential', label: 'Quiet residential' },
      { value: 'nomadHub', label: 'Digital nomad hub' },
      { value: 'suburban', label: 'Suburban' },
      { value: 'coastal', label: 'Beach/coastal' }
    ]
  },
  {
    id: 'neighborhoodFeatures',
    type: 'multiChoice',
    category: 'Location & Neighborhood',
    question: 'Which neighborhood features are most important?',
    maxSelections: 2,
    options: [
      { value: 'safety', label: 'Safety/security' },
      { value: 'dining', label: 'Dining options' },
      { value: 'coworking', label: 'Coworking spaces' },
      { value: 'fitness', label: 'Fitness facilities' },
      { value: 'expat', label: 'Expat community' },
      { value: 'culture', label: 'Local culture' },
      { value: 'nightlife', label: 'Nightlife' }
    ]
  },
  {
    id: 'propertyType',
    type: 'choice',
    category: 'Living Preferences',
    question: 'What\'s your preferred property type?',
    options: [
      { value: 'apartment', label: 'Entire apartment' },
      { value: 'studio', label: 'Studio' },
      { value: 'privateRoom', label: 'Private room' },
      { value: 'coliving', label: 'Co-living space' },
      { value: 'serviced', label: 'Serviced apartment' }
    ]
  },
  {
    id: 'mustHaveAmenities',
    type: 'multiChoice',
    category: 'Living Preferences',
    question: 'Which amenities are must-haves?',
    maxSelections: 3,
    options: [
      { value: 'laundry', label: 'In-unit laundry' },
      { value: 'kitchen', label: 'Full kitchen' },
      { value: 'bathroom', label: 'Private bathroom' },
      { value: 'outdoor', label: 'Balcony/outdoor space' },
      { value: 'gym', label: 'Building gym' },
      { value: 'parking', label: 'Parking' },
      { value: 'ac', label: 'Air conditioning' }
    ]
  }
];

const InitialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    console.log('Final answers:', answers);
    // Handle submission logic here
  };

  const currentQuestionData = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  const renderQuestion = () => {
    switch (currentQuestionData.type) {
      case 'choice':
        return (
          <div className={styles.options}>
            {currentQuestionData.options.map(option => (
              <button
                key={option.value}
                className={`${styles.optionButton} ${
                  answers[currentQuestionData.id] === option.value ? styles.selected : ''
                }`}
                onClick={() => handleAnswer(currentQuestionData.id, option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        );

      case 'multiChoice':
        return (
          <div className={styles.options}>
            {currentQuestionData.options.map(option => (
              <button
                key={option.value}
                className={`${styles.optionButton} ${
                  answers[currentQuestionData.id]?.includes(option.value) ? styles.selected : ''
                }`}
                onClick={() => {
                  const currentAnswers = answers[currentQuestionData.id] || [];
                  let newAnswers;
                  if (currentAnswers.includes(option.value)) {
                    newAnswers = currentAnswers.filter(v => v !== option.value);
                  } else if (currentAnswers.length < currentQuestionData.maxSelections) {
                    newAnswers = [...currentAnswers, option.value];
                  } else {
                    return;
                  }
                  handleAnswer(currentQuestionData.id, newAnswers);
                }}
              >
                {option.label}
              </button>
            ))}
            <div className={styles.helperText}>
              Select up to {currentQuestionData.maxSelections}
            </div>
          </div>
        );

      case 'slider':
        return (
          <div className={styles.sliderContainer}>
            <input
              type="range"
              min={currentQuestionData.min}
              max={currentQuestionData.max}
              step={currentQuestionData.step}
              value={answers[currentQuestionData.id] || currentQuestionData.min}
              className={styles.slider}
              onChange={(e) => handleAnswer(currentQuestionData.id, Number(e.target.value))}
            />
            <div className={styles.sliderValue}>
              {currentQuestionData.format(answers[currentQuestionData.id] || currentQuestionData.min)}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <QuizLayout progressPercentage={progress}>
      <div className={styles.questionContainer}>
        <div className={styles.category}>{currentQuestionData.category}</div>
        <h2 className={styles.question}>{currentQuestionData.question}</h2>
        
        {renderQuestion()}

        <div className={styles.navigationButtons}>
          <button
            className={`${styles.navButton} ${currentQuestion === 0 ? styles.disabled : ''}`}
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className={styles.icon} />
            Previous
          </button>

          {currentQuestion === QUIZ_QUESTIONS.length - 1 ? (
            <button
              className={`${styles.navButton} ${styles.submitButton}`}
              onClick={handleSubmit}
            >
              Complete Quiz
            </button>
          ) : (
            <button
              className={styles.navButton}
              onClick={handleNext}
            >
              Next
              <ChevronRight className={styles.icon} />
            </button>
          )}
        </div>
      </div>
    </QuizLayout>
  );
};

export default InitialQuiz;