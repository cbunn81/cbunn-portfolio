import { NextSeo } from "next-seo";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import { ChakraNextImage } from "@components/ChakraNextImage";
import Section from "@components/Section";
import HeroHeading from "@components/HeroHeading";

type PhotoType = {
  caption: string;
  src: string;
  width: number;
  height: number;
};

type PhotosProps = {
  photos: PhotoType[];
};

export default function Projects({ photos }: PhotosProps) {
  return (
    <>
      <NextSeo
        title="Christopher Bunn - Photos"
        openGraph={{ title: "Christopher Bunn - Photos" }}
      />
      <HeroHeading>Photos!</HeroHeading>
      <Section>
        <Text fontSize="xl">
          I'm planning to get a more sophisticated photo gallery up here soon,
          but for now, please have a look at some of my favorite photos.
        </Text>
      </Section>
      <Section>
        <VStack spacing={[20, 40]}>
          {photos.map((photo) => (
            <VStack w="100%">
              <ChakraNextImage
                src={photo.src}
                w={[
                  "100%",
                  photo.width >= photo.height
                    ? "clamp(600px, 75vw, 1000px)"
                    : "auto",
                ]}
                h={[
                  "auto",
                  photo.width >= photo.height
                    ? "auto"
                    : "clamp(600px, 75vw, 1000px)",
                ]}
                sx={{ aspectRatio: String(photo.width / photo.height) }}
              />
              <Text>{photo.caption}</Text>
            </VStack>
          ))}
        </VStack>
      </Section>
    </>
  );
}

// For now, async is removed because there's no awaiting the hard-coded array
export function getStaticProps() {
  const photos = [
    {
      caption: "this is a caption",
      src: "/images/featured_photos/D2H_1702.jpg",
      width: 1545,
      height: 2332,
    },
    {
      caption: "this is another caption",
      src: "/images/featured_photos/D2H_7705.jpg",
      width: 2464,
      height: 1632,
    },
  ];

  return {
    props: {
      photos,
    },
  };
}
