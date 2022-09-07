import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { projects } from "@data/projects";

const Projects = () => (
  <>
    <Head>
      <title>Christopher Bunn - Projects</title>
      <meta name="author" content="Christopher Bunn" />
      <meta
        name="description"
        content="I'm Christopher Bunn. These are some of the web and software development projects I've made."
      />
      <meta property="og:title" content="Christopher Bunn - Projects" />
      <meta
        property="og:description"
        content="I'm Christopher Bunn. These are some of the web and software development projects I've made."
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
        py={[2, 4]}
        flex="1"
        alignItems={"start"}
      >
        <Box as="section" my={[4, 8]}>
          <Heading size={["3xl", "4xl"]} my={[6, 12]}>
            Projects!
          </Heading>
        </Box>
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Projects;
