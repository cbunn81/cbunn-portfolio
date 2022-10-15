import "@fontsource/inter";

import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "@styles/Fonts";
import theme from "@styles/theme";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "next-seo.config";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
