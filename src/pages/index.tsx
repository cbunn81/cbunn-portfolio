import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { FeaturedProjects } from "@components/FeaturedProjects";

const Index = () => (
  <>
    <Box as="section" my={[4, 8]}>
      <Heading size={["3xl", "4xl"]} my={[6, 12]}>
        Hello World!
      </Heading>
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
    </Box>
    <FeaturedProjects />
  </>
);

export default Index;
