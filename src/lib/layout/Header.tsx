import { Box, Flex, Text, Link } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    /* eslint-disable */
    <Flex as="header" width="full" align="center">
      <Text as={Link} href="/" mr="3">
        HOME
      </Text>
      <Text as={Link} href="/projects" mr="3">
        PROJECTS
      </Text>
      <Text as={Link} href="mailto:info@federicomengascini.com">
        CONTACT ME
      </Text>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
