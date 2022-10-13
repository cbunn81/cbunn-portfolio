// From https://github.com/chakra-ui/chakra-ui/discussions/2475#discussioncomment-1405831
import { Box, BoxProps, chakra } from "@chakra-ui/react";
import NextImage, { ImageProps, ImageLoaderProps } from "next/image";

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "layout",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

export const ChakraNextImage = (props: ImageProps & BoxProps) => {
  const { src, alt, width, height, quality, layout, objectFit, ...rest } =
    props;
  return (
    <Box pos="relative" cursor="pointer" className="group" {...rest}>
      <ChakraNextUnwrappedImage
        w="auto"
        h="auto"
        loader={myLoader}
        layout="fill"
        width={width}
        height={height}
        quality={quality}
        objectFit={objectFit}
        src={src}
        alt={alt}
      />
    </Box>
  );
};
