import {
  Card,
  Text,
  Heading,
  Box,
  TextButton,
} from '@wix/design-system'

const ContactItem = ({ icon, label, value, href }) => {
  return (
    <Box gap="12px" verticalAlign="middle">
      <Text size="small">{icon}</Text>
      <Box direction="vertical">
        <Text size="tiny" secondary>{label}</Text>
        {href ? (
          <TextButton size="small" as="a" href={href} target="_blank">
            {value}
          </TextButton>
        ) : (
          <Text size="small" weight="bold">{value}</Text>
        )}
      </Box>
    </Box>
  )
}

const ContactSection = ({ contact }) => {
  if (!contact) {
    return null
  }

  return (
    <Card>
      <Card.Header
        title={
          <Box gap="6px" verticalAlign="middle">
            <Text size="small">📬</Text>
            <Heading size="small">Contact</Heading>
          </Box>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="18px">
          {contact.email && (
            <ContactItem
              icon="✉️"
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
          )}
          {contact.phone && (
            <ContactItem
              icon="📱"
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />
          )}
          {contact.linkedin && (
            <ContactItem
              icon="💼"
              label="LinkedIn"
              value="View Profile"
              href={contact.linkedin}
            />
          )}
          {contact.github && (
            <ContactItem
              icon="💻"
              label="GitHub"
              value="View Profile"
              href={contact.github}
            />
          )}
          {contact.website && (
            <ContactItem
              icon="🌐"
              label="Website"
              value={contact.website}
              href={contact.website}
            />
          )}
        </Box>
      </Card.Content>
    </Card>
  )
}

export default ContactSection
