import { Flex } from "@chakra-ui/react";
import { Heading, HeadingProps } from "@chakra-ui/react";

import Section from "./Section";

const HeroHeading = (props: HeadingProps) => (
  <Section w="100%" maxW="100%" mx="0" my="0" position="relative">
    <Flex
      w="100%"
      sx={{ aspectRatio: "3.117" }}
      maxW="100%"
      mx="0"
      px="0"
      _light={{
        // The following is necessary to apply a filter to
        // a background image
        _before: {
          content: `""`,
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          aspectRatio: "3.117",
          backgroundImage: "/images/gokyo-ri-crop.jpg",
          backgroundSize: "contain",
          filter: "brightness(0.8)",
        },
      }}
      _dark={{ backgroundImage: "/images/sunset-crop.jpg" }}
      backgroundSize="contain"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        as="h1"
        fontSize="12vw"
        my="0"
        display="flex"
        justifyContent="start"
        position="relative"
        color="gray.50"
        textShadow="0 1px 5px black"
        {...props}
      />
    </Flex>
  </Section>
);

export default HeroHeading;
