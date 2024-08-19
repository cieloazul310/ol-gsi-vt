import { useMemo } from "react";
import { useClipboard } from "@yamada-ui/react";
import { diff } from "deep-object-diff";
import { useDefaultPalette, usePalePalette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

function usePaletteJson() {
  const { palette, paletteType } = usePaletteStore((store) => store);
  const paletteCode = useMemo(() => {
    const basePalette =
      paletteType === "pale" ? usePalePalette() : useDefaultPalette();
    const value = diff(basePalette, palette);
    const status = !isEmpty(value);

    return { status, value };
  }, [paletteType, palette]);

  const output = useMemo(
    () => ({
      $schema: "https://ol-gsi-vt.vercel.app/palette.schema.json",
      type: paletteType,
      palette: paletteCode.status ? paletteCode.value : {},
    }),
    [paletteCode, paletteType],
  );

  return useClipboard(JSON.stringify(output, null, 2));
}

export default usePaletteJson;
