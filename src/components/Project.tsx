import { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";

import { ChakraNextImage } from "./ChakraNextImage";
import { ProjectType } from "types";

const components = {
  p: (props: { children?: ReactNode }) => <Text my={[2, 4]} {...props} />,
};

export const Project = (project: ProjectType) => (
  <Stack
    id={project.metadata.id.toString()}
    key={project.metadata.id.toString()}
    as="section"
    my={[10, 20]}
    _first={{ marginTop: "0" }}
    direction={["column", "row"]}
    // direction="column"
    _odd={{ flexDirection: { sm: "row-reverse" } }}
    justifyContent="space-between"
    gap={[0, 8]}
  >
    <ChakraNextImage
      // Aspect ratio is 1.475
      w={["100%", "clamp(200px, 40vw, 450px)"]}
      sx={{ aspectRatio: "1.475" }}
      my={[6, 0]}
      alignSelf="center"
      boxShadow="dark-lg"
      src={`/images/${project.metadata.image}`}
      alt={project.metadata.title}
    />
    <Box flex="1">
      {/* flex of 1 is needed to keep the description from overflowing
			over the image containing box */}
      <Heading size={"xl"} my={[2, 4]}>
        {project.metadata.title}
      </Heading>
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
      <MDXRemote {...project.mdxSource} components={components} />
      <NextLink href={project.metadata.githubURL} passHref>
        <Button
          as="a"
          variant="outline"
          aria-label="See this project on GitHub"
          leftIcon={<FaGithub />}
        >
          See on GitHub
        </Button>
      </NextLink>
    </Box>
  </Stack>
);
