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
import ProjectsSection from './ProjectsSection'

const ResumeLayout = ({ resume }) => {
  if (!resume) return null

  const dir = resume?.dir ?? 'ltr'
  const lang = resume?.lang

  return (
    <Page>
      <Page.Content>
        <Box paddingTop="18px" paddingBottom="36px">
          <div dir={dir} lang={lang}>
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
                <AboutSection bio={resume.bio} lang={lang} />
                <ExperienceSection experience={resume.experience} lang={lang} dir={dir} />
                <EducationSection education={resume.education} lang={lang} dir={dir} />
                <ProjectsSection projects={resume.projects} lang={lang} />
              </Box>
            </Cell>

            {/* Right sidebar — skills, languages, contact */}
            <Cell span={4}>
              <Box direction="vertical" gap="24px">
                <SkillsSection skills={resume.skills} lang={lang} />
                <LanguagesSection languages={resume.languages} lang={lang} />
                <ContactSection contact={resume.contact} lang={lang} />
              </Box>
            </Cell>
          </Layout>
          </div>
        </Box>
      </Page.Content>
    </Page>
  )
}

export default ResumeLayout
