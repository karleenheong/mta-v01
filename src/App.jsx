import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import AppRoutes from './routes';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {AppRoutes}
      </Route>
    </Routes>
  );
}

export default App;