import * as React from 'react';
import { Box, Button, ButtonGroup, HStack, Text } from '@chakra-ui/react';
import { toLonLat } from 'ol/proj';
import { useMap, useMapEvent } from './MapContext';
import { useResetView } from './view';

function MapContainer() {
  const map = useMap();
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const onReset = useResetView();
  const onClick = () => {
    if (mapRef.current) {
      mapRef.current.requestFullscreen();
    }
  };
  React.useEffect(() => {
    map?.setTarget(document.getElementById('map') ?? undefined);
    return () => map?.setTarget(undefined);
  });

  return (
    <Box>
      <Box width="100%" height="60vh" display="flex" minHeight="320px">
        <Box display="flex" flexGrow="1" ref={mapRef}>
          <Box flexGrow="1" id="map" />
        </Box>
      </Box>
      <ButtonGroup color="teal" variant="outline" py={2}>
        <Button onClick={onClick}>Full Screen</Button>
        {/*<Button>現在地を表示</Button>*/}
        <Button onClick={onReset}>表示をリセット</Button>
      </ButtonGroup>
    </Box>
  );
}

export default MapContainer;
