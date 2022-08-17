import { useState } from "react";
import {
  Flex,
  Button,
  IconButton,
  Box,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Container } from "./Container";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  const [mobileMenuClick, setMobileMenuClick] = useState(false);
  const handleMobileMenuClick = () => {
    setMobileMenuClick((current) => !current);
  };
  return (
    <Container>
      <Box
        as="nav"
        position="fixed"
        // left="0"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
      >
        {/* Desktop */}
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems="center"
          justifyContent="center"
        >
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5}>
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5}>
              About
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5}>
              Contact
            </Button>
          </NextLink>
          <DarkModeSwitch />
        </Flex>

        {/* Mobile */}
        <Flex justify="flex-end">
          <IconButton
            aria-label="Toggle Menu"
            size="lg"
            mr={2}
            icon={mobileMenuClick ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleMobileMenuClick}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>
      </Box>

      {/* Mobile Content */}
      <Box
        w="100vw"
        display={mobileMenuClick ? "flex" : "none"}
        bg={useColorModeValue("#ffffff40", "#20202380")}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="12"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        {/* <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={handleMobileMenuClick}
          />
        </Flex> */}

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Container>
  );
};
