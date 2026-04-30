import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
  TextButton,
} from '@wix/design-system'

// A single project entry — same visual rhythm as EducationItem / ExperienceItem
const ProjectItem = ({ name, tech, year, description, link, isLast }) => {
  return (
    <Box direction="vertical">
      <Box direction="vertical" gap="8px">

        {/* Project name + year badge — mirrors the degree + year row in Education */}
        <Box gap="12px" verticalAlign="middle">
          <Heading size="tiny">{name}</Heading>
          {year && (
            <Badge size="tiny" skin="warningLight">
              {year}
            </Badge>
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

        {/* Optional link — only rendered when a URL is provided */}
        {link && (
          <TextButton size="small" as="a" href={link} target="_blank" rel="noopener noreferrer">
            View Project →
          </TextButton>
        )}

      </Box>
      {!isLast && <Divider skin="light" />}
    </Box>
  )
}

const ProjectsSection = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🚀</Text>
            <Heading size="small">Projects</Heading>
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
              isLast={index === projects.length - 1}
            />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default ProjectsSection
