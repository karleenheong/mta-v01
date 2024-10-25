import { Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PreferenceCenterPage from './pages/PreferenceCenter/PreferenceCenterPage';
import QuizPage from './pages/Quiz/QuizPage';
import SectionQuizPage from './pages/Quiz/SectionQuizPage';

const AppRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/preference-center" element={<PreferenceCenterPage />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/section-quiz/:section" element={<SectionQuizPage />} />
  </>
);

export default AppRoutes;