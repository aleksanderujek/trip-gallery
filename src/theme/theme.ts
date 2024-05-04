import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  styles: {
    global: {
      'html, body': {
        color: '#151a2e',
        backgroundColor: '#f6f6f7'
      },
    },
  },
}
  
export const theme = extendTheme(customTheme);