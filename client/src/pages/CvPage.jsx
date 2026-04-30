// CvPage.jsx
// Rendered at /cv/:slug for every CV version — public and private.
//
// Behaviour:
//   - Looks up the slug in cvStore.
//   - If not found → redirects to the default public version (no 404).
//   - If found and isPrivate: true → injects a noindex meta tag so the page
//     is never indexed by Google (safe to share privately with recruiters).
//   - If found and NOT private → normal public page with version-switcher banner.

import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ResumeLayout from '../components/ResumeLayout'
import { cvStore, defaultSlug } from '../data/cv-store'

const CvPage = () => {
  const { slug } = useParams()

  // If slug is unknown, redirect to the default version instead of showing an error
  if (!cvStore[slug]) {
    return <Navigate to={`/cv/${defaultSlug}`} replace />
  }

  const resume = cvStore[slug]

  return (
    <>
      {resume.isPrivate ? (
        // Private (job-specific) page: tell search engines not to index it
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>{resume.title} — David Monsonego</title>
        </Helmet>
      ) : (
        // Public page: allow indexing and set a descriptive title
        <Helmet>
          <meta name="robots" content="index, follow" />
          <title>{resume.title} — David Monsonego</title>
        </Helmet>
      )}

      {/* Pass the slug so ResumeLayout can highlight the correct banner button */}
      <ResumeLayout resume={resume} slug={slug} />
    </>
  )
}

export default CvPage
