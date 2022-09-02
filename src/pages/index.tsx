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
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

const projects = [
  {
    id: 1,
    title: "ECATS Test",
    localURL: "/projects#",
    githubURL: "https://github.com/globallabo/ecats-test",
    description:
      "A full-stack, multiple-choice test app made to evaluate the English level of Japanese EFL/ESL students.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: 2,
    title: "Elite curriculum generator",
    localURL: "/projects#",
    githubURL: "https://github.com/globallabo/elite",
    description:
      "A project to easily generate a full set of PDFs for a business English curriculum with a standard template and content pulled from Google Sheets.",
    technologies: ["Python", "Google Sheets", "HTML", "CSS", "Jinja"],
  },
  {
    id: 3,
    title: "Eikenvocab flashcard generator",
    localURL: "/projects#",
    githubURL: "https://github.com/globallabo/eikenvocab",
    description:
      "A project to automatically produce a set of vocabulary flashcards for students studying to take standardized English exams.",
    technologies: ["Python", "Google Sheets", "HTML", "CSS", "Jinja"],
  },
  {
    id: 4,
    title: "checkr",
    localURL: "/projects#",
    githubURL: "https://github.com/cbunn81/checkr",
    description:
      "A command-line tool that scans files and records their cryptographic hashes, and later re-scans them and verifies the hashes to ensure data integrity.",
    technologies: ["Python", "Typer", "SQLite"],
  },
];

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
          {projects.map((project) => (
            <LinkBox
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
              <VStack alignItems="start" justifyContent="start" spacing={2}>
                <LinkOverlay href={project.localURL}>
                  <Heading size={["sm", "md"]}>{project.title}</Heading>
                </LinkOverlay>
                <HStack>
                  {project.technologies.map((technology) => (
                    <Tag
                      bgColor={useColorModeValue("gray.400", "")}
                      size={["sm", "sm"]}
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
