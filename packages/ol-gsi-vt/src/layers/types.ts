import type { Options as VectorTileOptions } from "ol/layer/VectorTile";
import type { Options as VectorTileSourceOptions } from "ol/source/VectorTile";
import type { AttributionLike } from "ol/source/Source";
import type {
  GsiVTLayerStyleOptions,
  GsiOptVTLayerStyleOptions,
} from "@cieloazul310/ol-gsi-vt-style";
import type {
  ThemeOptions,
  GsiVTLayerName,
  GsiOptVTLayerName,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export type GsiLayerOptions<T extends "vt" | "opt-vt"> = {
  layers?: (T extends "vt" ? GsiVTLayerName : GsiOptVTLayerName)[];
  styles?: T extends "vt" ? GsiVTLayerStyleOptions : GsiOptVTLayerStyleOptions;
  theme?: ThemeOptions;
  sourceOptions?: Omit<
    VectorTileSourceOptions,
    "url" | "format" | "attributions"
  >;
  attribution?: AttributionLike;
  declutter?: boolean;
  background?: boolean;
} & Omit<VectorTileOptions, "declutter" | "background" | "style" | "source">;

export type GsiVtLayerOptions = GsiLayerOptions<"vt">;
export type GsiOptVtLayerOptions = GsiLayerOptions<"opt-vt">;

export const vtDefaultAttribution =
  '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院ベクトルタイル提供実験</a>';
export const optVtDefaultAttribution =
  '<a href="https://github.com/gsi-cyberjapan/optimal_bvmap" target="_blank" rel=”noopener noreferrer”>国土地理院最適化ベクトルタイル</a>';
