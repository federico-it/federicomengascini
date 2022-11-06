import {
  Flex,
  Text,
  Image,
  Grid,
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
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
                >
                  Ecommerce
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  YUNSHOP
                </Heading>
                <Text color="gray.500" h="97px">
                  Compravendita Scarpe e Abbigliamento sia Nuovo che Usato.
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
                >
                  Tutorial
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  PLEXPY
                </Heading>
                <Text color="gray.500">
                  Crea il tuo Media Server Plex su Raspberry Pi economico, in
                  pochi e semplici passi.
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
                >
                  Tutorial
                </Text>
                <Heading fontSize="2xl" fontFamily="body">
                  INSTANTPY
                </Heading>
                <Text color="gray.500">
                  Raccolta di Semplici e Veloci Tutorial da 10 minuti massimo
                  per l'utilizzo della piattaforma Raspberry Py.
                </Text>
                <Button as="a" href="https://en.instantpy.it" target="_blank">
                  Go Now 📖
                </Button>
              </Stack>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Projects;
