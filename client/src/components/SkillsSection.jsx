import React from 'react'
import {
  Card,
  Text,
  Heading,
  Box,
  Divider,
  Badge,
} from '@wix/design-system'
/**
 * SkillsSection Component
 *
 * This component displays a list of skills.
 * Students should customize this component to display their skills data.
 *
 * Props:
 * - skills: Array of strings e.g. ['JavaScript', 'React', 'Node.js']
 *
 * TODO: Add your own styling and layout using Wix Design System components
 * See: https://www.wixdesignsystem.com/
 */

const SkillsSection = (props) => {
  const { skills } = props
  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🛠️</Text>
            <Heading size="small">Skills</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="8px">
          {skills.map((skill, index) => (
            <Badge key={index} skin="neutralStandard" type='outlined' size="small" skinColor="A1">
              {skill}
            </Badge>
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}
export default SkillsSection
