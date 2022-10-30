import fs from "fs";
import path from "path";
import exifr from "exifr";
import imageSize from "image-size";

import { NextSeo } from "next-seo";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import { ChakraNextImage } from "@components/ChakraNextImage";
import Section from "@components/Section";
import HeroHeading from "@components/HeroHeading";

type PhotoType = {
  caption: string | null;
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
            <VStack key={photo.src} w="100%">
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
export async function getStaticProps() {
  const photoReadPath = "public/images/featured_photos/";
  const photoSrcPath = "/images/featured_photos/";
  const photos = await Promise.all(
    fs.readdirSync(photoReadPath).map(async (file) => {
      const { ImageDescription } = await exifr.parse(
        path.join(photoReadPath, file)
      );
      const dimensions = imageSize(path.join(photoReadPath, file));
      return {
        caption: ImageDescription ?? null,
        src: path.join(photoSrcPath, file),
        width: dimensions.width,
        height: dimensions.height,
      };
    })
  );

  return {
    props: {
      photos,
    },
  };
}
