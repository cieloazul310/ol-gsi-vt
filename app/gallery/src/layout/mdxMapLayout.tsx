import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box, Container } from '@chakra-ui/react';
import BaseLayer from 'ol/layer/Base';
import mdxComponents from '../components/mdxComponents';
import Meta from './meta';
import MapContainer from '../map/MapContainer';
import { useMap } from '../map/MapContext';

export type MdxMapLayoutMeta = {
  title?: string;
  description?: string;
  layer: BaseLayer;
  layerId: string;
};

export type MdxMapLayoutProps = React.PropsWithChildren<{
  meta: MdxMapLayoutMeta;
}>;

function MdxMapLayout({ children, meta }: MdxMapLayoutProps) {
  const { title, description, layer, layerId } = meta;
  const map = useMap();
  React.useEffect(() => {
    if (map && layer) {
      layer.set('id', layerId);
      const layers = map.getLayers();
      console.log(layers.getLength());
      const isExist = layers
        .getArray()
        .some((lyr) => lyr.get('id') === layerId);
      layers.forEach((lyr) => {
        lyr.setVisible(lyr.get('id') === layerId);
      });
      if (!isExist) {
        map.addLayer(layer);
      }
    }
  });
  return (
    <>
      <Meta title={title} description={description} />
      <Box py={6} width="100%" height="60vh" display="flex" minHeight="320px">
        <MapContainer />
      </Box>
      <MDXProvider components={mdxComponents}>
        <Container maxW="container.lg">{children}</Container>
      </MDXProvider>
    </>
  );
}

export default MdxMapLayout;
