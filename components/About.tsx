import { Flex, Heading, Stack, Text, Image, theme } from '@chakra-ui/core'

function About(): React.ReactElement {
  return (
    <Flex
      as="section"
      paddingX={theme.space[10]}
      paddingTop={theme.space[5]}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack maxWidth={600} spacing={5}>
        <Heading
          as="h2"
          fontSize={theme.fontSizes['6xl']}
          color={theme.colors.purple[800]}
        >
          I&apos;m Guilherme, software engineer and freelancer.
        </Heading>

        <Text
          fontWeight={theme.fontWeights.medium}
          fontSize={theme.fontSizes.lg}
        >
          I can develop complete web applications and static sites. From the
          backend to the frontend.
        </Text>
      </Stack>

      <Image
        src="/about-section-illustration.svg"
        alt="A rocket and an astrounaut on the moon's surface"
        size={400}
      />
    </Flex>
  )
}

export default About
