import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Link, Text } from "@chakra-ui/react";

import FeaturedProjects from "@components/FeaturedProjects";
import Section from "@components/Section";
import TitleHeading from "@components/TitleHeading";
import { projectFilePaths, PROJECTS_PATH } from "@utils/mdxUtils";

export default function Index({ projects }) {
  return (
    <>
      <Section>
        <TitleHeading>Hello World!</TitleHeading>
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

  // Sort projects by ID before returning
  projects.sort((a, b) => Number(a.data.id) - Number(b.data.id));
  return { props: { projects } };
}
