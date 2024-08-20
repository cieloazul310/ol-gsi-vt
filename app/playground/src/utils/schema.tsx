import { z } from "zod";

const roadSchema = z
  .object({
    main: z.string(),
    edge: z.string(),
  })
  .partial();

export const paletteSchema = z
  .object({
    anno: z
      .object({
        text: z
          .object({
            main: z.string(),
            light: z.string(),
          })
          .partial(),
        water: z.string(),
        terrain: z.string(),
        transp: z.string(),
        green: z.string(),
      })
      .partial(),
    background: z.string(),
    boundary: z
      .object({
        main: z.string(),
        light: z.string(),
      })
      .partial(),
    building: z
      .object({
        stroke: z.string(),
        fill: z.string(),
      })
      .partial(),
    contour: z
      .object({
        main: z.string(),
        light: z.string(),
      })
      .partial(),
    contrast: z.string(),
    isbt: z.string(),
    rail: z
      .object({
        station: z
          .object({
            main: z.string(),
            light: z.string(),
          })
          .partial(),
        shinkansen: z.string(),
        jr: z.string(),
        shitetsu: z.string(),
      })
      .partial(),
    road: z
      .object({
        highway: roadSchema,
        national: roadSchema,
        pref: roadSchema,
        basic: roadSchema,
        edge: z.string(),
      })
      .partial(),
    searoute: z.string(),
    structure: z.string(),
    tpgphArea: z
      .object({
        wetland: z.string(),
        firn: z.string(),
        sand: z.string(),
      })
      .partial(),
    transp: z
      .object({
        highway: z.string(),
        national: z.string(),
      })
      .partial(),
    volcano: z.string(),
    waterarea: z.string(),
    waterline: z.string(),
  })
  .partial();

/**
 * @todo import from "@cieloazul310/ol-gsi-vt";
 */
export const layersSchema = z.array(
  z.enum([
    "AdmArea",
    "AdmBdry",
    "Anno",
    "BldA",
    "Cntr",
    "Cstline",
    "Isbt",
    "PwrTrnsmL",
    "RailCL",
    "RailTrCL",
    "RdEdg",
    "RdCompt",
    "RdCL",
    "RvrCL",
    "SpcfArea",
    "StrctLine",
    "StrctArea",
    "TpgphArea",
    "TpgphLine",
    "WA",
    "WL",
    "WStrA",
    "WStrL",
    "WRltLine",
  ]),
);

export const jsonSchema = z.object({
  $schema: z.string().optional(),
  name: z.string().optional(),
  type: z.enum(["default", "pale"]).optional(),
  palette: paletteSchema,
  layers: layersSchema.optional(),
});
