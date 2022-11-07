import { Box, Button, Flex } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/federico-it";

const CTASection = () => {
  return (
    /* eslint-disable */
    <Box textAlign="center">
      <Box transform="scale(1)">
        <Flex justifyContent="center" marginY={4}>
          <Button as="a" href="/projects">
            Let's Go 🔥
          </Button>
        </Flex>
      </Box>

      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="md"
        >
          View My Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
