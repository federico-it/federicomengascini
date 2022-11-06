import { Grid, Heading, Text } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/Box";

const SomeText = () => {
  return (
    /* eslint-disable */
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        I'M FEDERICO{" "}
        <MotionBox
          animate={{ rotate: [20, 0, 20, 0, 20] }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          width={{ base: "100%", sm: "70%", md: "60%" }}
          margin="0 auto"
        >
          <Text>👋🏻</Text>
        </MotionBox>
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Student at the University of Camerino.
      </Text>
    </Grid>
  );
};

export default SomeText;
