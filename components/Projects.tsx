import { Box, Heading, Text, Stack, Image, Link } from '@chakra-ui/core'
import { useMemo } from 'react'

interface ProjectProps {
  imagePath: string
  repoUrl: string
  title: string
  description: string
  isReversed?: boolean
}

function Project({
  imagePath,
  repoUrl,
  title,
  description,
  isReversed,
}: ProjectProps): React.ReactElement {
  const marginX = useMemo(() => (isReversed ? { mr: 50 } : { ml: 50 }), [
    isReversed,
  ])

  return (
    <Stack isInline p={10} isReversed={isReversed}>
      <Image src={imagePath} width={600} rounded="md" />

      <Box alignSelf="center" width={600} {...marginX}>
        <Heading fontSize="xl" color="purple.600">
          <Link href={repoUrl} isExternal>
            {title}
          </Link>
        </Heading>
        <Text mt={4}>{description}</Text>
      </Box>
    </Stack>
  )
}

function Projects(): React.ReactElement {
  return (
    <Stack
      as="section"
      id="projects"
      spacing={20}
      paddingTop={10}
      maxW={1200}
      mx="auto"
    >
      <Project
        imagePath="projects/be-the-hero.jpg"
        repoUrl="https://github.com/guilhermedeandrade/be-the-hero"
        title="Be The Hero"
        description="A full-stack application, including a mobile app, that connects helpful people with nonprofit organizations that are needing help with specific issues and accidents. Technologies used: Typescript, Node.js, Express, React, React Native and Jest."
      />

      <Project
        isReversed
        repoUrl="https://github.com/guilhermedeandrade/gostack-gobarber"
        imagePath="projects/gobarber.jpg"
        title="GoBarber"
        description="The purpose of GoBarber is to connect barbers with their clients. The clients can schedule appointments using the web app and the provider can check their next sessions on the mobile app. Technologies used:  Typescript, Node.js, Express, React, React Native, TypeORM, styled-components and Jest."
      />

      <Project
        imagePath="projects/gorestaurant.jpg"
        repoUrl="https://github.com/guilhermedeandrade/gostack-gorestaurant-mobile"
        title="GoRestaurant"
        description="GoRestaurant is a mobile application that emulates the flow of a food delivery application. You have different types of food available and you are able to select the ones you wish and, finally, order them! Technologies used: TypeScript and React Native."
      />
    </Stack>
  )
}

export default Projects
