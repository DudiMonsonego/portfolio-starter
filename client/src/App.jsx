// App.jsx
// Root router — maps URL paths to the correct page component.
//   /             → HomePage  (resume data fetched from the Express API)
//   /cv/:slug     → CvPage    (static data from cv-versions.js, slug-specific)
//   *             → CvPage with default version as a catch-all fallback

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CvPage from './pages/CvPage'
import AdminPanel from './pages/AdminPanel'

const App = () => {
  return (
    <Routes>
      {/* Default landing page — server-fetched resume */}
      <Route path="/" element={<HomePage />} />

      {/* Dynamic CV route — role slug selects the version from cvData */}
      <Route path="/cv/:slug" element={<CvPage />} />

      <Route path="/admin-panel" element={<AdminPanel />} />

      {/* Catch-all: no public listing */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
