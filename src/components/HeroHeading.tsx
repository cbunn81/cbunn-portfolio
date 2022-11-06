import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import NextImage from "next/image";

import Section from "@components/Section";
import lightHeroBackgroundImage from "@images/gokyo-ri-crop-filtered.jpg";
import darkHeroBackgroundImage from "@images/sunset-crop.jpg";

export default function HeroHeading(props: HeadingProps) {
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
        {/* Light Mode Background Image */}
        <NextImage
          src={lightHeroBackgroundImage}
          alt="The view from the summit of Gokyo Ri in Nepal"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          priority
          style={{
            visibility: useColorModeValue("visible", "hidden"),
          }}
        />
        {/* Dark Mode Background Image */}
        <NextImage
          src={darkHeroBackgroundImage}
          alt="Sunset over the Yoshino River in Tokushima"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          priority
          style={{
            visibility: useColorModeValue("hidden", "visible"),
          }}
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
}
