import { Heading, HeadingProps } from "@chakra-ui/react";

export default function SectionHeading(props: HeadingProps) {
  return <Heading as="h2" size="xl" my={[4, 8]} {...props} />;
}
