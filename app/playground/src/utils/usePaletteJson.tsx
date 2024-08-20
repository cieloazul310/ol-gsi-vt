import { useMemo } from "react";
import { useClipboard } from "@yamada-ui/react";
import { usePaletteStore } from "@/providers/palette-provider";
import useDiff from "./useDiff";

function usePaletteJson() {
  const { paletteType, layers } = usePaletteStore((store) => store);
  const { status, value } = useDiff();

  const output = useMemo(() => {
    const json = {
      $schema: "https://ol-gsi-vt.vercel.app/palette.schema.json",
      type: paletteType,
      palette: status ? value : {},
    };
    if (layers.length === 24) return json;
    return {
      ...json,
      layers,
    };
  }, [status, value, paletteType, layers]);

  return useClipboard(JSON.stringify(output, null, 2));
}

export default usePaletteJson;
