import { Box, BoxProps } from "@chakra-ui/react";

const Section = (props: BoxProps) => (
  <Box as="section" my={[4, 8]} {...props} />
);

export default Section;
