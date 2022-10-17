import { Box, BoxProps } from "@chakra-ui/react";

const Section = (props: BoxProps) => (
  <Box
    as="section"
    maxW="container.lg"
    w="95%"
    my={[4, 8]}
    mx={[4, 8]}
    flex="1"
    alignItems="start"
    {...props}
  />
);

export default Section;
