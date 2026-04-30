// HomePage.jsx
// Default landing page — fetches resume data from the Express API
// and renders it via the shared ResumeLayout component.

import { useState, useEffect } from 'react'
import { Box, Loader, Text, Page } from '@wix/design-system'
import ResumeLayout from '../components/ResumeLayout'
import serverAPI from '../serverAPI'

const HomePage = () => {
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch resume data from the server on first render
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await serverAPI.getResume()
        setResume(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchResume()
  }, [])

  if (loading) {
    return (
      <Page>
        <Page.Content>
          <Box align="center" verticalAlign="middle" height="100vh">
            <Box direction="vertical" align="center" gap="12px">
              <Loader size="large" />
              <Text secondary>Loading resume...</Text>
            </Box>
          </Box>
        </Page.Content>
      </Page>
    )
  }

  if (error) {
    return (
      <Page>
        <Page.Content>
          <Box align="center" verticalAlign="middle" height="100vh">
            <Text skin="error">Error: {error}</Text>
          </Box>
        </Page.Content>
      </Page>
    )
  }

  return <ResumeLayout resume={resume} />
}

export default HomePage
