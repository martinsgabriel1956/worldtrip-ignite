import { Image, Box, Icon, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  inTheCountryPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ inTheCountryPage }) => {
  return (
    <Flex pt="8" display="flex" align="center">
      {inTheCountryPage && (
        <Box pl={["6", "28"]}>
          <Icon as={ChevronLeftIcon} w={[8, 10]} h={[8, 10]} />
        </Box>
      )}
      <Box w="100%" align="center" pr={inTheCountryPage ? ["8", "36"] : 0}>
        <Image
          w={["40%", "30%", "26%", "22%", "16%", "12%"]}
          src="/img/logo.svg"
          alt="logo"
        />
      </Box>
    </Flex>
  );
};
