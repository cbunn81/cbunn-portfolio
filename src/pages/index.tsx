import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

const Index = () => (
  <>
    <Head>
      <title>Christopher Bunn - Home</title>
      <meta name="author" content="Christopher Bunn" />
      <meta
        name="description"
        content="I'm Christopher Bunn. I'm Web and Software Developer based in Tokushima, Japan."
      />
      <meta
        property="og:title"
        content="Christopher Bunn - Web and Software Developer"
      />
      <meta
        property="og:description"
        content="I'm Christopher Bunn. I'm Web and Software Developer based in Tokushima, Japan."
      />
    </Head>
    <Flex
      h="100vh"
      flexDirection={"column"}
      justifyContent="start"
      alignItems={"center"}
    >
      <Navbar />
      <Container
        as="main"
        maxW={"container.lg"}
        w={"95%"}
        px={4}
        py={["2", "4"]}
        flex="1"
        alignItems={"start"}
      >
        <Heading size={"4xl"} my={[2, 4]}>
          Hello World!
        </Heading>
        <Text fontSize="xl">
          My name is Chris, and I'm a software developer. I'm originally from
          Philadelphia in the US, but I'm currently living in Tokushima, Japan.
          Please have a look at some of my recent projects, and feel free to
          contact me.
        </Text>
        <Heading size={"xl"} my={[2, 4]}>
          Featured Projects:
        </Heading>
        <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
          <Box
            bgColor={useColorModeValue("gray.100", "gray.900")}
            borderWidth="2px"
            borderColor={useColorModeValue("gray.300", "gray.700")}
            _hover={{ borderColor: "blue.500" }}
            borderRadius="xl"
            h="10em"
            flex="1 0 40%"
            px={[2, 4]}
            py={2}
          >
            <Heading size={["sm", "md"]}>ECATS Test</Heading>
            <HStack>
              <Tag size={["sm", "md"]}>Python</Tag>
              <Tag size={["sm", "md"]}>Django</Tag>
              <Tag size={["sm", "md"]}>JavaScript</Tag>
              <Tag size={["sm", "md"]}>React</Tag>
              <Tag size={["sm", "md"]}>Docker</Tag>
            </HStack>
            <Text>
              A full-stack, multiple-choice test app made to evaluate the
              English level of Japanese EFL/ESL students.
            </Text>
          </Box>
          <Box border="2px solid green" h="10em" flex="1 0 40%">
            Project 1
          </Box>
          <Box border="2px solid green" h="10em" flex="1 0 40%">
            Project 1
          </Box>
          <Box border="2px solid green" h="10em" flex="1 0 40%">
            Project 1
          </Box>
        </Flex>
        <Flex justifyContent="end">
          <NextLink href="/projects" passHref>
            <Link fontStyle="italic">See all projects</Link>
          </NextLink>
        </Flex>
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Index;
