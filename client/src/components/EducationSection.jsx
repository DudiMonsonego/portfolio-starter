import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
} from '@wix/design-system'

const EducationItem = ({ degree, institution, year, description, bullets, isLast, dir }) => {
  const isRtl = dir === 'rtl'
  return (
    <Box direction="vertical">
      <Box direction="vertical" gap="6px">
        <Box gap="12px" verticalAlign="middle">
          {isRtl ? (
            <>
              <Badge size="tiny" skin="warningLight">
                {year}
              </Badge>
              <Heading size="tiny">{degree}</Heading>
            </>
          ) : (
            <>
              <Heading size="tiny">{degree}</Heading>
              <Badge size="tiny" skin="warningLight">
                {year}
              </Badge>
            </>
          )}
        </Box>
        <Text size="small" weight="bold" skin="primary">
          {institution}
        </Text>
        {bullets && bullets.length > 0 && (
          <Box direction="vertical" gap="4px">
            {bullets.map((line, i) => (
              <Text key={i} size="small" secondary>
                • {line}
              </Text>
            ))}
          </Box>
        )}
        {!bullets?.length && description && (
          <Text size="small" secondary>
            {description}
          </Text>
        )}
      </Box>
      {!isLast && <Divider skin="light" />}
    </Box>
  )
}

const EducationSection = ({ education, lang, dir }) => {
  if (!education || education.length === 0) {
    return null
  }
  const title = lang === 'he' ? 'השכלה' : 'Education'

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🎓</Text>
            <Heading size="small">{title}</Heading>
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
              bullets={edu.bullets}
              isLast={index === education.length - 1}
              dir={dir}
            />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default EducationSection
