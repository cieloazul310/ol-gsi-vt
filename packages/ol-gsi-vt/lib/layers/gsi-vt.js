import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { default as gsiVtStyle, } from '@cieloazul310/ol-gsi-vt-style';
function gsiVtLayer({ layers, theme, styles } = {}) {
    var _a, _b;
    return new VectorTileLayer({
        source: new VectorTileSource({
            format: new MVTFormat({
                layers,
            }),
            url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
            attributions: '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
        }),
        style: gsiVtStyle({ theme, styles }),
        background: (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.background) !== null && _b !== void 0 ? _b : '#fcfcf3',
        declutter: true,
    });
}
export default gsiVtLayer;
//# sourceMappingURL=gsi-vt.js.map