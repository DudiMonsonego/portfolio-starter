// App.jsx
// Root router — maps URL paths to the correct page component.
//   /             → HomePage  (resume data fetched from the Express API)
//   /cv/:role     → CvPage    (static data from cvData.js, role-specific)
//   *             → CvPage with default version as a catch-all fallback

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CvPage from './pages/CvPage'

const App = () => {
  return (
    <Routes>
      {/* Default landing page — server-fetched resume */}
      <Route path="/" element={<HomePage />} />

      {/* Dynamic CV route — role slug selects the version from cvData */}
      <Route path="/cv/:role" element={<CvPage />} />

      {/* Catch-all: any unknown path renders the default CV version */}
      <Route path="*" element={<CvPage />} />
    </Routes>
  )
}

export default App
