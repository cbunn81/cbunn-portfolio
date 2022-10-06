import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import Section from "@components/Section";
import TitleHeading from "@components/TitleHeading";
import { Project } from "@components/Project";
import { projectFilePaths, PROJECTS_PATH } from "utils/mdxUtils";

export default function Projects({ projects }) {
  return (
    <>
      <Section>
        <TitleHeading>Projects!</TitleHeading>
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
