import { Box, Grid, Heading, Text } from "@chakra-ui/react";



const SomeText = () => {
  return (
    /* eslint-disable */
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        I'M FEDERICO{" "}
        <Box
          
          width={{ base: "100%", sm: "70%", md: "60%" }}
          margin="0 auto"
        >
          <Text>👋🏻</Text>
        </Box>
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Student at the University of Camerino.
      </Text>
    </Grid>
  );
};

export default SomeText;
