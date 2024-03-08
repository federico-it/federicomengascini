import { Flex, Text, SimpleGrid, GridItem, Box, Stack, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";

const projects = [
  {
    title: "YUNSHOP",
    image: "/yunshop.png",
    category: "Ecommerce",
    description: "Purchase and sale of both new and used shoes and clothing.",
    link: "https://yunshop.it",
  },
  {
    title: "PLEXPY",
    image: "/plexpy.png",
    category: "Tutorial",
    description: "Build your own Plex Media Server on a cheap Raspberry Pi, in a few simple steps.",
    link: "https://plexpy.federicomengascini.com",
  },
  {
    title: "INSTANTPY",
    image: "/instantpy.png",
    category: "Tutorial",
    description: "Collection of Simple and Fast Tutorials of 10 minutes maximum for using the Raspberry Py platform.",
    link: "https://instantpy.federicomengascini.com",
  },
  {
    title: "ONLYIPV6",
    image: "/onlyipv6.png",
    category: "Utility",
    description: "A site available only in ipv6 with the possibility to test your ipv6 connection with speedtest.",
    link: "https://onlyipv6.com",
  },
  {
    title: "UPTIMEBB",
    image: "/uptimebb.png",
    category: "Utility",
    description: "Powerful application that enables you to monitor the status of a Website or a IP Address in real-time.",
    link: "", // Add your link or set to empty string if not available
    disabled: true, // Set to true if the project is dismissed
  },
];

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      <NextSeo title="Projects" />
      <Text as="b" size="2xl">
        MY WORKS
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {projects.map((project, index) => (
          <GridItem key={index} w="100%" h="100%">
            <Box w="full" boxShadow="2xl" rounded="md" overflow="hidden">
              <Box
                position="relative"
                width="100%"
                paddingBottom={(9 / 14) * 100 + "%"}
                bg="gray.100"
                rounded="md"
                overflow="hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={
                    (isMobile && index < 2) || (!isMobile && index < 6)
                      ? true
                      : false
                  }
                  loading={(!isMobile && index >= 6) || (isMobile && index >= 2) ? "lazy" : "eager"}
                  style={{
                    borderRadius: "8px",
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Stack>
                <Text
                  color="pink.500"
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  mt={[50, 0, 0]}
                  p={3}
                >
                  {project.category}
                </Text>
                <Heading fontSize="2xl" fontFamily="body" p={3}>
                  {project.title}
                </Heading>
                <Text color="gray.500" h="97px" p={3}>
                  {project.description}
                </Text>
                <Button
                  m={3}
                  as="a"
                  href={project.link}
                  target="_blank"
                  disabled={project.disabled}
                  _disabled={{ cursor: "not-allowed", opacity: 0.5 }}
                  cursor={project.disabled ? "not-allowed" : "pointer"}
                  onClick={(e) => project.disabled && e.preventDefault()}
                >
                  {project.disabled ? "Dismissed ❌⛔️" : "Go Now"}
                </Button>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
