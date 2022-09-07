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
  id: number;
  featured: boolean;
  title: string;
  localURL: string;
  githubURL: string;
  description: string;
  technologies: string[];
};

export const FeaturedProjectCard = (project: Project) => (
  <LinkBox
    key={project.id}
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
      <LinkOverlay href={project.localURL}>
        <Heading size={["sm", "md"]}>{project.title}</Heading>
      </LinkOverlay>
      <HStack
        wrap="wrap"
        // spacing causes wrapped rows to indent because it adds padding and margins
        spacing={0}
        // use gap instead, which only adds padding
        gap="0.5em"
      >
        {project.technologies.map((technology) => (
          <Tag key={technology} _light={{ bgColor: "gray.300" }} size="sm">
            {technology}
          </Tag>
        ))}
      </HStack>
      <Text>{project.description}</Text>
    </VStack>
  </LinkBox>
);
