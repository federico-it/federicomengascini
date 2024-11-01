import { Box, Flex, Link, Text } from "@chakra-ui/react";

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
    </Box>
  );
};

export default Footer;
