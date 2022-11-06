import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

import { ProjectType } from "types";
import Section from "@components/Section";
import HeroHeading from "@components/HeroHeading";
import Project from "@components/Project";
import { projectFilePaths, PROJECTS_PATH } from "@utils/mdxUtils";

type ProjectsProps = {
  projects: ProjectType[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <NextSeo
        title="Christopher Bunn - Projects"
        openGraph={{ title: "Christopher Bunn - Projects" }}
      />
      <HeroHeading>Projects!</HeroHeading>
      <Section>
        {projects.map((project) => (
          <Project key={project.metadata.id} project={project} />
        ))}
      </Section>
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
