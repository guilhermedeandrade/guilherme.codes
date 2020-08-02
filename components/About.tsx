import { Flex, Heading, Stack, Text, Image, Link } from '@chakra-ui/core'

function About(): React.ReactElement {
  return (
    <Flex
      as="section"
      id="about"
      paddingX={10}
      paddingTop={5}
      paddingBottom={20}
      alignItems="center"
      justifyContent="space-between"
      maxW={1200}
      mx="auto"
    >
      <Stack maxWidth={600} spacing={5}>
        <Heading
          as="h2"
          fontSize={['4xl', '5xl', '5xl', '6xl']}
          color="purple.800"
        >
          I&apos;m Guilherme, software engineer and freelancer.
        </Heading>

        <Text fontWeight="medium" fontSize="lg">
          <Link
            href="https://github.com/guilhermedeandrade"
            isExternal
            color="purple.600"
          >
            I can develop
          </Link>{' '}
          complete web applications, static sites and mobile apps. From the
          backend to the frontend.{' '}
          <Link
            href="mailto:guilhermedeandrade@protonmail.com"
            isExternal
            color="purple.600"
          >
            Let&apos;s work together!
          </Link>
        </Text>
      </Stack>

      <Image
        display={['none', 'none', 'none', 'block']}
        src="about/to-the-moon.svg"
        alt="A rocket and an astrounaut on the moon's surface"
        size={400}
      />
    </Flex>
  )
}

export default About
