import Head from "next/head";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
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
        <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
          <Box
            border="2px solid green"
            borderRadius={10}
            h="10em"
            flex="1 0 40%"
          >
            Project 1
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
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Index;
