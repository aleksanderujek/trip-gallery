import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  colors: {
    'custom-navy': '#151a2e',
  },
  styles: {
    global: {
      'html, body': {
        color: 'custom-navy',
        '--chakra-colors-chakra-body-text': 'custom-navy',
        backgroundColor: '#f6f6f7'
      },
    },
  },
}
  
export const theme = extendTheme(customTheme);