import { ReactNode } from "react";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Flex
      h="100vh"
      flexDirection={"column"}
      justifyContent="start"
      alignItems={"center"}
    >
      <Navbar />
      <Container
        as="main"
        maxW={"container.lg"}
        w={"95%"}
        px={4}
        py={[2, 4]}
        flex="1"
        alignItems={"start"}
      >
        {children}
      </Container>
      <Footer />
    </Flex>
  </>
);

export default Layout;
