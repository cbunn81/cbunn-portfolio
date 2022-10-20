import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import NextImage from "next/image";

import Section from "./Section";

const HeroHeading = (props: HeadingProps) => {
  const backgroundSrc = useColorModeValue(
    "/images/gokyo-ri-crop.jpg",
    "/images/sunset-crop.jpg"
  );
  const backgroundAlt = useColorModeValue(
    "The view from the summit of Gokyo Ri in Nepal",
    "Sunset over the Yoshino River in Tokushima"
  );
  return (
    <Section w="100%" maxW="100%" mx="0" my="0" position="relative">
      <Flex
        w="100%"
        sx={{ aspectRatio: "3.117" }}
        maxW="100%"
        mx="0"
        px="0"
        justifyContent="center"
        alignItems="center"
      >
        <NextImage
          src={backgroundSrc}
          alt={backgroundAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Heading
          as="h1"
          fontSize="12vw"
          my="0"
          display="flex"
          justifyContent="start"
          position="relative"
          color="gray.50"
          textShadow="0 1px 5px black"
          zIndex="1"
          {...props}
        />
      </Flex>
    </Section>
  );
};

export default HeroHeading;
