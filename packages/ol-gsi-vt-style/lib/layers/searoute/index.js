import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function searouteStyle(feature, resolution, { palette, zIndex }) {
    return new Style({
        stroke: new Stroke({ color: palette.searoute, lineDash: [4, 4] }),
        zIndex: zIndex.searoute,
    });
}
//# sourceMappingURL=index.js.map