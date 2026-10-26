import {
  createContext,
  useState,
  useContext,
  type PropsWithChildren,
} from "react";
import { useStore, type StoreApi } from "zustand";

import { createPaletteStore, type PaletteStore } from "@/stores/palette-store";

export const PaletteStoreContext = createContext<
  StoreApi<PaletteStore> | undefined
>(undefined);

export type PaletteStoreProviderProps = PropsWithChildren;

export function PaletteStoreProvider({ children }: PaletteStoreProviderProps) {
  const [store] = useState(() => createPaletteStore());

  return <PaletteStoreContext value={store}>{children}</PaletteStoreContext>;
}

export const usePaletteStore = <T,>(
  selector: (store: PaletteStore) => T,
): T => {
  const paletteStoreContext = useContext(PaletteStoreContext);

  if (!paletteStoreContext) {
    throw new Error(`useCounterStore must be use within TableStoreProvider`);
  }

  return useStore(paletteStoreContext, selector);
};
