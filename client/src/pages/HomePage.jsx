// HomePage.jsx
// The root "/" page. Reads the default CV version directly from cvData.js —
// no server fetch needed. This keeps cvData.js as the single source of truth.

import { Navigate } from 'react-router-dom'
import { defaultSlug } from '../data/cv-store'

// Redirect / → /cv/<defaultSlug>.
// All content lives in cv-store.js — that's the only file you need to edit.
const HomePage = () => {
  return <Navigate to={`/cv/${defaultSlug}`} replace />
}

export default HomePage
