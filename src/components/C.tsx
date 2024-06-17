import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useObserve } from "../hooks";
import { scroller } from "react-scroll";

const C: FC = () => {
  const { dom, isObserved } = useObserve();

  useEffect(() => {
    if (isObserved) {
      scroller.scrollTo("C", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [isObserved]);

  return (
    <Flex ref={dom} id="C" bgColor="green.100" w="100%" h="100vh">
      C
    </Flex>
  );
};

export default C;
