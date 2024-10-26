import { Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import AppRoutes from './routes';

function App() {
  return (
    <Routes>
      {AppRoutes}
    </Routes>
  );
}

export default App;