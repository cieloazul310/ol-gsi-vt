import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';

const vtTile = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat({
      layers: ['RdCL', 'RailCL', 'WA'],
    }),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/optimal_bvmap-v1/{z}/{x}/{y}.pbf',
  }),
});

export default vtTile;
