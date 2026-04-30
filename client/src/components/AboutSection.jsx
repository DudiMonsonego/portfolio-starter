import {
  Card,
  Text,
  Heading,
  Box,
} from '@wix/design-system'

const AboutSection = ({ bio }) => {
  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">👤</Text>
            <Heading size="small">About Me</Heading>
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
