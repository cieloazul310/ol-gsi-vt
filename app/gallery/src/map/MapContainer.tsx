import * as React from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useMap } from './MapContext';
import { useResetView } from './view';

function MapContainer() {
  const map = useMap();
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const cjstd = map?.getAllLayers().find((lyr) => lyr.get('id') === 'cjstd');
  const [cjstdVisibility, setCjstdVisibility] = React.useState(
    cjstd?.getVisible() ?? false
  );
  const onReset = useResetView();
  const onClick = () => {
    if (mapRef.current) {
      mapRef.current.requestFullscreen();
    }
  };
  const toggleCjstd = () => {
    console.log(map?.getLayers());
    cjstd?.setVisible(!cjstdVisibility);
    setCjstdVisibility(!cjstdVisibility);
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
      <Box overflowX="auto" py={2}>
        <ButtonGroup color="teal" variant="outline">
          <Button
            rightIcon={cjstdVisibility ? <ViewIcon /> : <ViewOffIcon />}
            onClick={toggleCjstd}
          >
            地理院地図
          </Button>
          <Button onClick={onClick}>Full Screen</Button>
          {/*<Button>現在地を表示</Button>*/}
          <Button onClick={onReset}>表示をリセット</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default MapContainer;
