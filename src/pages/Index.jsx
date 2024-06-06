import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Input, Box, IconButton, Image, Flex, Heading, Textarea, StackDivider } from "@chakra-ui/react";
import { FaStar, FaChalkboardTeacher, FaUserGraduate, FaSearch } from "react-icons/fa";

const workshops = [
  { id: 1, title: "Introduction to Cooking", description: "Learn the basics of cooking delicious meals.", instructor: "Chef John", rating: 4.5 },
  { id: 2, title: "JavaScript for Beginners", description: "Start your journey into the world of JavaScript.", instructor: "Jane Doe", rating: 4.8 },
  { id: 3, title: "Guitar Lessons", description: "Learn to play the guitar from scratch.", instructor: "Mike Smith", rating: 4.7 },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleFeedbackSubmit = () => {
    // Implement feedback submission here
    alert("Feedback submitted!");
    setFeedback("");
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          SkillShare Connect
        </Heading>
        <HStack spacing={4}>
          <Input placeholder="Search for workshops..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <Flex wrap="wrap" justify="space-around">
          {workshops.map((workshop) => (
            <Box key={workshop.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} width="300px">
              <Image src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcHxlbnwwfHx8fDE3MTc2NDIxMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={workshop.title} />
              <VStack align="start" spacing={2}>
                <Heading as="h3" size="md">
                  {workshop.title}
                </Heading>
                <Text>{workshop.description}</Text>
                <HStack>
                  <FaChalkboardTeacher />
                  <Text>{workshop.instructor}</Text>
                </HStack>
                <HStack>
                  <FaStar />
                  <Text>{workshop.rating}</Text>
                </HStack>
                <Button onClick={() => setSelectedWorkshop(workshop)}>Join Workshop</Button>
              </VStack>
            </Box>
          ))}
        </Flex>
        {selectedWorkshop && (
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading as="h3" size="lg">
              Feedback for {selectedWorkshop.title}
            </Heading>
            <Textarea placeholder="Write your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            <Button mt={2} onClick={handleFeedbackSubmit}>
              Submit Feedback
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
