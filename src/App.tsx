import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

const App: FC = () => {
  return (
    <Flex flexDir="column">
      <A />
      <B />
      <C />
    </Flex>
  );
};

export default App;
