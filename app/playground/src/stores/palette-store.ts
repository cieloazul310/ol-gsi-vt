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

export type PaletteState = {
  palette: Palette;
  format: ColorFormat;
  layers: GsiOptVTLayerName[];
};
export type PaletteAction = {
  setPalette: (paletteOptions: PaletteOptions) => void;
  setFormat: (fotmat: ColorFormat) => void;
  toggleLayer: (layerName: GsiOptVTLayerName) => void;
  reset: () => void;
};
export type PaletteStore = PaletteState & PaletteAction;

export const defaultPaletteState: PaletteState = {
  palette: useDefaultPalette(),
  format: "hex",
  layers: gsiOptVtLayerNameCollection,
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
        setFormat: (format: ColorFormat) => set(() => ({ format })),
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
        reset: () => set(() => ({ palette: useDefaultPalette() })),
      }),
      {
        name: "palette-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );
