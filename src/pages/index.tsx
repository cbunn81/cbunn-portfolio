import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Flex, Link, Text } from "@chakra-ui/react";

import { ProjectType } from "types";
import FeaturedProjects from "@components/FeaturedProjects";
import Section from "@components/Section";
import TitleHeading from "@components/TitleHeading";
import { projectFilePaths, PROJECTS_PATH } from "@utils/mdxUtils";

type IndexProps = {
  projects: ProjectType[];
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <Section w="100%" maxW="100%" mx="0" my="0" position="relative">
        <Flex
          w="100%"
          sx={{ aspectRatio: "3.117" }}
          maxW="100%"
          mx="0"
          px="0"
          _light={{
            // The following is necessary to apply a filter to
            // a background image
            _before: {
              content: `""`,
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              aspectRatio: "3.117",
              backgroundImage: "/images/gokyo-ri-crop.jpg",
              backgroundSize: "contain",
              filter: "brightness(0.8)",
            },
          }}
          _dark={{ backgroundImage: "/images/sunset-crop.jpg" }}
          backgroundSize="contain"
          justifyContent="center"
          alignItems="center"
        >
          <TitleHeading
            // mx="8"
            my="0"
            display="flex"
            justifyContent="start"
            position="relative"
            color="gray.50"
            textShadow="0 1px 5px black"
          >
            Hello World!
          </TitleHeading>
        </Flex>
      </Section>
      <Section>
        <Text fontSize="xl">
          My name is Chris, and I'm a software developer. I'm originally from
          Philadelphia in the US, but I'm currently living in Tokushima, Japan.
          Please have a look at some of my recent projects, check out{" "}
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
      </Section>
      <FeaturedProjects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const projects = await Promise.all(
    projectFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
      const { content, data: metadata } = matter(source);
      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        scope: metadata,
      });

      return {
        mdxSource,
        metadata,
        filePath,
      };
    })
  );

  // Sort projects by ID before returning
  projects.sort((a, b) => Number(a.metadata.id) - Number(b.metadata.id));
  return { props: { projects } };
}
