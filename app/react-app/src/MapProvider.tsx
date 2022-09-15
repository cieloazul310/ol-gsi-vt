import * as React from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import { Attribution, defaults as defaultControl } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import layerGroup, { setVisibleLayer, type Layer } from './layers';
import { MapContext } from './utils/MapContext';
import { parseHash, setPermalink, setPopstate } from './utils/handleHash';
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
import './style.css';
/*
const storaged = window.localStorage.getItem('ol-gsi-vt:view');
const initialView = storaged ? JSON.parse(storaged) : null;
*/
const { zoom, center, rotation } = parseHash(window);

const map = new OlMap({
  view: new View({
    zoom: zoom || 13,
    center: center || fromLonLat([140.4606, 36.3703]),
    rotation: rotation || 0,
    constrainRotation: 4,
  }),
  layers: [layerGroup],
  controls: defaultControl({
    attribution: false,
  }).extend([
    new Attribution({
      collapsible: false,
    }),
  ]),
});

map.on('moveend', (event) => {
  const view = event.map.getView();
  window.localStorage.setItem(
    'ol-gsi-vt:view',
    JSON.stringify({ zoom: view.getZoom(), center: view.getCenter() })
  );
});

setPermalink(map);
setPopstate(map, window);

// map.on('pointermove', pointermove);
/*
const geolocation = new Geolocation({
  tracking: false,
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: map.getView().getProjection(),
});

setGeolocation(map, geolocation);
*/

function MapProvider({ children, layer }: { children: React.ReactNode; layer: Layer }) {
  React.useEffect(() => {
    setVisibleLayer(layer);
  }, [layer]);
  // const appState = useAppState();
  // const dispatch = useDispatch();

  // useMapEvent(map, 'singleclick', singleclick(appState, dispatch));
  /*
  React.useEffect(() => {
    geolocation.setTracking(appState.geolocation);
  }, [appState.geolocation]);
  React.useEffect(() => {
    vtLayer.setStyle(vtStyle(palette.type));
  }, [palette.type]);
  React.useEffect(() => {
    vectorLayer.getSource().clear();
    vectorLayer
      .getSource()
      .addFeatures(
        appState.features.map((feature) => pageToOlFeature(feature))
      );
  }, [appState.features]);
  React.useEffect(() => {
    vectorLayer.getSource().forEachFeature((feature) => {
      feature.setProperties({
        selected: feature.get('pageTitle') === appState.page?.title,
      });
    });
  }, [appState.page, appState.features]);
  React.useEffect(() => {
    vectorLayer.setStyle(
      appState.alwaysShowLabels ? allLabelStyle : vectorStyle
    );
  }, [appState.alwaysShowLabels]);
  */
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export default MapProvider;
