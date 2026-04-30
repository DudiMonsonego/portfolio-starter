import React from 'react'
import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
} from '@wix/design-system'

const ExperienceItem = ({ title, company, year, description, bullets, isLast }) => {
  return (
    <Box direction="vertical">
      <Box direction="vertical" gap="8px">
        <Box gap="12px" verticalAlign="middle">
          <Heading size="tiny">{title}</Heading>
          <Badge size="tiny" skin="warningLight">
            {year}
          </Badge>
        </Box>
        <Text size="small" weight="bold" skin="primary">
          {company}
        </Text>
        {bullets && bullets.length > 0 && (
          <Box direction="vertical" gap="4px" marginTop="4px">
            {bullets.map((bullet, i) => (
              <Box key={i} gap="8px">
                <Text size="small" secondary>•</Text>
                <Text size="small" secondary>{bullet}</Text>
              </Box>
            ))}
          </Box>
        )}
        {!bullets && description && (
          <Text size="small" secondary>
            {description}
          </Text>
        )}
      </Box>
      {!isLast && <Divider skin="light" />}
    </Box>
  )
}
const ExperienceSection = ({ experience }) => {
  if (!experience || experience.length === 0) {
    return null
  }
  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">💼</Text>
            <Heading size="small">Experience</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="24px">
          {experience.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.title}
              company={item.company}
              year={item.year}
              description={item.description}
              bullets={item.bullets}
              isLast={index === experience.length - 1}
            />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}
export default ExperienceSection
