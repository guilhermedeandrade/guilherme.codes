import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Heading,
} from '@chakra-ui/core'

function Header(): React.ReactElement {
  return (
    <Flex as="header" alignItems="center" padding={10} maxW={1200} mx="auto">
      <Stack isInline spacing={5} alignItems="center" flexGrow={1}>
        <Image src="header/avatar.jpg" rounded="full" size="60px" />

        <Heading as="h1" size="lg" fontWeight="normal">
          guilherme de andrade
        </Heading>
      </Stack>

      <Box as="nav">
        <List d="flex" fontSize="xl" alignItems="center">
          <ListItem mr={8} transition="opacity 0.3s" _hover={{ opacity: 0.7 }}>
            <a href="#about">about</a>
          </ListItem>

          <ListItem mr={8} transition="opacity 0.3s" _hover={{ opacity: 0.7 }}>
            <a href="#services">services</a>
          </ListItem>

          <ListItem mr={8} transition="opacity 0.3s" _hover={{ opacity: 0.7 }}>
            <a href="#projects">projects</a>
          </ListItem>

          <ListItem
            border="2px solid"
            borderColor="purple.600"
            rounded="md"
            px={2}
            color="purple.600"
            transition="opacity 0.3s"
            _hover={{ opacity: 0.7 }}
          >
            <a href="mailto:guilhermedeandrade@protonmail.com">contact</a>
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export default Header
