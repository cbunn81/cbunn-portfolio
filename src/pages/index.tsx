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
        <Box as="section" my={[10, 20]}>
          <Heading size={"xl"} my={[4, 8]}>
            Featured Projects:
          </Heading>
          <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
            {projects.map((project) => (
              <LinkBox
                key={project.id}
                bgColor="gray.100"
                borderWidth="2px"
                borderColor="gray.300"
                _dark={{ bgColor: "gray.900", borderColor: "gray.700" }}
                _hover={{ borderColor: "blue.500" }}
                borderRadius="xl"
                boxShadow="lg"
                flex="1 0 40%"
                px={[2, 4]}
                py={2}
              >
                <VStack alignItems="start" justifyContent="start" spacing={2}>
                  <LinkOverlay href={project.localURL}>
                    <Heading size={["sm", "md"]}>{project.title}</Heading>
                  </LinkOverlay>
                  <HStack
                    wrap="wrap"
                    // spacing causes wrapped rows to indent because it adds padding and margins
                    spacing={0}
                    // use gap instead, which only adds padding
                    gap="0.5em"
                  >
                    {project.technologies.map((technology) => (
                      <Tag
                        key={technology}
                        _light={{ bgColor: "gray.400" }}
                        size="sm"
                      >
                        {technology}
                      </Tag>
                    ))}
                  </HStack>
                  <Text>{project.description}</Text>
                </VStack>
              </LinkBox>
            ))}
          </Flex>
          <Flex justifyContent="end" my={[4, 6]}>
            <NextLink href="/projects" passHref>
              <Link fontStyle="italic">See all projects</Link>
            </NextLink>
          </Flex>
        </Box>
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Index;
