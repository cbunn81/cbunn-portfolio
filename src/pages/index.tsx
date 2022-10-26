import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Link, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { ProjectType } from "types";
import FeaturedProjects from "@components/FeaturedProjects";
import HeroHeading from "@components/HeroHeading";
import Section from "@components/Section";
import { projectFilePaths, PROJECTS_PATH } from "@utils/mdxUtils";

type IndexProps = {
  projects: ProjectType[];
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <NextSeo
        title="Christopher Bunn - Home"
        openGraph={{ title: "Christopher Bunn - Home" }}
      />
      <HeroHeading>Hello World!</HeroHeading>
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
