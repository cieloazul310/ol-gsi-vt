import type { FeatureLike } from "ol/Feature";
import Style from "ol/style/Style";
import {
  mergeDefaultTheme,
  type ThemeOptions,
  type Theme,
  type GsiOptVTLayerName,
} from "@cieloazul310/ol-gsi-vt-style-utils";

import {
  annoStyle,
  admAreaStyle,
  admBdryStyle,
  bldAStyle,
  cntrStyle,
  cstlineStyle,
  isbtStyle,
  PwrTrnsmLStyle,
  railCLStyle,
  railTrCLStyle,
  rvrCLStyle,
  rdCLStyle,
  rdEdgStyle,
  rdComptStyle,
  spcfAreaStyle,
  strctAreaStyle,
  strctLineStyle,
  tpgphAreaStyle,
  tpgphLineStyle,
  waStyle,
  wlStyle,
  wrltLineStyle,
  wstrAStyle,
  wstrLStyle,
} from "./layers";

/** レイヤ毎のスタイルをマニュアルで設定するオプション */
export type GsiOptVTLayerStyleOptions = {
  [key in GsiOptVTLayerName]?: (
    feature: FeatureLike,
    resolution: number,
    theme: Theme,
  ) => Style | Style[] | undefined;
};

export default function gsiOptVtStyle(
  options?: {
    theme?: ThemeOptions;
    styles?: GsiOptVTLayerStyleOptions;
    layers?: GsiOptVTLayerName[];
  },
  defaultTheme?: Theme,
) {
  return (feature: FeatureLike, resolution: number) => {
    const mergeInitialTheme = mergeDefaultTheme(defaultTheme);
    const theme = mergeInitialTheme(options?.theme);
    const { layer } = feature.getProperties();

    if (options?.layers?.length && !options.layers?.includes(layer))
      return new Style();
    if (options?.layers && options.layers.length === 0) return new Style();

    switch (layer as GsiOptVTLayerName) {
      case "AdmArea":
        return (
          options?.styles?.AdmArea?.(feature, resolution, theme) ??
          admAreaStyle(feature, resolution, theme)
        );
      case "AdmBdry":
        return (
          options?.styles?.AdmBdry?.(feature, resolution, theme) ??
          admBdryStyle(feature, resolution, theme)
        );
      case "Anno":
        return (
          options?.styles?.Anno?.(feature, resolution, theme) ??
          annoStyle(feature, resolution, theme)
        );
      case "BldA":
        return (
          options?.styles?.BldA?.(feature, resolution, theme) ??
          bldAStyle(feature, resolution, theme)
        );
      case "Cntr":
        return (
          options?.styles?.Cntr?.(feature, resolution, theme) ??
          cntrStyle(feature, resolution, theme)
        );
      case "Cstline":
        return (
          options?.styles?.Cstline?.(feature, resolution, theme) ??
          cstlineStyle(feature, resolution, theme)
        );
      case "Isbt":
        return (
          options?.styles?.Isbt?.(feature, resolution, theme) ??
          isbtStyle(feature, resolution, theme)
        );
      case "PwrTrnsmL":
        return (
          options?.styles?.PwrTrnsmL?.(feature, resolution, theme) ??
          PwrTrnsmLStyle(feature, resolution, theme)
        );
      case "RailCL":
        return (
          options?.styles?.RailCL?.(feature, resolution, theme) ??
          railCLStyle(feature, resolution, theme)
        );
      case "RailTrCL":
        return (
          options?.styles?.RailTrCL?.(feature, resolution, theme) ??
          railTrCLStyle(feature, resolution, theme)
        );
      case "RdCL":
        return (
          options?.styles?.RdCL?.(feature, resolution, theme) ??
          rdCLStyle(feature, resolution, theme)
        );
      case "RdCompt":
        return (
          options?.styles?.RdCompt?.(feature, resolution, theme) ??
          rdComptStyle(feature, resolution, theme)
        );
      case "RdEdg":
        return (
          options?.styles?.RdEdg?.(feature, resolution, theme) ??
          rdEdgStyle(feature, resolution, theme)
        );
      case "RvrCL":
        return (
          options?.styles?.RvrCL?.(feature, resolution, theme) ??
          rvrCLStyle(feature, resolution, theme)
        );
      case "SpcfArea":
        return (
          options?.styles?.SpcfArea?.(feature, resolution, theme) ??
          spcfAreaStyle(feature, resolution, theme)
        );
      case "StrctArea":
        return (
          options?.styles?.StrctArea?.(feature, resolution, theme) ??
          strctAreaStyle(feature, resolution, theme)
        );
      case "StrctLine":
        return (
          options?.styles?.StrctLine?.(feature, resolution, theme) ??
          strctLineStyle(feature, resolution, theme)
        );
      case "TpgphArea":
        return (
          options?.styles?.TpgphArea?.(feature, resolution, theme) ??
          tpgphAreaStyle(feature, resolution, theme)
        );
      case "TpgphLine":
        return (
          options?.styles?.TpgphLine?.(feature, resolution, theme) ??
          tpgphLineStyle(feature, resolution, theme)
        );
      case "WA":
        return (
          options?.styles?.WA?.(feature, resolution, theme) ??
          waStyle(feature, resolution, theme)
        );
      case "WL":
        return (
          options?.styles?.WL?.(feature, resolution, theme) ??
          wlStyle(feature, resolution, theme)
        );
      case "WRltLine":
        return (
          options?.styles?.WRltLine?.(feature, resolution, theme) ??
          wrltLineStyle(feature, resolution, theme)
        );
      case "WStrA":
        return (
          options?.styles?.WStrA?.(feature, resolution, theme) ??
          wstrAStyle(feature, resolution, theme)
        );
      case "WStrL":
        return (
          options?.styles?.WStrL?.(feature, resolution, theme) ??
          wstrLStyle(feature, resolution, theme)
        );
      default:
        return new Style();
    }
  };
}
