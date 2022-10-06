import { Heading, HeadingProps } from "@chakra-ui/react";

const SectionHeading = (props: HeadingProps) => (
  <Heading as="h2" size={"xl"} my={[4, 8]} {...props} />
);

export default SectionHeading;
