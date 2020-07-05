import { Heading, Box, theme } from '@chakra-ui/core'

const Home: React.FC = () => (
  <Box as="main">
    <Heading as="h1" fontSize={theme.fontSizes['6xl']}>
      hey there! 👋
    </Heading>
  </Box>
)

export default Home
