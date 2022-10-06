import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import Section from "@components/Section";
import SectionHeading from "@components/SectionHeading";
import { FeaturedProjectCard } from "@components/FeaturedProjectCard";

type Project = {
  data: {
    id: number;
    featured: boolean;
    title: string;
    githubURL: string;
    image: string;
    description: string;
    technologies: string[];
  };
  mdxSource: MDXRemoteSerializeResult;
};

export default function FeaturedProjects({ projects }) {
  return (
    <Section>
      <SectionHeading>Featured Projects:</SectionHeading>
      <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.data.id.toString()} {...project} />
        ))}
      </Flex>
      <Flex justifyContent="end" my={[4, 6]}>
        <NextLink href="/projects" passHref>
          <Link fontStyle="italic">See all projects</Link>
        </NextLink>
      </Flex>
    </Section>
  );
}
