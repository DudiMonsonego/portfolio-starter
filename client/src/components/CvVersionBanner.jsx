// CvVersionBanner.jsx
// Top bar shown on every CV page with buttons to switch between public versions.
// Uses a plain <div> for the container so we don't pass invalid props to Wix DS Box.

import { useNavigate } from 'react-router-dom'
import { Text, TextButton } from '@wix/design-system'
import { bannerVersions } from '../data/cv-store'

const CvVersionBanner = ({ currentSlug }) => {
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      marginBottom: '16px',
      backgroundColor: '#f0f4f7',
      borderRadius: '8px',
      flexWrap: 'wrap',
    }}>

      {/* Static label */}
      <Text size="tiny" secondary weight="bold">
        CV VERSION:
      </Text>

      {/* One button per public version */}
      {bannerVersions.map(({ slug, label }) => {
        const isActive = slug === currentSlug
        return isActive ? (
          // Active version — highlighted pill, not clickable
          <div key={slug} style={{
            padding: '3px 12px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
          }}>
            <Text size="tiny" weight="bold">{label}</Text>
          </div>
        ) : (
          // Inactive versions — clickable, client-side navigation
          <TextButton
            key={slug}
            size="tiny"
            onClick={() => navigate(`/cv/${slug}`)}
          >
            {label}
          </TextButton>
        )
      })}

      {/* Share hint pushed to the right */}
      <div style={{ marginLeft: 'auto' }}>
        <Text size="tiny" secondary>Share this URL ↑</Text>
      </div>
    </div>
  )
}

export default CvVersionBanner
