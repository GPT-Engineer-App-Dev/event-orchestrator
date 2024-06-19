import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Flex width="100%" justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <IconButton aria-label="Create Event" icon={<FaPlus />} size="lg" isRound mb={4} />
            <Heading as="h3" size="md" mb={2}>Create Event</Heading>
            <Text>Create new events and manage details.</Text>
            <Button mt={4} colorScheme="teal">Get Started</Button>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <IconButton aria-label="View Events" icon={<FaCalendarAlt />} size="lg" isRound mb={4} />
            <Heading as="h3" size="md" mb={2}>View Events</Heading>
            <Text>Browse and manage existing events.</Text>
            <Button mt={4} colorScheme="teal">View Events</Button>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <IconButton aria-label="Manage Attendees" icon={<FaUsers />} size="lg" isRound mb={4} />
            <Heading as="h3" size="md" mb={2}>Manage Attendees</Heading>
            <Text>Track and manage event attendees.</Text>
            <Button mt={4} colorScheme="teal">Manage</Button>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;