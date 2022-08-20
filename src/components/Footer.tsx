import { Box, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => (
  <Stack
    as="footer"
    direction={["column", "row"]}
    alignItems="center"
    justifyContent="space-between"
    maxW="container.lg"
    w="100%"
  >
    <Box>Copyright 2022 - Christopher Bunn</Box>
    <Box>
      <IconButton
        aria-label="cbunn81 at GitHub"
        as={Link}
        href="https://github.com/cbunn81"
        size="lg"
        variant="ghost"
        icon={<FaGithub />}
      />
      <IconButton
        aria-label="Christopher Bunn at LinkedIn"
        as={Link}
        href="https://www.linkedin.com/in/cbunn81/"
        size="lg"
        variant="ghost"
        icon={<FaLinkedin />}
      />
      <IconButton
        aria-label="Christopher Bunn's email address'"
        as={Link}
        href="mailto:cbunn@cbunn.com"
        size="lg"
        variant="ghost"
        icon={<FiMail />}
      />
    </Box>
  </Stack>
);
