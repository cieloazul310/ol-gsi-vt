import { useEffect, useRef, useState } from "react";
import OlMap from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Geolocation from "ol/Geolocation";
import { Attribution, ScaleLine, defaults as defaultControl } from "ol/control";
import Link from "ol/interaction/Link";
import { gsiOptVtLayer, gsiOptVtStyle } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import GeolocationControl from "@/utils/geolocationControl";
import createGeolocation from "@/utils/createGeolocation";

import "ol/ol.css";

const vtLayer = gsiOptVtLayer();
const geolocation = new Geolocation({
  trackingOptions: {
    enableHighAccuracy: true,
  },
});

function MapPane() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [map, setMap] = useState<OlMap | null>(null);
  const { palette, layers } = usePaletteStore((store) => store);

  // on component mount
  useEffect(() => {
    const mapObject = new OlMap({
      view: new View({
        center: fromLonLat([140.46, 36.37]),
        zoom: 12,
        rotation: 0,
      }),
      layers: [vtLayer],
      controls: defaultControl({
        attribution: false,
      }).extend([
        new Attribution({
          collapsible: false,
        }),
        new ScaleLine(),
        new GeolocationControl({ geolocation }),
      ]),
    });

    if (mapRef.current) {
      mapObject.setTarget(mapRef.current);
      setMap(mapObject);
    }
    mapObject.addInteraction(
      new Link({
        params: ["x", "y", "z"],
        replace: true,
      }),
    );

    return () => mapObject.setTarget(undefined);
  }, []);

  useEffect(() => {
    const newStyle = gsiOptVtStyle({ theme: { palette }, layers });
    vtLayer.setStyle(newStyle);
    vtLayer.setBackground(palette.background);
  }, [palette, layers]);

  useEffect(() => {
    if (map) {
      createGeolocation({ map, geolocation });
    }
  });

  return <div className="map" ref={mapRef} />;
}

export default MapPane;
