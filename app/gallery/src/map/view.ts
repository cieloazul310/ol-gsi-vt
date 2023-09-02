import { fromLonLat } from "ol/proj";
import { useMap } from "./MapContext";

export const defaultZoom = 13;
export const defaultCenter = fromLonLat([140.4606, 36.3703]);

export function useResetView() {
  const map = useMap();
  return () => {
    if (map) {
      const view = map.getView();
      view.setZoom(defaultZoom);
      view.setCenter(defaultCenter);
    }
  };
}
