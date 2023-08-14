import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {bg: '#1C1C1C', 
            color: 'white',},
    },
  },
});

export default theme;