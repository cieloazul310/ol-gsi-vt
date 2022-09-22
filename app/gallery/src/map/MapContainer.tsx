import * as React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useMap } from './MapContext';

function MapContainer() {
  const map = useMap();
  const mapRef = React.useRef<HTMLDivElement | null>(null);

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
      <HStack gap="2" py={2}>
        <Button color="teal" onClick={onClick}>
          Full Screen
        </Button>
      </HStack>
    </Box>
  );
}

export default MapContainer;
