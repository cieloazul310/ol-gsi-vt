import { useState, useEffect, useMemo } from "react";
import { format } from "prettier/standalone";
import * as esTreePlugin from "prettier/plugins/estree";
import * as typeScriptPlugin from "prettier/plugins/typescript";
import { diff } from "deep-object-diff";
import {
  gsiOptVtLayerNameCollection,
  useDefaultPalette,
  usePalePalette,
} from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

function useCode() {
  const [code, setCode] = useState<string>("");
  const { palette, layers, paletteType } = usePaletteStore((store) => store);

  const paletteTypeCode = useMemo(() => {
    if (paletteType === "pale") return "gsiOptVtPaleLayer";
    return "gsiOptVtLayer";
  }, [paletteType]);

  const paletteCode = useMemo(() => {
    const basePalette =
      paletteType === "pale" ? usePalePalette() : useDefaultPalette();
    const value = diff(basePalette, palette);
    const status = !isEmpty(value);

    return { status, value };
  }, [paletteType, palette]);

  const layersCode = useMemo(() => {
    if (layers.length === 24) return { status: "all", value: "" };
    if (layers.length > 13) {
      const excludedLayers = gsiOptVtLayerNameCollection.filter(
        (layerName) => !layers.includes(layerName),
      );
      return {
        status: "exclude",
        value: `gsiOptVtLayerExclude(${JSON.stringify(excludedLayers)})`,
      };
    }
    return { status: "include", value: JSON.stringify(layers) };
  }, [layers]);

  const raw = useMemo(() => {
    const importStatement = [
      paletteTypeCode,
      paletteCode.status ? "definePalette" : null,
      layersCode.status === "exclude" ? "gsiOptVtLayerExclude" : null,
    ].filter((str) => str !== null);

    const layerOptions =
      paletteCode.status || layersCode.status !== "all"
        ? [
            paletteCode.status ? "theme: { palette }" : null,
            layersCode.status !== "all" ? "layers" : null,
          ].filter((str) => str !== null)
        : [];
    const layerOptionsStr = layerOptions.length
      ? `{${layerOptions.join(", ")}}`
      : "";

    const sentence = [
      `import { ${importStatement.join(", ")} } from "@cieloazul310/ol-gsi-vt";`,
      paletteCode.status
        ? `const palette = definePalette(${JSON.stringify(paletteCode.value)});`
        : null,
      layersCode.status !== "all" ? `const layers = ${layersCode.value}` : null,
      `const vtLayer = ${paletteTypeCode}(${layerOptionsStr});`,
    ].filter((str) => str !== null);

    return sentence.join("\n\n");
  }, [paletteCode, paletteTypeCode, layersCode]);

  useEffect(() => {
    (async () => {
      const formated = await format(raw, {
        parser: "typescript",
        plugins: [esTreePlugin, typeScriptPlugin],
      });
      setCode(formated);
    })();
  }, [raw]);

  return code;
}

export default useCode;
