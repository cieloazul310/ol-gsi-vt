import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  useDefaultPalette,
  mergeDefaultPalette,
  type Palette,
  type PaletteOptions,
} from "@cieloazul310/ol-gsi-vt";

export type PaletteState = {
  palette: Palette;
  savedColors: string[];
};
export type PaletteAction = {
  setPalette: (paletteOptions: PaletteOptions) => void;
  addSavedColors: (newColor: string) => void;
  reset: () => void;
};
export type PaletteStore = PaletteState & PaletteAction;

export const defaultPaletteState: PaletteState = {
  palette: useDefaultPalette(),
  savedColors: ["#fff", "#000"],
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
            ...prevState,
            palette: mergeDefaultPalette(paletteOptions, prevState.palette),
          })),
        addSavedColors: (newColor: string) =>
          set((prevState) => ({
            ...prevState,
            savedColors: Array.from(
              new Set([newColor, ...prevState.savedColors.slice(0, 12)]),
            ),
          })),
        reset: () => set(() => ({ palette: useDefaultPalette() })),
      }),
      {
        name: "palette-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );
