import Style from 'ol/style/Style';
import { mergeDefaultTheme, } from '@cieloazul310/ol-gsi-vt-style-utils';
import { buildingStyle, boundaryStyle, coastlineStyle, contourStyle, elevationStyle, labelStyle, lakeStyle, landformaStyle, railwayStyle, riverStyle, roadStyle, searouteStyle, symbolStyle, transpStyle, waterareaStyle, } from './layers';
export default function gsiVtStyle(options) {
    return (feature, resolution) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const theme = mergeDefaultTheme(options === null || options === void 0 ? void 0 : options.theme);
        const properties = feature.getProperties();
        switch (properties.layer) {
            case 'building':
                return ((_a = options === null || options === void 0 ? void 0 : options.styles) === null || _a === void 0 ? void 0 : _a.building)
                    ? options.styles.building(feature, resolution, theme)
                    : buildingStyle(feature, resolution, theme);
            case 'boundary':
                return ((_b = options === null || options === void 0 ? void 0 : options.styles) === null || _b === void 0 ? void 0 : _b.boundary)
                    ? options.styles.boundary(feature, resolution, theme)
                    : boundaryStyle(feature, resolution, theme);
            case 'coastline':
                return ((_c = options === null || options === void 0 ? void 0 : options.styles) === null || _c === void 0 ? void 0 : _c.coastline)
                    ? options.styles.coastline(feature, resolution, theme)
                    : coastlineStyle(feature, resolution, theme);
            case 'contour':
                return ((_d = options === null || options === void 0 ? void 0 : options.styles) === null || _d === void 0 ? void 0 : _d.contour)
                    ? options.styles.contour(feature, resolution, theme)
                    : contourStyle(feature, resolution, theme);
            case 'elevation':
                return ((_e = options === null || options === void 0 ? void 0 : options.styles) === null || _e === void 0 ? void 0 : _e.elevation)
                    ? options.styles.elevation(feature, resolution, theme)
                    : elevationStyle(feature, resolution, theme);
            case 'label':
                return ((_f = options === null || options === void 0 ? void 0 : options.styles) === null || _f === void 0 ? void 0 : _f.label)
                    ? options.styles.label(feature, resolution, theme)
                    : labelStyle(feature, resolution, theme);
            case 'lake':
                return ((_g = options === null || options === void 0 ? void 0 : options.styles) === null || _g === void 0 ? void 0 : _g.lake)
                    ? options.styles.lake(feature, resolution, theme)
                    : lakeStyle(feature, resolution, theme);
            case 'landforma':
                return ((_h = options === null || options === void 0 ? void 0 : options.styles) === null || _h === void 0 ? void 0 : _h.landforma)
                    ? options.styles.landforma(feature, resolution, theme)
                    : landformaStyle(feature, resolution, theme);
            case 'railway':
                return ((_j = options === null || options === void 0 ? void 0 : options.styles) === null || _j === void 0 ? void 0 : _j.railway)
                    ? options.styles.railway(feature, resolution, theme)
                    : railwayStyle(feature, resolution, theme);
            case 'river':
                return ((_k = options === null || options === void 0 ? void 0 : options.styles) === null || _k === void 0 ? void 0 : _k.river)
                    ? options.styles.river(feature, resolution, theme)
                    : riverStyle(feature, resolution, theme);
            case 'road':
                return ((_l = options === null || options === void 0 ? void 0 : options.styles) === null || _l === void 0 ? void 0 : _l.road)
                    ? options.styles.road(feature, resolution, theme)
                    : roadStyle(feature, resolution, theme);
            case 'searoute':
                return ((_m = options === null || options === void 0 ? void 0 : options.styles) === null || _m === void 0 ? void 0 : _m.searoute)
                    ? options.styles.searoute(feature, resolution, theme)
                    : searouteStyle(feature, resolution, theme);
            case 'symbol':
                return ((_o = options === null || options === void 0 ? void 0 : options.styles) === null || _o === void 0 ? void 0 : _o.symbol)
                    ? options.styles.symbol(feature, resolution, theme)
                    : symbolStyle(feature, resolution, theme);
            case 'transp':
                return ((_p = options === null || options === void 0 ? void 0 : options.styles) === null || _p === void 0 ? void 0 : _p.transp)
                    ? options.styles.transp(feature, resolution, theme)
                    : transpStyle(feature, resolution, theme);
            case 'waterarea':
                return ((_q = options === null || options === void 0 ? void 0 : options.styles) === null || _q === void 0 ? void 0 : _q.waterarea)
                    ? options.styles.waterarea(feature, resolution, theme)
                    : waterareaStyle(feature, resolution, theme);
            default:
                return new Style();
        }
    };
}
//# sourceMappingURL=index.js.map