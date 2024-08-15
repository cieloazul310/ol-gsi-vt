import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  useDefaultPalette,
  mergeDefaultPalette,
  type Palette,
  type PaletteOptions,
} from "@cieloazul310/ol-gsi-vt";

export type PaletteState = Palette;
export type PaletteAction = {
  setPalette: (paletteOptions: PaletteOptions) => void;
  reset: () => void;
};
export type PaletteStore = PaletteState & PaletteAction;

export const defaultPaletteState: PaletteState = useDefaultPalette();

export const createPaletteStore = (
  initState: PaletteState = defaultPaletteState,
) =>
  createStore<PaletteStore>()(
    persist(
      (set) => ({
        ...initState,
        setPalette: (paletteOptions: PaletteOptions) =>
          set((prevPalette) =>
            mergeDefaultPalette(paletteOptions, prevPalette),
          ),
        reset: () => set(() => useDefaultPalette()),
      }),
      {
        name: "palette-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );
