import {
  Flex,
  Text,
  Image,
  SimpleGrid,
  GridItem,
  Center,
  Box,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Projects = () => {
  return (
    /* eslint-disable */
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Projects" />
      <Text as="b" size="2xl">
        MY WORKS
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/yunshop.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[50, 0, 0]}
                >
                  Ecommerce
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  YUNSHOP
                </Heading>
                <Text color="gray.500" h="97px">
                  Purchase and sale of both new and used shoes and clothing.
                </Text>
                <Button as="a" href="https://yunshop.it" target="_blank">
                  Go Now 👟
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/plexpy.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[50, 0, 0]}
                >
                  Tutorial
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  PLEXPY
                </Heading>
                <Text color="gray.500">
                  Build your own Plex Media Server on a cheap Raspberry Pi, in a
                  few simple steps.
                </Text>
                <Button as="a" href="https://plexpy.com" target="_blank">
                  Go Now 🍿
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/instantpy.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[100, 0, 0]}
                >
                  Tutorial
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  INSTANTPY
                </Heading>
                <Text color="gray.500">
                  Collection of Simple and Fast Tutorials of 10 minutes maximum
                  for using the Raspberry Py platform.
                </Text>
                <Button as="a" href="https://instantpy.com" target="_blank">
                  Go Now 📖
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/onlyipv6.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[100, 0, 0]}
                >
                  Utility
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  ONLYIPV6
                </Heading>
                <Text color="gray.500">
                A site available only in ipv6 with the possibility to test your ipv6 connection with speedtest.
                </Text>
                <Button as="a" href="https://onlyipv6.com" target="_blank">
                  Go Now 🌐
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/ipmonitor.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[100, 0, 0]}
                >
                  Utility
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  IPmonitor
                </Heading>
                <Text color="gray.500">
                Powerful application that enables you to monitor the status of IP addresses in real-time.
                </Text>
                <Button as="a" target="" disabled>
                  Dismissed ❌⛔️
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Center py={2}>
            <Box w="full" boxShadow="2xl" rounded="md" p={3} overflow="hidden">
              <Box
                h="148px"
                bg="gray.100"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
              >
                <Image src="/uptimebb.png" />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[100, 0, 0]}
                >
                  Utility
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  UPTIMEBB
                </Heading>
                <Text color="gray.500">
                Powerful application that enables you to monitor the status of a Website or a IP Address in real-time.
                </Text>
                <Button as="a" href="https://demo.uptimebb.com" target="_blank">
                  Go Now 🌐
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
