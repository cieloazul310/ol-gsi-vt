import Style from 'ol/style/Style';
import { mergeDefaultTheme, } from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoStyle, admAreaStyle, admBdryStyle, bldAStyle, cntrStyle, cstlineStyle, isbtStyle, PwrTrnsmLStyle, railCLStyle, railTrCLStyle, rvrCLStyle, rdCLStyle, rdEdgStyle, rdComptStyle, spcfAreaStyle, strctAreaStyle, strctLineStyle, tpgphAreaStyle, waStyle, wlStyle, wrltLineStyle, wstrAStyle, wstrLStyle, } from './layers';
export default function gsiOptVtStyle(options) {
    return (feature, resolution) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        const theme = mergeDefaultTheme(options === null || options === void 0 ? void 0 : options.theme);
        const properties = feature.getProperties();
        switch (properties.layer) {
            case 'AdmArea':
                return ((_a = options === null || options === void 0 ? void 0 : options.styles) === null || _a === void 0 ? void 0 : _a.AdmArea)
                    ? options.styles.AdmArea(feature, resolution, theme)
                    : admAreaStyle(feature, resolution, theme);
            case 'AdmBdry':
                return ((_b = options === null || options === void 0 ? void 0 : options.styles) === null || _b === void 0 ? void 0 : _b.AdmBdry)
                    ? options.styles.AdmBdry(feature, resolution, theme)
                    : admBdryStyle(feature, resolution, theme);
            case 'Anno':
                return ((_c = options === null || options === void 0 ? void 0 : options.styles) === null || _c === void 0 ? void 0 : _c.Anno)
                    ? options.styles.Anno(feature, resolution, theme)
                    : annoStyle(feature, resolution, theme);
            case 'BldA':
                return ((_d = options === null || options === void 0 ? void 0 : options.styles) === null || _d === void 0 ? void 0 : _d.BldA)
                    ? options.styles.BldA(feature, resolution, theme)
                    : bldAStyle(feature, resolution, theme);
            case 'Cntr':
                return ((_e = options === null || options === void 0 ? void 0 : options.styles) === null || _e === void 0 ? void 0 : _e.Cntr)
                    ? options.styles.Cntr(feature, resolution, theme)
                    : cntrStyle(feature, resolution, theme);
            case 'Cstline':
                return ((_f = options === null || options === void 0 ? void 0 : options.styles) === null || _f === void 0 ? void 0 : _f.Cstline)
                    ? options.styles.Cstline(feature, resolution, theme)
                    : cstlineStyle(feature, resolution, theme);
            case 'Isbt':
                return ((_g = options === null || options === void 0 ? void 0 : options.styles) === null || _g === void 0 ? void 0 : _g.Isbt)
                    ? options.styles.Isbt(feature, resolution, theme)
                    : isbtStyle(feature, resolution, theme);
            case 'PwrTrnsmL':
                return ((_h = options === null || options === void 0 ? void 0 : options.styles) === null || _h === void 0 ? void 0 : _h.PwrTrnsmL)
                    ? options.styles.PwrTrnsmL(feature, resolution, theme)
                    : PwrTrnsmLStyle(feature, resolution, theme);
            case 'RailCL':
                return ((_j = options === null || options === void 0 ? void 0 : options.styles) === null || _j === void 0 ? void 0 : _j.RailCL)
                    ? options.styles.RailCL(feature, resolution, theme)
                    : railCLStyle(feature, resolution, theme);
            case 'RailTrCL':
                return ((_k = options === null || options === void 0 ? void 0 : options.styles) === null || _k === void 0 ? void 0 : _k.RailTrCL)
                    ? options.styles.RailTrCL(feature, resolution, theme)
                    : railTrCLStyle(feature, resolution, theme);
            case 'RdCL':
                return ((_l = options === null || options === void 0 ? void 0 : options.styles) === null || _l === void 0 ? void 0 : _l.RdCL)
                    ? options.styles.RdCL(feature, resolution, theme)
                    : rdCLStyle(feature, resolution, theme);
            case 'RdCompt':
                return ((_m = options === null || options === void 0 ? void 0 : options.styles) === null || _m === void 0 ? void 0 : _m.RdCompt)
                    ? options.styles.RdCompt(feature, resolution, theme)
                    : rdComptStyle(feature, resolution, theme);
            case 'RdEdg':
                return ((_o = options === null || options === void 0 ? void 0 : options.styles) === null || _o === void 0 ? void 0 : _o.RdEdg)
                    ? options.styles.RdEdg(feature, resolution, theme)
                    : rdEdgStyle(feature, resolution, theme);
            case 'RvrCL':
                return ((_p = options === null || options === void 0 ? void 0 : options.styles) === null || _p === void 0 ? void 0 : _p.RvrCL)
                    ? options.styles.RvrCL(feature, resolution, theme)
                    : rvrCLStyle(feature, resolution, theme);
            case 'SpcfArea':
                return ((_q = options === null || options === void 0 ? void 0 : options.styles) === null || _q === void 0 ? void 0 : _q.SpcfArea)
                    ? options.styles.SpcfArea(feature, resolution, theme)
                    : spcfAreaStyle(feature, resolution, theme);
            case 'StrctArea':
                return ((_r = options === null || options === void 0 ? void 0 : options.styles) === null || _r === void 0 ? void 0 : _r.StrctArea)
                    ? options.styles.StrctArea(feature, resolution, theme)
                    : strctAreaStyle(feature, resolution, theme);
            case 'StrctLine':
                return ((_s = options === null || options === void 0 ? void 0 : options.styles) === null || _s === void 0 ? void 0 : _s.StrctLine)
                    ? options.styles.StrctLine(feature, resolution, theme)
                    : strctLineStyle(feature, resolution, theme);
            case 'TpgphArea':
                return ((_t = options === null || options === void 0 ? void 0 : options.styles) === null || _t === void 0 ? void 0 : _t.TpgphArea)
                    ? options.styles.TpgphArea(feature, resolution, theme)
                    : tpgphAreaStyle(feature, resolution, theme);
            case 'WA':
                return ((_u = options === null || options === void 0 ? void 0 : options.styles) === null || _u === void 0 ? void 0 : _u.WA)
                    ? options.styles.WA(feature, resolution, theme)
                    : waStyle(feature, resolution, theme);
            case 'WL':
                return ((_v = options === null || options === void 0 ? void 0 : options.styles) === null || _v === void 0 ? void 0 : _v.WL)
                    ? options.styles.WL(feature, resolution, theme)
                    : wlStyle(feature, resolution, theme);
            case 'WRltLine':
                return ((_w = options === null || options === void 0 ? void 0 : options.styles) === null || _w === void 0 ? void 0 : _w.WRltLine)
                    ? options.styles.WRltLine(feature, resolution, theme)
                    : wrltLineStyle(feature, resolution, theme);
            case 'WStrA':
                return ((_x = options === null || options === void 0 ? void 0 : options.styles) === null || _x === void 0 ? void 0 : _x.WStrA)
                    ? options.styles.WStrA(feature, resolution, theme)
                    : wstrAStyle(feature, resolution, theme);
            case 'WStrL':
                return ((_y = options === null || options === void 0 ? void 0 : options.styles) === null || _y === void 0 ? void 0 : _y.WStrL)
                    ? options.styles.WStrL(feature, resolution, theme)
                    : wstrLStyle(feature, resolution, theme);
            default:
                return new Style();
        }
    };
}
//# sourceMappingURL=index.js.map