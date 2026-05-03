// CvPage.jsx
// Rendered at /cv/:slug
//
// 1. Looks up the slug in cvVersions.
// 2. If not found, renders a generic "not found" message.
// 3. If cv.noindex is true, injects  <meta name="robots" content="noindex">
//    so private job-specific pages are not indexed by Google.

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResumeLayout from '../components/ResumeLayout'
import { getCvVersionBySlug } from '../data/cv-versions'

const CvPage = () => {
  const { slug } = useParams()

  const version = getCvVersionBySlug(slug)
  const cv = version?.content

  if (!cv) return <CvNotFound />

  return <CvPageContent slug={slug} cv={cv} />
}

// Separated so hooks always run in the same order (hooks can't be called after
// an early return, which is why the redirect lives in the parent component)
const CvPageContent = ({ _slug, cv }) => {
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

  return <ResumeLayout resume={cv} />
}

const CvNotFound = () => {
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'noindex, nofollow')

    const originalTitle = document.title
    document.title = 'CV not found'
    return () => {
      meta.setAttribute('content', 'index, follow')
      document.title = originalTitle
    }
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h2 style={{ marginTop: 0 }}>This CV link is invalid or expired.</h2>
      <p style={{ marginBottom: 0 }}>
        Please ask the sender for an updated link.
      </p>
    </div>
  )
}

export default CvPage
