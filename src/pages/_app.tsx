import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "../styles/Fonts";
import theme from "../styles/theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
