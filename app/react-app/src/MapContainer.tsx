import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { useMap } from './utils/MapContext';
import './style.css';

function MapContainer() {
  const map = useMap();
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    map.setTarget(document.getElementById('map') ?? undefined);
    return () => map.setTarget(undefined);
  });

  return (
    <Box display="flex" flexGrow="1" ref={mapRef}>
      <Box flexGrow="1" id="map" />
    </Box>
  );
}

export default MapContainer;
