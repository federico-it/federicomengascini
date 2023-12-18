import { Box, AbsoluteCenter, Center, Flex, Text, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex as="header" width="full" align="center">
      {/* Hamburger Icon */}
      
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }} // Show on mobile, hide on medium screens and above
        onClick={toggleDrawer}
        mr="3"
      />
      

      {/* Desktop Navigation */}
      <Box display={{base: "none", md: "block"}}>
      <Text as={Link} href="/" mr="3">
        HOME
      </Text>
      <Text as={Link} href="/projects" mr="3">
        PROJECTS
      </Text>
      <Text as={Link} href="/status" mr={3}>
        STATUS
      </Text>
      <Text as={Link} href="mailto:info@federicomengascini.com">
        CONTACTS
      </Text>
      </Box>
      <Center w={300}>
      
        <Text as={Link}  href="/" fontWeight="bold"fontSize="3xl">FM</Text>
      
      </Center>
      

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} align="center" mt="12">
              <Text fontSize={18} as={Link} href="/" onClick={toggleDrawer}>
                HOME
              </Text>
              <Text fontSize={18} as={Link} href="/projects" onClick={toggleDrawer}>
                PROJECTS
              </Text>
              <Text fontSize={18} as={Link} href="/status" onClick={toggleDrawer}>
                UPTIME STATUS
              </Text>
              <Text fontSize={18} as={Link} href="mailto:info@federicomengascini.com" onClick={toggleDrawer}>
                CONTACTS
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
