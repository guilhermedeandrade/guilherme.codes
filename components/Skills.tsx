import { Box, Heading, Stack, Text } from '@chakra-ui/core'

interface CardProps {
  title: string
  description: string
}

const cards: CardProps[] = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces',
  },
  {
    title: 'React Native',
    description: 'Develop native mobile apps using the power of React',
  },
  {
    title: 'Node.js',
    description: 'Node.js is designed to build scalable network applications',
  },
]

function Card({ title, description }: CardProps): React.ReactElement {
  return (
    <Box
      m={10}
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      bg="gray.50"
    >
      <Heading fontSize="xl" textAlign="center" color="purple.700">
        {title}
      </Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  )
}

function Skills(): React.ReactElement {
  return (
    <Stack as="section" isInline bg="purple.600">
      {cards.map(({ title, description }) => (
        <Card key={title} title={title} description={description} />
      ))}
    </Stack>
  )
}

export default Skills
