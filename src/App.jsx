import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import AppRoutes from './routes';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route>{AppRoutes}</Route>
      </Route>
    </Routes>
  );
}

export default App;