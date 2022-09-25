import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box, Container } from '@chakra-ui/react';
import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import mdxComponents from '../components/mdxComponents';
import Meta from './meta';
import Header from './header';
import MapContainer from '../map/MapContainer';
import { useMap } from '../map/MapContext';

export type MdxMapLayoutMeta = {
  title?: string;
  description?: string;
  layer?: BaseLayer;
  layerId?: string;
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
      const baseLayersGroup = map
        .getLayers()
        .getArray()
        .find((lyr) => lyr.get('id') === 'layerGroup') as LayerGroup;
      const layers = baseLayersGroup.getLayers();
      const isExist = layers
        .getArray()
        .some((lyr) => lyr.get('id') === layerId);
      layers.forEach((lyr) => {
        lyr.setVisible(lyr.get('id') === layerId);
      });
      if (!isExist) {
        layers.push(layer);
      }
    }
  });
  return (
    <>
      <Meta title={title} description={description} />
      <Header title={title} />
      <MapContainer />
      <Box py={8} as="article">
        <MDXProvider components={mdxComponents}>
          <Container maxW="container.lg">{children}</Container>
        </MDXProvider>
      </Box>
    </>
  );
}

export default MdxMapLayout;
