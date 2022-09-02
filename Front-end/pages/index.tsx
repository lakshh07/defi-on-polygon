import type { NextPage } from "next";
import * as React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import useForumContract from "../hooks/contracts/useForumContract";
import { BigNumber } from "ethers";
import AuthButton from "../components/AuthButton";
import Questions from "../components/Questions";

const App: NextPage = () => {
  const contract = useForumContract();

  React.useEffect(() => {
    const fetchQuestion = async () => {
      console.log(
        "are we connecting to the contract!?: ",
        // Don't forget about solidity and BigNumbers!
        await contract.getQuestion(BigNumber.from(0))
      );
    };
    fetchQuestion();
  }, []);

  return (
    <Box p={8} maxW="600px" minW="320px" m="0 auto">
      <Questions />
      {/* <AuthButton text="Connected!"></AuthButton> */}
    </Box>
  );
};

export default App;
