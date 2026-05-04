import {
  Card,
  Text,
  Heading,
  Box,
} from '@wix/design-system'

const AboutSection = ({ bio, lang }) => {
  const title = lang === 'he' ? 'אודות' : 'About Me'
  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">👤</Text>
            <Heading size="small">{title}</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Text size="medium" weight="normal">
          {bio}
        </Text>
      </Card.Content>
    </Card>
  )
}

export default AboutSection
