import type { ChangeEvent } from "react";
import { VStack, Switch } from "@yamada-ui/react";
import type { GsiOptVTLayerName } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

const items: { label: string; layerName: GsiOptVTLayerName }[] = [
  { layerName: "AdmArea", label: "行政区画" },
  { layerName: "AdmBdry", label: "行政区画線" },
  { layerName: "Anno", label: "注記" },
  { layerName: "BldA", label: "建築物" },
  { layerName: "Cntr", label: "等高線" },
  { layerName: "Cstline", label: "海岸線" },
  { layerName: "Isbt", label: "等深線" },
  { layerName: "PwrTrnsmL", label: "送電線" },
  { layerName: "RailCL", label: "鉄道中心線" },
  { layerName: "RailTrCL", label: "軌道の中心線" },
  { layerName: "RdEdg", label: "道路縁" },
  { layerName: "RdCompt", label: "道路構成線" },
  { layerName: "RdCL", label: "道路中心線" },
  { layerName: "RvrCL", label: "河川中心線" },
  { layerName: "SpcfArea", label: "特定地区界" },
  { layerName: "StrctLine", label: "構造物線" },
  { layerName: "StrctArea", label: "構造物面" },
  { layerName: "TpgphArea", label: "地形表記面" },
  { layerName: "TpgphLine", label: "地形表記線" },
  { layerName: "WA", label: "水域" },
  { layerName: "WL", label: "水涯線" },
  { layerName: "WRltLine", label: "水部表記線" },
  { layerName: "WStrA", label: "水部構造面" },
  { layerName: "WStrL", label: "水部構造物線" },
];

function LayerHandler() {
  const { layers, toggleLayer } = usePaletteStore((store) => store);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    toggleLayer(event.currentTarget.value as GsiOptVTLayerName);
  };

  return (
    <VStack gap="md" justifyContent="start">
      {items.map(({ label, layerName }) => (
        <Switch
          key={layerName}
          value={layerName}
          isChecked={layers.includes(layerName)}
          onChange={onChange}
        >
          {label}
        </Switch>
      ))}
    </VStack>
  );
}

export default LayerHandler;