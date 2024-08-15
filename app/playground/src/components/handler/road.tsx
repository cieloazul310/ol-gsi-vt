import type { ColorPickerValueChangeDetails } from "@ark-ui/react/color-picker";
import { useDefaultPalette, type Palette } from "@cieloazul310/ol-gsi-vt";
import { VStack } from "styled-system/jsx";
import { Text } from "@/components/ui/text";
import { usePaletteStore } from "@/providers/palette-provider";
import MyColorPicker from "./color-picker";

const items: {
  label: string;
  field: Exclude<keyof Palette["road"], "edge">;
}[] = [
  {
    label: "高速道路",
    field: "highway",
  },
  {
    label: "国道",
    field: "national",
  },
  {
    label: "都道府県道",
    field: "pref",
  },
  {
    label: "一般道",
    field: "basic",
  },
];

function RoadHandler() {
  const { palette, setPalette } = usePaletteStore((store) => store);
  const defaultPalette = useDefaultPalette();

  const onValueChange =
    (key: Exclude<keyof Palette["road"], "edge">, type: "main" | "edge") =>
    (details: ColorPickerValueChangeDetails) => {
      setPalette({
        road: {
          [key]: {
            [type]: details.valueAsString,
          },
        },
      });
    };

  return (
    <VStack gap={4}>
      {items.map(({ label, field }) => (
        <VStack gap={2} key={field}>
          <Text>{label}</Text>
          <MyColorPicker
            label="線"
            name={`${field}.main`}
            defaultValue={defaultPalette.road[field].main}
            value={palette.road[field].main}
            onValueChange={onValueChange(field, "main")}
          />
          <MyColorPicker
            label="道路縁"
            name={`${field}.edge`}
            defaultValue={defaultPalette.road[field].edge}
            value={palette.road[field].edge}
            onValueChange={onValueChange(field, "edge")}
          />
        </VStack>
      ))}
      <MyColorPicker
        key="road.edge"
        label="道路縁 (z16以上)"
        name="road.edge"
        defaultValue={defaultPalette.road.edge}
        value={palette.road.edge}
        onValueChange={(details) => {
          setPalette({
            road: {
              edge: details.valueAsString,
            },
          });
        }}
      />
    </VStack>
  );
}

export default RoadHandler;
