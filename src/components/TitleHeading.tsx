import { Heading, HeadingProps } from "@chakra-ui/react";

const TitleHeading = (props: HeadingProps) => (
  <Heading as="h1" fontSize="12vw" my={[6, 12]} {...props} />
);

export default TitleHeading;
