import { Flex, Text, Image } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Text>WELCOME</Text>

      <Image boxSize="200px" src="/fede.png" alt="Federico Emoji" />
      <SomeText />
      <SomeImage />
      <Text>View My Projects to get started. 🚀</Text>

      <CTASection />
    </Flex>
  );
};

export default Home;
