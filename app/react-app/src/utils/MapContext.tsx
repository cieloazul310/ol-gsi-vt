import * as React from 'react';
import OlMap, { MapObjectEventTypes } from 'ol/Map';
import BaseEvent from 'ol/events/Event';

export const MapContext = React.createContext<OlMap>(new OlMap({}));

export function useMap(): OlMap {
  const map = React.useContext(MapContext);
  return map;
}

export function useMapEvent(
  map: OlMap,
  eventType: MapObjectEventTypes,
  listener: (evt: BaseEvent) => void
): void {
  React.useEffect(() => {
    map.on(eventType, listener);
    return () => map.un(eventType, listener);
  }, [map, eventType, listener]);
}
