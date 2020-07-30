import { Box, Heading, Text, Stack, Image } from '@chakra-ui/core'
import { useMemo } from 'react'

interface ProjectProps {
  imagePath: string
  title: string
  description: string
  isReversed: boolean
}

const placeholderImagePath = 'https://picsum.photos/600/300'

const placeholderDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'

function Project({
  imagePath,
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
        <Heading fontSize="xl">{title}</Heading>
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
        isReversed={false}
        imagePath={placeholderImagePath}
        title="Project Number One"
        description={placeholderDescription}
      />
      <Project
        isReversed
        imagePath={placeholderImagePath}
        title="Project Number Two"
        description={placeholderDescription}
      />
      <Project
        isReversed={false}
        imagePath={placeholderImagePath}
        title="Project Number Three"
        description={placeholderDescription}
      />
    </Stack>
  )
}

export default Projects
