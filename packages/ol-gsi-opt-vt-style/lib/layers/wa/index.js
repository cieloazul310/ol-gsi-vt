import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
export default function waterareaStyle(feature, resolution, { palette, zIndex }) {
    const { vt_code } = feature.getProperties();
    return new Style({
        fill: new Fill({
            color: palette.waterarea,
        }),
        zIndex: zIndex.waterarea,
    });
}
//# sourceMappingURL=index.js.map