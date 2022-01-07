import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { fromLonLat } from 'ol/proj';
import { Attribution, defaults as defaultControls } from 'ol/control';

import AoiStyle from '@cieloazul310/vt-style-aoi';
import { parseHash, setPermalink, setPopstate } from './utils/handleHash';

import 'ol/ol.css';

const { zoom, center, rotation } = parseHash(window);

const map = new Map({
  target: 'map',
  view: new View({
    center: center || fromLonLat([140.46, 36.37]),
    zoom: zoom || 12,
    rotation: rotation || 0,
  }),
  layers: [
    new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVTFormat(),
        url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
        attributions:
          '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
      }),
      style: AoiStyle,
    }),
  ],
  controls: defaultControls({ attribution: false }).extend([
    new Attribution({ collapsible: false }),
  ]),
});

setPermalink(map);
setPopstate(map, window);
