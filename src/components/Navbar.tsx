import { useState } from "react";
import {
  Flex,
  Button,
  IconButton,
  Box,
  useColorModeValue,
  Spacer,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Container } from "./Container";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mobileMenuClick, setMobileMenuClick] = useState(false);
  const handleMobileMenuClick = () => {
    setMobileMenuClick((current) => !current);
  };

  const navItems = (
    <>
      <NextLink href="/" passHref>
        <Button as="a" variant="ghost" aria-label="Home" py={5}>
          Home
        </Button>
      </NextLink>

      <NextLink href="/about" passHref>
        <Button as="a" variant="ghost" aria-label="About" py={5}>
          About
        </Button>
      </NextLink>

      <NextLink href="/contact" passHref>
        <Button as="a" variant="ghost" aria-label="Contact" py={5}>
          Contact
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
          <Flex alignItems={"center"}>cbunn</Flex>
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
