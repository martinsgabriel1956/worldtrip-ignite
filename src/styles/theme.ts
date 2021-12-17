import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA"
    },
    green: {
      "900": "#47585B"
    },
    yellow: {
      "300": "#FFBA08"
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "green.900"
      }
    }
  }
})