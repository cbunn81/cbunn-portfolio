import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Index = () => (
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
    <Container
      h="100vh"
      display={"flex"}
      flexDirection={"column"}
      justifyContent="start"
    >
      <Navbar />
      <Container maxW={"container.lg"} my={["5", "10"]} flex="1">
        <Heading>This is a heading</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          nisi sit amet massa lobortis vulputate in eget mauris. Duis egestas
          nisi at leo tempor, non consectetur sapien fermentum. Sed porta elit
          sit amet orci pharetra, vitae sodales mauris aliquet. Sed lectus quam,
          pretium nec dignissim vel, pharetra non tortor. Nam quis lorem ipsum.
          Suspendisse sagittis, tortor vitae bibendum tempor, tellus odio luctus
          est, eu gravida tellus dui eget quam. Aenean non elementum turpis, eu
          consequat lacus. Vivamus at dolor mollis, blandit ex ut, auctor arcu.
          Quisque a lectus orci. Integer dictum quam a risus volutpat, sit amet
          elementum ipsum mollis. Ut interdum odio varius mollis maximus. Donec
          elementum vestibulum lectus ac faucibus. Praesent vitae orci nibh.
          Maecenas ultricies luctus augue non aliquet. Donec eget feugiat
          sapien. Sed quis rhoncus nulla.
        </Text>

        <Text>
          In hac habitasse platea dictumst. Pellentesque risus diam, posuere
          eget purus ac, condimentum vestibulum sem. Donec sed scelerisque
          dolor, sed ultricies leo. Sed quis odio nisi. Nunc sed diam ac purus
          interdum molestie. Vivamus ac malesuada eros, id cursus orci. Integer
          at mauris sed odio blandit rutrum. Donec bibendum ligula in dui
          rhoncus, vel tincidunt neque finibus. Quisque at leo egestas risus
          ornare vulputate eu quis quam. Integer sed dui in mauris feugiat
          accumsan et id eros. In ligula nulla, elementum a rhoncus nec,
          vulputate in nunc. Fusce ultricies tincidunt dui id consequat. Donec
          non enim quis orci convallis tincidunt. Sed quis facilisis mi. In
          tempus vestibulum ante vel venenatis. Aliquam at blandit tortor.
        </Text>
      </Container>
      <Footer />
    </Container>
  </>
);

export default Index;
