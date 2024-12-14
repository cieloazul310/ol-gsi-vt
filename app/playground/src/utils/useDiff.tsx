import { useMemo } from "react";
import { diff } from "deep-object-diff";
import {
  createDefaultPalette,
  createPalePalette,
} from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

function useDiff() {
  const { palette, paletteType } = usePaletteStore((store) => store);

  return useMemo(() => {
    const basePalette =
      paletteType === "pale" ? createPalePalette() : createDefaultPalette();
    const value = diff(basePalette, palette);
    const status = !isEmpty(value);

    return { status, value };
  }, [palette, paletteType]);
}

export default useDiff;
