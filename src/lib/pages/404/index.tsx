import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import MotionBox from "lib/components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "50%", sm: "50%", md: "35%" }}
        margin="0 auto"
      >
        <Image src="/no404.png" alt="Error 404 not found Illustration" />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>
          <Button
            as={Link}
            href="/"
            backgroundColor={colorMode === "light" ? "gray.300" : "gray.500"}
            size="sm"
          >
            Let&apos;s Head Back
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
