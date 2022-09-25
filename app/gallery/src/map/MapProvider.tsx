import * as React from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import LayerGroup from 'ol/layer/Group';
import { Attribution, ScaleLine, defaults as defaultControl } from 'ol/control';
import { MapContext } from './MapContext';
import { defaultZoom, defaultCenter } from './view';
import cjstd from './layers/cjstd';
/*
import Geolocation from 'ol/Geolocation';
import { baseLayerGroup, setVisibleBaseLayer } from './layers/baseLayers';
import { vectorStyle, allLabelStyle } from './map/vectorStyle';
import setGeolocation from './map/setGeolocation';
import { singleclick, pointermove } from './map/createVectorEvent';
*/

const storaged =
  typeof window === 'object'
    ? window.localStorage.getItem('ol-gsi-vt:view')
    : null;
const initialView = storaged ? JSON.parse(storaged) : null;

const map =
  typeof window === 'object'
    ? new OlMap({
        layers: [new LayerGroup({ properties: { id: 'layerGroup' } }), cjstd],
        view: new View({
          zoom: initialView?.zoom || defaultZoom,
          center: initialView?.center || defaultCenter,
          rotation: initialView?.rotation || 0,
          constrainRotation: 4,
        }),
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
