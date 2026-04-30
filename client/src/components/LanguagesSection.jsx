import {
  Card,
  Text,
  Heading,
  Box,
} from '@wix/design-system'

const LanguagesSection = ({ languages }) => {
  if (!languages || languages.length === 0) {
    return null
  }

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">🌐</Text>
            <Heading size="small">Languages</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="12px">
          {languages.map((item, index) => (
            <Box key={index} direction="vertical" gap="2px">
              <Text size="small" weight="bold">{item.language}</Text>
              <Text size="small" secondary>{item.proficiency}</Text>
            </Box>
          ))}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default LanguagesSection
