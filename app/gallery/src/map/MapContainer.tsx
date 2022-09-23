import * as React from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { toLonLat } from 'ol/proj';
import { useMap, useMapEvent } from './MapContext';

function MapContainer() {
  const map = useMap();
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  /*
  let timer: NodeJS.Timeout;
  const [center, setCenter] = React.useState<number[]>(
    toLonLat(map?.getView().getCenter() ?? [0, 0]) ?? [0, 0]
  );
  const [zoom, setZoom] = React.useState<number>(
    map?.getView().getZoom() ?? 10
  );
  */
  const onClick = () => {
    if (mapRef.current) {
      mapRef.current.requestFullscreen();
    }
  };

  React.useEffect(() => {
    map?.setTarget(document.getElementById('map') ?? undefined);
    return () => map?.setTarget(undefined);
  });
  /*
  useMapEvent(map, 'movestart', () => {
    clearTimeout(timer);
  });
  useMapEvent(map, 'moveend', () => {
    timer = setTimeout(() => {
      if (map) {
        const view = map.getView();
        const currentCenter = view.getCenter() ?? center;
        const currentZoom = view.getZoom() ?? zoom;
        setCenter(toLonLat(currentCenter));
        setZoom(currentZoom);
      }
    }, 500);
  });
  */
  return (
    <Box>
      <Box width="100%" height="60vh" display="flex" minHeight="320px">
        <Box display="flex" flexGrow="1" ref={mapRef}>
          <Box flexGrow="1" id="map" />
        </Box>
      </Box>
      {/*
      <HStack gap="2" py={2}>
        <Text>zoom: {zoom.toFixed(4)}</Text>
        <Text>
          coordinates: {center.map((val) => val.toFixed(4)).join(', ')}
        </Text>
      </HStack>
      */}
      <HStack gap="2" py={2}>
        <Button color="teal" variant="outline" onClick={onClick}>
          Full Screen
        </Button>
      </HStack>
    </Box>
  );
}

export default MapContainer;
