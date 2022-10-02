import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Project } from "@components/Project";
import { projectFilePaths, PROJECTS_PATH } from "utils/mdxUtils";

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
            <Project key={project.data.id} {...project} />
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
