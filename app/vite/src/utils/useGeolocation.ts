import Map from "ol/Map";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Point from "ol/geom/Point";
import Geolocation from "ol/Geolocation";

export default function useGeolocation({
  map,
  geolocation,
}: {
  map: Map;
  geolocation: Geolocation;
}) {
  geolocation.setProjection(map.getView().getProjection());

  // handle geolocation error.
  geolocation.once("error", (error) => {
    console.error(error);
    window.alert(`現在地を取得できません。`);
  });

  const accuracyFeature = new Feature();
  geolocation.on("change:accuracyGeometry", () => {
    const polygon = geolocation.getAccuracyGeometry();
    if (!polygon) return;
    accuracyFeature.setGeometry(polygon);
  });

  const positionFeature = new Feature();
  positionFeature.setStyle(
    new Style({
      image: new Circle({
        radius: 8,
        fill: new Fill({
          color: "#3399CC",
        }),
        stroke: new Stroke({
          color: "#fff",
          width: 2,
        }),
      }),
    }),
  );

  geolocation.on("change:position", () => {
    const coordinates = geolocation.getPosition();
    positionFeature.setGeometry(
      coordinates ? new Point(coordinates) : undefined,
    );
  });

  const vector = new VectorLayer({
    source: new VectorSource({
      features: [accuracyFeature, positionFeature],
    }),
  });
  map.addLayer(vector);

  geolocation.on("change:tracking", () => {
    vector.setVisible(geolocation.getTracking());
    if (geolocation.getTracking()) {
      geolocation.once("change:position", () => {
        const position = geolocation.getPosition();
        const currentZoom = map.getView().getZoom();
        if (position && currentZoom) {
          map.getView().animate({
            center: position,
            zoom: Math.max(15, currentZoom),
            duration: 250,
          });
        }
      });
    }
  });
}
