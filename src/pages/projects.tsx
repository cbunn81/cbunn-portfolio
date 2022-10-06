import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Box, Heading } from "@chakra-ui/react";

import Section from "@components/Section";
import { Project } from "@components/Project";
import { projectFilePaths, PROJECTS_PATH } from "utils/mdxUtils";

export default function Projects({ projects }) {
  return (
    <>
      <Section>
        <Heading size={["3xl", "4xl"]} my={[6, 12]}>
          Projects!
        </Heading>
      </Section>
      {projects.map((project) => (
        <Project key={project.data.id} {...project} />
      ))}
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
