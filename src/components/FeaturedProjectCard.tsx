import { MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

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

export const FeaturedProjectCard = (project: Project) => (
  <LinkBox
    key={project.data.id}
    borderWidth="2px"
    _light={{ bgColor: "gray.50", borderColor: "gray.300" }}
    _dark={{ bgColor: "gray.900", borderColor: "gray.700" }}
    // _hover needs an important flag to override the more specific definition under _dark
    _hover={{ borderColor: "blue.500 !important" }}
    borderRadius="xl"
    boxShadow="lg"
    flex="1 0 40%"
    px={[2, 4]}
    py={2}
  >
    <VStack alignItems="start" justifyContent="start" spacing={2}>
      <NextLink href={`/projects#${project.data.id}`} passHref>
        <LinkOverlay>
          <Heading size={["sm", "md"]}>{project.data.title}</Heading>
        </LinkOverlay>
      </NextLink>
      <HStack
        wrap="wrap"
        // spacing causes wrapped rows to indent because it adds padding and margins
        spacing={0}
        // use gap instead, which only adds padding
        gap="0.5em"
      >
        {project.data.technologies.map((technology) => (
          <Tag key={technology} _light={{ bgColor: "gray.300" }} size="sm">
            {technology}
          </Tag>
        ))}
      </HStack>
      <Text>{project.data.description}</Text>
    </VStack>
  </LinkBox>
);
