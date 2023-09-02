import type { FeatureLike } from "ol/Feature";
import Style from "ol/style/Style";
import {
  mergeDefaultTheme,
  type ThemeOptions,
  type Theme,
  type GsiVTLayerName,
} from "@cieloazul310/ol-gsi-vt-style-utils";

import {
  buildingStyle,
  boundaryStyle,
  coastlineStyle,
  contourStyle,
  elevationStyle,
  labelStyle,
  lakeStyle,
  landformaStyle,
  landformlStyle,
  landformpStyle,
  railwayStyle,
  riverStyle,
  roadStyle,
  searouteStyle,
  structureaStyle,
  structurelStyle,
  symbolStyle,
  transpStyle,
  waterareaStyle,
  wstructureaStyle,
} from "./layers";

export type GsiVTLayerStyleOptions = {
  [key in GsiVTLayerName]?: (
    feature: FeatureLike,
    resolution: number,
    theme: Theme,
  ) => Style | Style[] | undefined;
};

export default function gsiVtStyle(
  options?: {
    theme?: ThemeOptions;
    styles?: GsiVTLayerStyleOptions;
  },
  defaultTheme?: Theme,
) {
  return (feature: FeatureLike, resolution: number) => {
    const mergeInitialTheme = mergeDefaultTheme(defaultTheme);
    const theme = mergeInitialTheme(options?.theme);
    const properties = feature.getProperties();

    switch (properties.layer as GsiVTLayerName) {
      case "building":
        return (
          options?.styles?.building?.(feature, resolution, theme) ??
          buildingStyle(feature, resolution, theme)
        );
      case "boundary":
        return (
          options?.styles?.boundary?.(feature, resolution, theme) ??
          boundaryStyle(feature, resolution, theme)
        );
      case "coastline":
        return (
          options?.styles?.coastline?.(feature, resolution, theme) ??
          coastlineStyle(feature, resolution, theme)
        );
      case "contour":
        return (
          options?.styles?.contour?.(feature, resolution, theme) ??
          contourStyle(feature, resolution, theme)
        );
      case "elevation":
        return (
          options?.styles?.elevation?.(feature, resolution, theme) ??
          elevationStyle(feature, resolution, theme)
        );
      case "label":
        return (
          options?.styles?.label?.(feature, resolution, theme) ??
          labelStyle(feature, resolution, theme)
        );
      case "lake":
        return (
          options?.styles?.lake?.(feature, resolution, theme) ??
          lakeStyle(feature, resolution, theme)
        );
      case "landforma":
        return (
          options?.styles?.landforma?.(feature, resolution, theme) ??
          landformaStyle(feature, resolution, theme)
        );
      case "landforml":
        return (
          options?.styles?.landforml?.(feature, resolution, theme) ??
          landformlStyle(feature, resolution, theme)
        );
      case "landformp":
        return (
          options?.styles?.landformp?.(feature, resolution, theme) ??
          landformpStyle(feature, resolution, theme)
        );
      case "railway":
        return (
          options?.styles?.railway?.(feature, resolution, theme) ??
          railwayStyle(feature, resolution, theme)
        );
      case "river":
        return (
          options?.styles?.river?.(feature, resolution, theme) ??
          riverStyle(feature, resolution, theme)
        );
      case "road":
        return (
          options?.styles?.road?.(feature, resolution, theme) ??
          roadStyle(feature, resolution, theme)
        );
      case "searoute":
        return (
          options?.styles?.searoute?.(feature, resolution, theme) ??
          searouteStyle(feature, resolution, theme)
        );
      case "structurea":
        return (
          options?.styles?.structurea?.(feature, resolution, theme) ??
          structureaStyle(feature, resolution, theme)
        );
      case "structurel":
        return (
          options?.styles?.structurel?.(feature, resolution, theme) ??
          structurelStyle(feature, resolution, theme)
        );
      case "symbol":
        return (
          options?.styles?.symbol?.(feature, resolution, theme) ??
          symbolStyle(feature, resolution, theme)
        );
      case "transp":
        return (
          options?.styles?.transp?.(feature, resolution, theme) ??
          transpStyle(feature, resolution, theme)
        );
      case "waterarea":
        return (
          options?.styles?.waterarea?.(feature, resolution, theme) ??
          waterareaStyle(feature, resolution, theme)
        );
      case "wstructurea":
        return (
          options?.styles?.wstructurea?.(feature, resolution, theme) ??
          wstructureaStyle(feature, resolution, theme)
        );
      default:
        return new Style();
    }
  };
}
