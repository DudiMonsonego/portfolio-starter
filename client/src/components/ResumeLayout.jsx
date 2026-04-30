// ResumeLayout.jsx
// Shared presentation component used by both the home page (server-fetched data)
// and each dynamic /cv/:role page (static cvData).
// Receives a `resume` object and renders the full resume UI.

import {
  Page,
  Layout,
  Cell,
  Box,
} from '@wix/design-system'
import ProfileHeader from './ProfileHeader'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'
import LanguagesSection from './LanguagesSection'
import CvVersionBanner from './CvVersionBanner'

// slug: the current URL slug (e.g. "hr-tech") passed in so the banner
// knows which version to highlight as active
const ResumeLayout = ({ resume, slug }) => {
  if (!resume) return null

  return (
    <Page>
      <Page.Content>
        <Box paddingTop="18px" paddingBottom="36px">
          {/* Show version switcher only on public pages; private CVs have no banner */}
          {!resume.isPrivate && <CvVersionBanner currentSlug={slug} />}

          <Layout>
            {/* Profile header spans the full 12-column grid */}
            <Cell span={12}>
              <ProfileHeader
                name={resume.name}
                title={resume.title}
                location={resume.location}
                email={resume.contact?.email}
                phone={resume.contact?.phone}
              />
            </Cell>

            {/* Left column — main content (bio, experience, education) */}
            <Cell span={8}>
              <Box direction="vertical" gap="24px">
                <AboutSection bio={resume.bio} />
                <ExperienceSection experience={resume.experience} />
                <EducationSection education={resume.education} />
              </Box>
            </Cell>

            {/* Right sidebar — skills, languages, contact */}
            <Cell span={4}>
              <Box direction="vertical" gap="24px">
                <SkillsSection skills={resume.skills} />
                <LanguagesSection languages={resume.languages} />
                <ContactSection contact={resume.contact} />
              </Box>
            </Cell>
          </Layout>
        </Box>
      </Page.Content>
    </Page>
  )
}

export default ResumeLayout
