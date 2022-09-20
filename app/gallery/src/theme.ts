import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    // https://andremonteiro.pt/chakra-ui-permanent-drawer/
    Drawer: {
      variants: {
        permanent: {
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});

export default theme;
