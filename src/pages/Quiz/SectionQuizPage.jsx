import { useParams, useLocation } from 'react-router-dom';
import KitchenQuiz from '../../components/quiz/SectionQuizzes/KitchenQuiz/KitchenQuiz';

const SectionQuizPage = () => {
  const { section } = useParams();
  const location = useLocation();
  const { quizData } = location.state || {};

  const renderQuiz = () => {
    switch (section) {
      case 'kitchen':
        return <KitchenQuiz initialData={quizData} />;
      case 'workspace':
        return <div>Workspace quiz coming soon</div>;
      case 'bathroom':
        return <div>Bathroom quiz coming soon</div>;
      case 'bedroom':
        return <div>Bedroom quiz coming soon</div>;
      case 'livingArea':
        return <div>Living area quiz coming soon</div>;
      case 'property':
        return <div>Property quiz coming soon</div>;
      case 'buildingAmenities':
        return <div>Building amenities quiz coming soon</div>;
      case 'layoutAndSpace':
        return <div>Layout and space quiz coming soon</div>;
      case 'neighborhood':
        return <div>Neighborhood quiz coming soon</div>;
      case 'digitalNomad':
        return <div>Digital nomad quiz coming soon</div>;
      case 'professional':
        return <div>Professional services quiz coming soon</div>;
      case 'essential':
        return <div>Essential services quiz coming soon</div>;
      case 'transportation':
        return <div>Transportation quiz coming soon</div>;
      case 'entertainment':
        return <div>Entertainment quiz coming soon</div>;
      case 'localCommunity':
        return <div>Local community quiz coming soon</div>;
      case 'nomadCommunity':
        return <div>Nomad community quiz coming soon</div>;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Quiz Not Found</h2>
            <p className="text-gray-600">The requested section quiz is not available</p>
          </div>
        );
    }
  };

  return renderQuiz();
};

export default SectionQuizPage;