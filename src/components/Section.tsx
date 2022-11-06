import { Box, BoxProps } from "@chakra-ui/react";

export default function Section(props: BoxProps) {
  return (
    <Box
      as="section"
      maxW="container.lg"
      w="95%"
      my={[8, 12]}
      mx={[4, 8]}
      flex="1"
      alignItems="start"
      {...props}
    />
  );
}
