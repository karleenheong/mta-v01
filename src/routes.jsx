import { Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/Home/HomePage';
import PreferenceCenterPage from './pages/PreferenceCenter/PreferenceCenterPage';
import QuizPage from './pages/Quiz/QuizPage';
import SectionQuizPage from './pages/Quiz/SectionQuizPage';
import SearchResultsContainer from './pages/SearchResults/SearchResultsContainer';
import ProfilesPage from './pages/Profiles/ProfilesPage';

const AppRoutes = (
  <Route element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/preference-center" element={<PreferenceCenterPage />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/section-quiz/:section" element={<SectionQuizPage />} />
    <Route path="/search" element={<SearchResultsContainer />} />
    <Route path="/profiles" element={<ProfilesPage />} />
  </Route>
);

export default AppRoutes;