import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Homepage from './pages/Home/HomePage';
import PreferenceCenter from './pages/PreferenceCenter/PreferenceCenterPage';
import QuizPage from './pages/Quiz/QuizPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="preference-center">
          <Route index element={<PreferenceCenter />} />
          <Route path="quick-quiz" element={<QuizPage quizType="quick" />} />
          <Route path=":sectionId" element={<QuizPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;