import {
  Card,
  Text,
  Heading,
  Box,
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

const SkillLine = ({ skill }) => {
  const colonIndex = skill.indexOf(':')
  const isCategoryLine = colonIndex > 0 && colonIndex < 40

  if (isCategoryLine) {
    const label = skill.slice(0, colonIndex + 1)
    const items = skill.slice(colonIndex + 1).trim()
    return (
      <Text size="small" style={{ lineHeight: '1.5', wordBreak: 'break-word' }}>
        <Text size="small" weight="bold">
          {label}
        </Text>{' '}
        {items}
      </Text>
    )
  }

  return (
    <Badge skin="neutralStandard" type="outlined" size="small" skinColor="A1">
      {skill}
    </Badge>
  )
}

const SkillsSection = (props) => {
  const { skills, lang } = props
  const title = lang === 'he' ? 'כישורים טכניים' : 'Skills'
  const hasCategoryLines = skills?.some((s) => s.includes(':'))

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🛠️</Text>
            <Heading size="small">{title}</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap={hasCategoryLines ? '12px' : '8px'}>
          {skills.map((skill, index) => (
            <SkillLine key={index} skill={skill} />
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}
export default SkillsSection
