// CvVersionBanner.jsx
// Thin bar shown at the top of every CV page.
// Displays a button for each available CV version.
// The current version is highlighted; the others are clickable links.
// Employers can use this to switch between role-specific versions,
// and you can copy the URL from the browser to share a specific version.

import { useNavigate } from 'react-router-dom'
import { Box, Text, TextButton } from '@wix/design-system'
import { cvVersionList } from '../data/cvData'

const CvVersionBanner = ({ currentSlug }) => {
  const navigate = useNavigate()

  return (
    <Box
      align="center"
      verticalAlign="middle"
      gap="6px"
      paddingTop="10px"
      paddingBottom="10px"
      paddingLeft="24px"
      paddingRight="24px"
      backgroundColor="rgba(0,0,0,0.04)"
      borderRadius="8px"
      marginBottom="8px"
    >
      {/* Label on the left */}
      <Text size="tiny" secondary weight="bold" style={{ marginRight: 8 }}>
        CV VERSION:
      </Text>

      {/* One button per version — active version is shown as plain text */}
      {cvVersionList.map(({ slug, label }) => {
        const isActive = slug === currentSlug
        return isActive ? (
          // Active version — not clickable, visually highlighted
          <Box
            key={slug}
            paddingTop="4px"
            paddingBottom="4px"
            paddingLeft="12px"
            paddingRight="12px"
            backgroundColor="white"
            borderRadius="20px"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}
          >
            <Text size="tiny" weight="bold">
              {label}
            </Text>
          </Box>
        ) : (
          // Other versions — clickable, navigates without a full page reload
          <TextButton
            key={slug}
            size="tiny"
            onClick={() => navigate(`/cv/${slug}`)}
          >
            {label}
          </TextButton>
        )
      })}

      {/* Share hint on the right */}
      <Box style={{ marginLeft: 'auto' }}>
        <Text size="tiny" secondary>
          Share this URL for this role ↑
        </Text>
      </Box>
    </Box>
  )
}

export default CvVersionBanner
