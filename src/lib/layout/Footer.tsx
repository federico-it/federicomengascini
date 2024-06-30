import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NowPlaying from "lib/components/NowPlaying";

const Footer = () => {
  return (
    <Box>
      <Flex as="footer" width="full" justifyContent="center">
        <Text fontSize="sm" color="gray.500">
          {new Date().getFullYear()} -{" "}
          <Link
            href="https://federicomengascini.com"
            isExternal
            rel="noopener noreferrer"
          >
            Federico
          </Link>
        </Text>
      </Flex>
      <NowPlaying />
    </Box>
  );
};

export default Footer;
