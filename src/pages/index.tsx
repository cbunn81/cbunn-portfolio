import { Link, Text } from "@chakra-ui/react";

import { FeaturedProjects } from "@components/FeaturedProjects";
import Section from "@components/Section";
import TitleHeading from "@components/TitleHeading";

const Index = () => (
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
    <FeaturedProjects />
  </>
);

export default Index;
