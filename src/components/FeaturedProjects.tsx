import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { ProjectType } from "@types";
import Section from "@components/Section";
import SectionHeading from "@components/SectionHeading";
import { FeaturedProjectCard } from "@components/FeaturedProjectCard";

type FeaturedProjectsProps = {
  projects: ProjectType[];
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter(
    (project) => project.metadata.featured === true
  );
  return (
    <Section>
      <SectionHeading>Featured Projects:</SectionHeading>
      <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
        {featuredProjects.map((project: ProjectType) => (
          <FeaturedProjectCard
            key={project.metadata.id.toString()}
            {...project}
          />
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
