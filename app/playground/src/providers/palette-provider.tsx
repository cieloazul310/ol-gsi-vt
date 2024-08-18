import {
  createContext,
  useRef,
  useContext,
  type PropsWithChildren,
} from "react";
import { useStore, type StoreApi } from "zustand";

import { createPaletteStore, type PaletteStore } from "@/stores/palette-store";

export const PaletteStoreContext = createContext<StoreApi<PaletteStore> | null>(
  null,
);

export type PaletteStoreProviderProps = PropsWithChildren;

export function PaletteStoreProvider({ children }: PaletteStoreProviderProps) {
  const storeRef = useRef<StoreApi<PaletteStore>>();
  if (!storeRef.current) {
    storeRef.current = createPaletteStore();
  }

  return (
    <PaletteStoreContext.Provider value={storeRef.current}>
      {children}
    </PaletteStoreContext.Provider>
  );
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
