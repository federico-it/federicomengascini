import { Box, Button, Flex } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";

const repoLink = "https://github.com/federico-it";
const fiverrLink = "https://it.fiverr.com/xxapachexx"

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
        <Button
          as="a"
          href={fiverrLink}
          target="_blank"
          leftIcon={<TbBrandFiverr />}
          size="md"
        >
          View My Fiverr
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
