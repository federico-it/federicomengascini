import { Flex, Text, useBoolean } from "@chakra-ui/react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";
const Home = () => {
  const [flag, setFlag] = useBoolean();
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
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? (
          <Image
            src="/fede_love.png"
            alt="Federico Emoji"
            width={200}
            height={200}
          />
        ) : (
          <Image
            src="/fede.PNG"
            alt="Federico Emoji"
            width={200}
            height={200}
            priority={true}
          />
        )}
      </div>

      <SomeText />
      <SomeImage />
      <Text>View My Projects to get started. 🚀</Text>

      <CTASection />
    </Flex>
  );
};

export default Home;
