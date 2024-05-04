import { extendTheme } from "@chakra-ui/react";

const lightTheme = {
  styles: {
    global: {
      'html, body': {
        color: '#151a2e',
        backgroundColor: '#f6f6f7'
      },
    },
  },
}

const darkTheme = {
  styles: {
    global: {
      'html, body': {
        color: '#f6f6f7',
        backgroundColor: '#151a2e'
      },
    },
  },
}
  
export const theme = extendTheme({
  light: lightTheme,
  dark: darkTheme,
});