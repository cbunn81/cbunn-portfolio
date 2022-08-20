import {
  Flex,
  Button,
  IconButton,
  Box,
  useColorModeValue,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = (
    <>
      <NextLink href="/projects" passHref>
        <Button as="a" variant="ghost" aria-label="Projects" py={5}>
          Projects
        </Button>
      </NextLink>

      <NextLink href="/blog" passHref>
        <Button as="a" variant="ghost" aria-label="Blog" py={5}>
          Blog
        </Button>
      </NextLink>

      <NextLink href="/photos" passHref>
        <Button as="a" variant="ghost" aria-label="Photos" py={5}>
          Photos
        </Button>
      </NextLink>
    </>
  );
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      px={4}
      boxShadow={"lg"}
      w="100%"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={["95%", "95%", "95%"]}
        maxW={"container.lg"}
        mx="auto"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={["inherit", "none", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" py={5}>
              cbunn
            </Button>
          </NextLink>
          <HStack as="nav" spacing="4" display={{ base: "none", sm: "flex" }}>
            {navItems}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <DarkModeSwitch />
        </Flex>
      </Flex>

      {isOpen && (
        <Box
          py={4}
          w={["100%", "100%", "80%"]}
          maxW={"container.lg"}
          display={["inherit", "none", "none"]}
        >
          <Stack as={"nav"} spacing={4}>
            {navItems}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
