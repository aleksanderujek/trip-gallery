import { extendTheme } from "@chakra-ui/react";

const newTheme = {
    styles: {
      global: {
        'html, body': {
          color: '#151a2e',
          backgroundColor: '#f6f6f7'
        },
      },
      colors: {
        gallery: '#151a2e'
      }
    },
    colors: {
        gallery: '#151a2e'
    }
  }
  
export const theme = extendTheme(newTheme);