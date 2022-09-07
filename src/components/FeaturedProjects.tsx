import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FeaturedProjectCard } from "@components/FeaturedProjectCard";
import { projects } from "@data/projects";

export const FeaturedProjects = () => (
  <Box as="section" my={[10, 20]}>
    <Heading size={"xl"} my={[4, 8]}>
      Featured Projects:
    </Heading>
    <Flex flexDirection={["column", "row"]} flexWrap="wrap" gap="1em">
      {projects.map((project) => (
        <FeaturedProjectCard {...project} />
      ))}
    </Flex>
    <Flex justifyContent="end" my={[4, 6]}>
      <NextLink href="/projects" passHref>
        <Link fontStyle="italic">See all projects</Link>
      </NextLink>
    </Flex>
  </Box>
);
