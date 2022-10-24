import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import NextImage from "next/image";

import Section from "@components/Section";
import lightHeroBackgroundImage from "@images/gokyo-ri-crop-filtered.jpg";
import darkHeroBackgroundImage from "@images/sunset-crop.jpg";

const HeroHeading = (props: HeadingProps) => {
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
          src={useColorModeValue(
            lightHeroBackgroundImage,
            darkHeroBackgroundImage
          )}
          alt={useColorModeValue(
            "The view from the summit of Gokyo Ri in Nepal",
            "Sunset over the Yoshino River in Tokushima"
          )}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          priority
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
