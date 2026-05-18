// HomePage.jsx
// The root "/" page redirects to the shareable general CV.

import { Navigate } from 'react-router-dom'

const HomePage = () => <Navigate to="/cv/general" replace />

export default HomePage
