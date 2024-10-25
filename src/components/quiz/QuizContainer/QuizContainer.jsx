import { useState } from 'react';
import { quizQuestions } from '../../../data/quiz/questions';
import SingleChoice from '../QuestionTypes/SingleChoice/SingleChoice';
import MultipleChoice from '../QuestionTypes/MultipleChoice/MultipleChoice';
import SliderQuestion from '../QuestionTypes/SliderQuestion/SliderQuestion';
import MultiSlider from '../QuestionTypes/MultiSlider/MultiSlider';
import QuizNavigation from '../QuizNavigation/QuizNavigation';
import styles from './QuizContainer.module.css';

const QuizContainer = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [animationDirection, setAnimationDirection] = useState('forward');

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setAnimationDirection('forward');
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setAnimationDirection('backward');
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const renderQuestion = () => {
    const props = {
      question: currentQuestion,
      value: answers[currentQuestion.id],
      onChange: handleAnswer
    };

    switch (currentQuestion.type) {
      case 'single':
        return <SingleChoice {...props} />;
      case 'multiple':
        return <MultipleChoice {...props} />;
      case 'slider':
        return <SliderQuestion {...props} />;
      case 'multi_slider':
        return <MultiSlider {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.category}>{currentQuestion.category}</div>

      <div 
        className={`${styles.questionContainer} ${styles[animationDirection]}`}
        key={currentQuestion.id}
      >
        <h2 className={styles.question}>{currentQuestion.question}</h2>
        {renderQuestion()}
      </div>

      <QuizNavigation
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasAnswer={!!answers[currentQuestion.id]}
      />
    </div>
  );
};

export default QuizContainer;