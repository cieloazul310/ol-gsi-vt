import { z } from "zod";
import { gsiOptVtLayerNameCollection } from "@cieloazul310/ol-gsi-vt";

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

export const layersSchema = z.array(z.enum(gsiOptVtLayerNameCollection));

export const jsonSchema = z.object({
  $schema: z.string().optional(),
  name: z.string().optional(),
  type: z.enum(["default", "pale"]).optional(),
  palette: paletteSchema,
  layers: layersSchema.optional(),
});
