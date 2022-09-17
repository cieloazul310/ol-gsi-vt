import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Layout';
import MapContainer from './MapContainer';
import MapProvider from './MapProvider';
import theme from './theme';
import StartScreen from './StartScreen';
import { type Layer } from './layers';

function App() {
  const layerState = React.useState<Layer>('opt-vt');

  return (
    <ChakraProvider theme={theme}>
      <MapProvider layer={layerState[0]}>
        <React.Suspense fallback={<StartScreen />}>
          <Layout layerState={layerState}>
            <MapContainer />
          </Layout>
        </React.Suspense>
      </MapProvider>
    </ChakraProvider>
  );
}

export default App;
