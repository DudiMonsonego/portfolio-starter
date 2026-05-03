// HomePage.jsx
// The root "/" page.
// Privacy requirement: no public listing page. Users must have a direct /cv/<uuid> link.

import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', 'noindex, nofollow')

    const originalTitle = document.title
    document.title = 'CV link required'

    return () => {
      meta.setAttribute('content', 'index, follow')
      document.title = originalTitle
    }
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h2 style={{ marginTop: 0 }}>CV link required</h2>
      <p style={{ marginBottom: 0 }}>
        This site does not publish a list of CV versions. Please use the direct link you received.
      </p>
    </div>
  )
}

export default HomePage
