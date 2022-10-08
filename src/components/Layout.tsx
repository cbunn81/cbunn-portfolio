import { ReactNode } from "react";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Head>
      <title>Christopher Bunn - Home</title>
      <meta name="author" content="Christopher Bunn" />
      <meta
        name="description"
        content="I'm Christopher Bunn. I'm Web and Software Developer based in Tokushima, Japan."
      />
      <meta
        property="og:title"
        content="Christopher Bunn - Web and Software Developer"
      />
      <meta
        property="og:description"
        content="I'm Christopher Bunn. I'm Web and Software Developer based in Tokushima, Japan."
      />
    </Head>
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
