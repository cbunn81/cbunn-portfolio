import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
// import { projects } from "@data/projects";
import { projectFilePaths, PROJECTS_PATH } from "utils/mdxUtils";

const components = {
  p: (props) => <Text my={[2, 4]} {...props} />,
};

export default function Projects({ projects }) {
  return (
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
          {projects.map((project) => (
            <Stack
              id={project.data.id.toString()}
              key={project.data.id.toString()}
              as="section"
              my={[10, 20]}
              direction={["column", "row"]}
              _odd={{ flexDirection: { sm: "row-reverse" } }}
              justifyContent="space-between"
              gap={[0, 8]}
            >
              <Image
                // Aspect ratio is 1.475
                w={["100vw", "clamp(200px, 40vw, 450px)"]}
                h={["68vw", "clamp(136px, 27vw, 305px)"]}
                my={[6, 0]}
                alignSelf="center"
                boxShadow="dark-lg"
                src={`/images/${project.data.image}`}
                alt={project.data.title}
              />
              <Box>
                <Heading size={"xl"} my={[2, 4]}>
                  {project.data.title}
                </Heading>
                <HStack
                  wrap="wrap"
                  // spacing causes wrapped rows to indent because it adds padding and margins
                  spacing={0}
                  // use gap instead, which only adds padding
                  gap="0.5em"
                >
                  {project.data.technologies.map((technology) => (
                    <Tag
                      key={technology}
                      _light={{ bgColor: "gray.300" }}
                      size="sm"
                    >
                      {technology}
                    </Tag>
                  ))}
                </HStack>
                {/* <Text my={[2, 4]}>{project.mdxSource}</Text> */}
                <MDXRemote {...project.mdxSource} components={components} />
              </Box>
            </Stack>
          ))}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const projects = await Promise.all(
    projectFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
      const { content, data } = matter(source);
      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        scope: data,
      });

      return {
        mdxSource,
        data,
        filePath,
      };
    })
  );

  return { props: { projects } };
}
