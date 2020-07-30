import { Flex, Heading, Stack, Text } from '@chakra-ui/core'
import { FiMonitor, FiServer, FiSmartphone } from 'react-icons/fi'

interface CardProps {
  title: string
  description: string
  icon: React.ReactElement
}

const cards: CardProps[] = [
  {
    icon: <FiMonitor size={36} />,
    title: 'Frontend',
    description:
      'Your website or web app will be responsive and work as expected regardless of the device',
  },
  {
    icon: <FiSmartphone size={36} />,
    title: 'Mobile',
    description:
      'Your mobile app will be compatible with both iOS or Android, from the same codebase',
  },
  {
    icon: <FiServer size={36} />,
    title: 'Backend',
    description:
      'If your web or mobile app also needs a server, I am here to help you as well',
  },
]

function Card({ icon, title, description }: CardProps): React.ReactElement {
  return (
    <Flex
      direction="column"
      alignItems="center"
      m={10}
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      bg="gray.50"
      textAlign="center"
    >
      {icon}

      <Heading mt={4} fontSize="xl" color="purple.700">
        {title}
      </Heading>

      <Text mt={4}>{description}</Text>
    </Flex>
  )
}

function Services(): React.ReactElement {
  return (
    <Stack as="section" id="services" isInline bg="purple.600">
      {cards.map(({ icon, title, description }) => (
        <Card key={title} icon={icon} title={title} description={description} />
      ))}
    </Stack>
  )
}

export default Services
