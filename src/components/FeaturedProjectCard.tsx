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

import { ProjectType } from "types";

type FeaturedProjectProps = {
  project: ProjectType;
};

export default function FeaturedProjectCard({ project }: FeaturedProjectProps) {
  return (
    <LinkBox
      key={project.metadata.id}
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
        <NextLink href={`/projects#${project.metadata.id}`} passHref>
          <LinkOverlay>
            <Heading size={["sm", "md"]}>{project.metadata.title}</Heading>
          </LinkOverlay>
        </NextLink>
        <HStack
          wrap="wrap"
          // spacing causes wrapped rows to indent because it adds padding and margins
          spacing={0}
          // use gap instead, which only adds padding
          gap="0.5em"
        >
          {project.metadata.technologies.map((technology) => (
            <Tag key={technology} _light={{ bgColor: "gray.300" }} size="sm">
              {technology}
            </Tag>
          ))}
        </HStack>
        <Text>{project.metadata.description}</Text>
      </VStack>
    </LinkBox>
  );
}
