import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

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

const components = {
  p: (props) => <Text my={[2, 4]} {...props} />,
};

export const Project = (project: Project) => (
  <Stack
    id={project.data.id.toString()}
    key={project.data.id.toString()}
    as="section"
    my={[10, 20]}
    direction={["column", "row"]}
    _odd={{ flexDirection: { sm: "row-reverse" } }}
    justifyContent="space-between"
    gap={[0, 8]}
  >
    <Image
      // Aspect ratio is 1.475
      w={["100vw", "clamp(200px, 40vw, 450px)"]}
      h={["68vw", "clamp(136px, 27vw, 305px)"]}
      my={[6, 0]}
      alignSelf="center"
      boxShadow="dark-lg"
      src={`/images/${project.data.image}`}
      alt={project.data.title}
    />
    <Box>
      <Heading size={"xl"} my={[2, 4]}>
        {project.data.title}
      </Heading>
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
      {/* <Text my={[2, 4]}>{project.mdxSource}</Text> */}
      <MDXRemote {...project.mdxSource} components={components} />
    </Box>
  </Stack>
);
