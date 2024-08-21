import { useState, useCallback } from "react";
import {
  mergeDefaultPalette,
  useDefaultPalette,
  usePalePalette,
  gsiOptVtLayerNameCollection,
} from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import { jsonSchema } from "./schema";

function useFile() {
  const [isInvalid, setIsInvalid] = useState(false);
  const { setPalette, setPaletteType, setLayers } = usePaletteStore(
    (store) => store,
  );

  const onChangeFile = useCallback(
    (files: File[] | undefined) => {
      if (!files) return;
      const [file] = files;
      const reader = new FileReader();

      reader.onload = () => {
        if (!reader.result || typeof reader.result !== "string") return;
        const json = JSON.parse(reader.result);
        const result = jsonSchema.safeParse(json);
        if (!result.success) {
          console.error(result.error.issues);
          setIsInvalid(true);
          return;
        }
        const { type, palette, layers } = result.data;

        const paletteType = type !== "pale" ? "default" : "pale";
        setPaletteType(paletteType);
        const merged = mergeDefaultPalette(
          palette,
          paletteType === "default" ? useDefaultPalette() : usePalePalette(),
        );
        setPalette(merged);

        if (!layers) {
          setLayers([...gsiOptVtLayerNameCollection]);
        } else {
          setLayers(layers);
        }

        setIsInvalid(false);
      };
      reader.readAsText(file);
    },
    [jsonSchema],
  );

  return { onChangeFile, isInvalid };
}

export default useFile;
