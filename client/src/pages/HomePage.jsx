// HomePage.jsx
// The root "/" page. Reads the default CV version directly from cvData.js —
// no server fetch needed. This keeps cvData.js as the single source of truth.

import { Navigate } from 'react-router-dom'
import { defaultVersion } from '../data/cvData'

// Redirect / → /cv/<defaultVersion> so there is only one code path for rendering.
// This means editing cvData.js is all you ever need to do.
const HomePage = () => {
  return <Navigate to={`/cv/${defaultVersion}`} replace />
}

export default HomePage
