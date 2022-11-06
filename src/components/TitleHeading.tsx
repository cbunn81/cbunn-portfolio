import { Heading, HeadingProps } from "@chakra-ui/react";

export default function TitleHeading(props: HeadingProps) {
  return <Heading as="h1" fontSize="12vw" my={[6, 12]} {...props} />;
}
