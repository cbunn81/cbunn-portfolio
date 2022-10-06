import { Heading, HeadingProps } from "@chakra-ui/react";

const TitleHeading = (props: HeadingProps) => (
  <Heading as="h1" size={["3xl", "4xl"]} my={[6, 12]} {...props} />
);

export default TitleHeading;
