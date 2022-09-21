import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import MapProvider from '../map/MapProvider';
import Layout from '../layout';
import theme from '../theme';
import '../map/style.css';
import 'prismjs/themes/prism-tomorrow.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MapProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MapProvider>
    </ChakraProvider>
  );
}

export default MyApp;
