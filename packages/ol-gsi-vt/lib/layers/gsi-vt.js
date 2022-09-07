import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import gsiVtStyle from '@cieloazul310/ol-gsi-vt-style';
const gsiVtLayer = new VectorTileLayer({
    source: new VectorTileSource({
        format: new MVTFormat(),
        url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
        attributions: '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    }),
    style: gsiVtStyle,
    background: '#fcfcf3',
    declutter: true,
});
export default gsiVtLayer;
//# sourceMappingURL=gsi-vt.js.map