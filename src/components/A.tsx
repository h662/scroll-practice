import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const A: FC = () => {
  return (
    <Flex
      id="A"
      bgColor="red.100"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <ScrollLink to="B" spy={true} smooth={true}>
        B
      </ScrollLink>
      <ScrollLink to="C" spy={true} smooth={true}>
        C
      </ScrollLink>
    </Flex>
  );
};

export default A;
