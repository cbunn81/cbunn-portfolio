import fs from "fs";
import path from "path";
import exifr from "exifr";
import imageSize from "image-size";

import { NextSeo } from "next-seo";
import { Text, VStack } from "@chakra-ui/react";

import { PhotoType } from "types";
import Section from "@components/Section";
import HeroHeading from "@components/HeroHeading";
import FeaturedPhoto from "@components/FeaturedPhoto";

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
          {photos.map((photo, index) => {
            const props = {
              photo: photo,
              priority: index === 0,
            };
            return <FeaturedPhoto key={photo.src} {...props} />;
          })}
        </VStack>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const photoReadPath = "public/images/featured_photos/";
  const photoSrcPath = "/images/featured_photos/";
  const photos = await Promise.all(
    fs
      .readdirSync(photoReadPath)
      .filter((path) => /\.(jpg|jpeg)$/.test(path))
      .map(async (file) => {
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
