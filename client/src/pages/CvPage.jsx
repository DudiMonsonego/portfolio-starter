// CvPage.jsx
// Rendered at /cv/:slug
//
// 1. Looks up the slug in cvStore.
// 2. If not found, redirects to the default slug (no 404).
// 3. If cv.noindex is true, injects  <meta name="robots" content="noindex">
//    so private job-specific pages are not indexed by Google.

import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ResumeLayout from '../components/ResumeLayout'
import { cvStore, defaultSlug } from '../data/cv-store'

const CvPage = () => {
  const { slug } = useParams()

  // Resolve which CV version to show
  const cv = cvStore[slug]

  // If the slug doesn't exist at all, redirect to the default version
  if (!cv) {
    return <Navigate to={`/cv/${defaultSlug}`} replace />
  }

  return <CvPageContent slug={slug} cv={cv} />
}

// Separated so hooks always run in the same order (hooks can't be called after
// an early return, which is why the redirect lives in the parent component)
const CvPageContent = ({ slug, cv }) => {
  useEffect(() => {
    // Find or create the <meta name="robots"> tag
    let meta = document.querySelector('meta[name="robots"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      document.head.appendChild(meta)
    }

    // Private versions: tell search engines not to index this page
    meta.setAttribute('content', cv.noindex ? 'noindex, nofollow' : 'index, follow')

    // Also update the browser tab title so you can tell versions apart
    const originalTitle = document.title
    document.title = cv.noindex
      ? `${cv.label} — CV (Private)`
      : `${cv.name} — ${cv.title}`

    return () => {
      // Reset when navigating away
      meta.setAttribute('content', 'index, follow')
      document.title = originalTitle
    }
  }, [cv])

  return <ResumeLayout resume={cv} slug={slug} />
}

export default CvPage
