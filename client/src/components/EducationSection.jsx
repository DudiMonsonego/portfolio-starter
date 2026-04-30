import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
} from '@wix/design-system'

const EducationItem = ({ degree, institution, year, description, isLast }) => {
  return (
    <Box direction="vertical">
      <Box direction="vertical" gap="6px">
        <Box gap="12px" verticalAlign="middle">
          <Heading size="tiny">{degree}</Heading>
          <Badge size="tiny" skin="warningLight">
            {year}
          </Badge>
        </Box>
        <Text size="small" weight="bold" skin="primary">
          {institution}
        </Text>
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

const EducationSection = ({ education }) => {
  if (!education || education.length === 0) {
    return null
  }

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🎓</Text>
            <Heading size="small">Education</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="24px">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              description={edu.description}
              isLast={index === education.length - 1}
            />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default EducationSection
