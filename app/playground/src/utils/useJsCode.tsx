import { useMemo } from "react";
import { useClipboard, useAsync } from "@yamada-ui/react";
import { format } from "prettier/standalone";
import * as esTreePlugin from "prettier/plugins/estree";
import { gsiOptVtLayerNameCollection } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import useDiff from "./useDiff";

function useCode() {
  const { layers, paletteType } = usePaletteStore((store) => store);

  const paletteTypeCode = useMemo(() => {
    if (paletteType === "pale") return "gsiOptVtPaleLayer";
    return "gsiOptVtLayer";
  }, [paletteType]);

  const diff = useDiff();

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
      diff.status ? "definePalette" : null,
      layersCode.status === "exclude" ? "gsiOptVtLayerExclude" : null,
    ].filter((str) => str !== null);

    const layerOptions =
      diff.status || layersCode.status !== "all"
        ? [
            diff.status ? "theme: { palette }" : null,
            layersCode.status !== "all" ? "layers" : null,
          ].filter((str) => str !== null)
        : [];
    const layerOptionsStr = layerOptions.length
      ? `{${layerOptions.join(", ")}}`
      : "";

    const sentence = [
      `import { ${importStatement.join(", ")} } from "@cieloazul310/ol-gsi-vt";`,
      diff.status
        ? `const palette = definePalette(${JSON.stringify(diff.value)});`
        : null,
      layersCode.status !== "all" ? `const layers = ${layersCode.value}` : null,
      `const vtLayer = ${paletteTypeCode}(${layerOptionsStr});`,
    ].filter((str) => str !== null);

    return sentence.join("\n\n");
  }, [diff, paletteTypeCode, layersCode]);

  const { value } = useAsync(async () => {
    const tsPlugin = await import("prettier/plugins/typescript");
    const formated = await format(raw, {
      parser: "typescript",
      plugins: [esTreePlugin, tsPlugin],
    });
    return formated;
  }, [raw]);

  return useClipboard(value);
}

export default useCode;
