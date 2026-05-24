import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
  TextButton,
} from '@wix/design-system'

const projectLinkLabel = (link) => {
  if (!link) return null
  if (link.includes('github.com')) return 'View on GitHub'
  return 'View project'
}

// A single project entry — same visual rhythm as EducationItem / ExperienceItem
const ProjectItem = ({ name, tech, year, description, link, liveLink, isLast }) => {
  return (
    <Box direction="vertical">
      <Box direction="vertical" gap="8px">

        {/* Project name */}
        <Box gap="12px" verticalAlign="middle" wrap="wrap">
          <Heading size="tiny">{name}</Heading>
          {year && (
            <Badge size="tiny" skin="warningLight">
              {year}
            </Badge>
          )}
          {link && (
            <TextButton
              size="tiny"
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectLinkLabel(link)}
            </TextButton>
          )}
          {liveLink && (
            <>
              <Text size="tiny" secondary>
                ·
              </Text>
              <TextButton
                size="tiny"
                as="a"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </TextButton>
            </>
          )}
        </Box>

        {/* Tech stack badges — one per technology */}
        {tech && tech.length > 0 && (
          <Box gap="6px" wrap="wrap">
            {tech.map((t, i) => (
              <Badge key={i} size="tiny" skin="neutralLight">
                {t}
              </Badge>
            ))}
          </Box>
        )}

        {/* Description paragraph */}
        {description && (
          <Text size="small" secondary>
            {description}
          </Text>
        )}

      </Box>
      {!isLast && <Divider skin="light" />}
    </Box>
  )
}

const ProjectsSection = ({ projects, lang }) => {
  if (!projects || projects.length === 0) {
    return null
  }
  const title = lang === 'he' ? 'פרוייקטים' : 'Projects'

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🚀</Text>
            <Heading size="small">{title}</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="24px">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              name={project.name}
              tech={project.tech}
              year={project.year}
              description={project.description}
              link={project.link}
              liveLink={project.liveLink}
              isLast={index === projects.length - 1}
            />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default ProjectsSection
