import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/Sticky.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} top={90} right={7} w={500} src={note} />
      <Heading mt={90} padding={"20px"} textAlign={"start"} size={"4xl"}>
        Notes App
      </Heading>
      <Text mt={2} padding={"20px"} maxW={"50%"} textAlign={"justify"} fontSize={"25px"} >
Hey !! Make Your Notes Online...
      </Text>
    </Box>
  );
}
