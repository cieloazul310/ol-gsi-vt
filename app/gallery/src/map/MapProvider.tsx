import * as React from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import { Attribution, ScaleLine, defaults as defaultControl } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { gsiOptVtPaleLayer } from '@cieloazul310/ol-gsi-vt';
// import layerGroup, { setVisibleLayer, type Layer } from './layers';
import { MapContext } from './MapContext';
/*
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Geolocation from 'ol/Geolocation';
import { baseLayerGroup, setVisibleBaseLayer } from './layers/baseLayers';
import { vtLayer } from './layers/vt';
import vtStyle from './layers/vtStyle';
import { vectorStyle, allLabelStyle } from './map/vectorStyle';
import setGeolocation from './map/setGeolocation';
import { singleclick, pointermove } from './map/createVectorEvent';
import useMapEvent from './map/useMapEvent';
import { pageToOlFeature } from './utils/helpers';
import { useAppState, useDispatch } from './utils/AppStateContext';
*/

const storaged =
  typeof window === 'object'
    ? window.localStorage.getItem('ol-gsi-vt:view')
    : null;
const initialView = storaged ? JSON.parse(storaged) : null;
const layer = gsiOptVtPaleLayer();

const map =
  typeof window === 'object'
    ? new OlMap({
        view: new View({
          zoom: initialView?.zoom || 13,
          center: initialView?.center || fromLonLat([140.4606, 36.3703]),
          rotation: initialView?.rotation || 0,
          constrainRotation: 4,
        }),
        layers: [layer],
        controls: defaultControl({
          attribution: false,
        }).extend([
          new Attribution({
            collapsible: false,
          }),
          new ScaleLine(),
        ]),
      })
    : null;

map?.on('moveend', (event) => {
  const view = event.map.getView();
  window.localStorage.setItem(
    'ol-gsi-vt:view',
    JSON.stringify({ zoom: view.getZoom(), center: view.getCenter() })
  );
});

function MapProvider({
  children,
}: // layer,
{
  children: React.ReactNode;
  // layer: Layer;
}) {
  /*
  React.useEffect(() => {
    setVisibleLayer(layer);
  }, [layer]);
  */

  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export default MapProvider;
