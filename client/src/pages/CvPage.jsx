// CvPage.jsx
// Dynamic CV page rendered at /cv/:role.
// The `role` URL parameter is used as a key to look up the matching
// CV version from cvData. If the key doesn't exist, the default version
// is shown instead of a 404.

import { useParams } from 'react-router-dom'
import ResumeLayout from '../components/ResumeLayout'
import { cvVersions, defaultVersion } from '../data/cvData'

const CvPage = () => {
  // Extract the :role segment from the URL (e.g. "hr-tech", "technical-pm")
  const { role } = useParams()

  // Look up the requested version; fall back to the default if the slug is unknown
  const activeSlug = cvVersions[role] ? role : defaultVersion
  const resume = cvVersions[activeSlug]

  // Pass the active slug so the banner can highlight the correct button
  return <ResumeLayout resume={resume} slug={activeSlug} />
}

export default CvPage
