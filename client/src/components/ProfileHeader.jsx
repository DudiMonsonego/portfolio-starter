import {
  Box,
  Avatar,
  Heading,
  Text,
  Badge,
  Divider,
} from '@wix/design-system'

const ProfileHeader = ({ name, title, location, email, phone }) => {
  return (
    <Box direction="vertical" gap="24px">
      <Box gap="24px" verticalAlign="middle">
        <Avatar
          size="size90"
          name={name}
          imgProps={{ src: 'profile.jpg' }}
          color="A1"
        />
        <Box direction="vertical" gap="6px">
          <Heading size="large">{name}</Heading>
          <Text size="medium" weight="bold" secondary>
            {title}
          </Text>
          <Box gap="12px" marginTop="6px">
            {location && (
              <Badge size="small" skin="neutralStandard">
                📍 {location}
              </Badge>
            )}
            {email && (
              <Badge size="small" skin="neutralStandard">
                <span style={{ textTransform: 'none' }}>✉️ {email}</span>
              </Badge>
            )}
            {phone && (
              <Badge size="small" skin="neutralStandard">
                📱 {phone}
              </Badge>
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default ProfileHeader
