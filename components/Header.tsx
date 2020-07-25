import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Heading,
} from '@chakra-ui/core'

const imageUrl =
  'https://avatars0.githubusercontent.com/u/8797405?s=460&u=d4f57bff8140358062ba5cd006bf53ff3305f1a3&v=4'

function Header(): React.ReactElement {
  return (
    <Flex as="header" alignItems="center" padding={10}>
      <Stack isInline spacing={5} alignItems="center" flexGrow={1}>
        <Image src={imageUrl} rounded="full" size="60px" />

        <Heading as="h1" size="lg" fontWeight="normal">
          Guilherme de Andrade
        </Heading>
      </Stack>

      <Box as="nav">
        <List d="flex" fontSize="2xl">
          <ListItem mr={5}>About</ListItem>
          <ListItem mr={5}>Skills</ListItem>
          <ListItem mr={5}>Projects</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export default Header
