import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  useDefaultPalette,
  mergeDefaultPalette,
  gsiOptVtLayerNameCollection,
  type Palette,
  type PaletteOptions,
  type GsiOptVTLayerName,
} from "@cieloazul310/ol-gsi-vt";
import type { ColorFormat } from "@yamada-ui/react";

export type PaletteType = "default" | "pale";

export type PaletteState = {
  palette: Palette;
  paletteType: PaletteType;
  format: ColorFormat;
  layers: GsiOptVTLayerName[];
};
export type PaletteAction = {
  setPalette: (paletteOptions: PaletteOptions) => void;
  setPaletteType: (paletteType: PaletteType) => void;
  setFormat: (fotmat: ColorFormat) => void;
  setLayers: (layers: GsiOptVTLayerName[]) => void;
  toggleLayer: (layerName: GsiOptVTLayerName) => void;
};
export type PaletteStore = PaletteState & PaletteAction;

export const defaultPaletteState: PaletteState = {
  palette: useDefaultPalette(),
  paletteType: "default",
  format: "hex",
  layers: [...gsiOptVtLayerNameCollection],
};

export const createPaletteStore = (
  initState: PaletteState = defaultPaletteState,
) =>
  createStore<PaletteStore>()(
    persist(
      (set) => ({
        ...initState,
        setPalette: (paletteOptions: PaletteOptions) =>
          set((prevState) => ({
            palette: mergeDefaultPalette(paletteOptions, prevState.palette),
          })),
        setPaletteType: (paletteType: PaletteType) =>
          set({
            paletteType,
          }),
        setFormat: (format: ColorFormat) => set({ format }),
        setLayers: (layers: GsiOptVTLayerName[]) =>
          set({
            layers,
          }),
        toggleLayer: (layerName: GsiOptVTLayerName) =>
          set(({ layers }) => {
            const prev = new Set(layers);
            if (prev.has(layerName)) {
              prev.delete(layerName);
            } else {
              prev.add(layerName);
            }
            return {
              layers: Array.from(prev),
            };
          }),
      }),
      {
        name: "palette-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );
