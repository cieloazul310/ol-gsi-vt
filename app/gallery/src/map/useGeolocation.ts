// import * as React from 'react';
// import Geolocation from 'ol/Geolocation';
// import Feature from 'ol/Feature';
// import Circle from 'ol/style/Circle';
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import Style from 'ol/style/Style';
// import { useMap } from './MapContext';
// import Fill from 'ol/style/Fill';
// import Stroke from 'ol/style/Stroke';
/*
const geolocation = new Geolocation({
  // enableHighAccuracy must be set to true to have the heading value.
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: view.getProjection(),
});
*/
/*
export function useGeolocationClass() {
  const map = useMap();
  if (!map) return null;
  const view = map.getView();
  const geolocation = new Geolocation({
    // enableHighAccuracy must be set to true to have the heading value.
    trackingOptions: {
      enableHighAccuracy: true,
    },
    projection: view.getProjection(),
  });
  return geolocation;
}
*/
/*
  const positionFeature = new Feature();
  positionFeature.setStyle(
    new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({
          color: '#3399cc',
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2,
        }),
      }),
    })
  );
*/
/*
export function useGeolocation(): {
  toggle: () => void;
  active: boolean;
} {
  const map = useMap();
  const geolocation = useGeolocationClass();
  const [active, setActive] = React.useState(false);
  if (!geolocation || !map)
    return {
      toggle: () => {
        alert('現在地が取得できません');
      },
      active: false,
    };
  geolocation.on('error', () => {
    setActive(false);
  });
  const accuracyFeature = new Feature();
  geolocation.on('change:accuracyGeometry', function () {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry() ?? undefined);
  });
  const positionFeature = new Feature();
  positionFeature.setStyle(
    new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC',
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2,
        }),
      }),
    })
  );
  const geolocationLayer = new VectorLayer({
    map,
    source: new VectorSource({
      features: [accuracyFeature, positionFeature],
    }),
  });
  const toggle = () => {
    geolocationLayer.setVisible(!active);
    setActive(!active);
  };
  return { active, toggle };
}
*/
