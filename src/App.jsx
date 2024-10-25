import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Homepage from './pages/Home/HomePage'
// import PreferenceCenter from './pages/PreferenceCenter/PreferenceCenterPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        {/* <Route path="preference-center" element={<PreferenceCenter />} /> */}
      </Route>
    </Routes>
  )
}

export default App