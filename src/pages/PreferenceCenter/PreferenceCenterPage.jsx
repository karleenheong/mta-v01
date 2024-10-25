import { useNavigate } from 'react-router-dom';
import PreferenceCenter from '../../components/preferences/PreferenceCenter';

const PreferenceCenterPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/preference-center/quick-quiz');
  };

  return (
    <PreferenceCenter onStartQuiz={handleStartQuiz} />
  );
};

export default PreferenceCenterPage;