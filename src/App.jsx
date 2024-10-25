import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/HomePage'
// import PreferenceCenter from './pages/PreferenceCenter/PreferenceCenterPage'
// Import other pages as needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/preference-center" element={<PreferenceCenter />} /> */}
      {/* Add more routes as needed */}
      {/* For example: */}
      {/* <Route path="/account" element={<AccountPage />} /> */}
      {/* <Route path="/listings" element={<ListingsPage />} /> */}
      {/* <Route path="/listing/:id" element={<ListingDetailPage />} /> */}
    </Routes>
  )
}

export default App
