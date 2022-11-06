import { Text, VStack } from "@chakra-ui/react";

import { PhotoType } from "types";
import ChakraNextImage from "@components/ChakraNextImage";

type PhotoProps = {
  photo: PhotoType;
  priority: boolean;
};

export default function FeaturedPhoto({ photo, priority }: PhotoProps) {
  return (
    <VStack key={photo.src} w="100%">
      <ChakraNextImage
        src={photo.src}
        alt={photo.caption ?? ""}
        w={[
          "100%",
          photo.width >= photo.height ? "clamp(600px, 75vw, 1000px)" : "auto",
        ]}
        h={[
          "auto",
          photo.width >= photo.height ? "auto" : "clamp(600px, 75vw, 1000px)",
        ]}
        sx={{ aspectRatio: String(photo.width / photo.height) }}
        boxShadow="lg"
        priority={priority}
      />
      <Text>{photo.caption}</Text>
    </VStack>
  );
}
