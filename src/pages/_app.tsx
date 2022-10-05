import "@fontsource/inter";

import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "@styles/Fonts";
import theme from "@styles/theme";
import { AppProps } from "next/app";

import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
