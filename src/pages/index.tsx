import Head from "next/head";
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Navbar } from "@components/Navbar";
import { FeaturedProjects } from "@components/FeaturedProjects";
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
        py={[2, 4]}
        flex="1"
        alignItems={"start"}
      >
        <Box as="section" my={[4, 8]}>
          <Heading size={["3xl", "4xl"]} my={[6, 12]}>
            Hello World!
          </Heading>
          <Text fontSize="xl">
            My name is Chris, and I'm a software developer. I'm originally from
            Philadelphia in the US, but I'm currently living in Tokushima,
            Japan. Please have a look at some of my recent projects, check out{" "}
            <Link
              href="/christopher_bunn-resume.pdf"
              textDecoration="underline 1px"
            >
              my resume
            </Link>
            , and feel free to{" "}
            <Link href="mailto:cbunn@cbunn.com" textDecoration="underline 1px">
              contact me
            </Link>
            .
          </Text>
        </Box>
        <FeaturedProjects />
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Index;
