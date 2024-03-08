import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const waveAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
`;

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        I'M FEDERICO{" "}
        <Box
          width={{ base: "100%", sm: "70%", md: "60%" }}
          margin="0 auto"
          animation={`${waveAnimation} 1s linear infinite`} // Cambiato da "steps" a "linear"
        >
          <Text as="span" fontSize="xl" display="inline-block" verticalAlign="middle">
            👋🏻
          </Text>
        </Box>
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Student at the University of Camerino.
      </Text>
    </Grid>
  );
};

export default SomeText;
