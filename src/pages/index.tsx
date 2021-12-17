import type { NextPage } from "next";
import { Stack } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Stack W="100%">
      <Header inTheCountryPage />
    </Stack>
  );
};

export default Home;
