import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

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
      <Flex as="main" w="100%" flexDirection={"column"} alignItems={"center"}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  </>
);

export default Layout;
