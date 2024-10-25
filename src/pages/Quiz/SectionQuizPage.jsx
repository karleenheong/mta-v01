import { useParams } from 'react-router-dom';
import KitchenQuiz from '../../components/quiz/SectionQuizzes/KitchenQuiz/KitchenQuiz';

const SectionQuizPage = () => {
  const { section } = useParams();

  // For now we're just handling kitchen, but this could be expanded
  // to handle all section quizzes based on the section parameter
  const renderQuiz = () => {
    switch (section) {
      case 'kitchen':
        return <KitchenQuiz />;
      default:
        return <div>Quiz not found</div>;
    }
  };

  return renderQuiz();
};

export default SectionQuizPage;