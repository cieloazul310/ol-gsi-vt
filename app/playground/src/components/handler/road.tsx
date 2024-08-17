import { VStack, ColorPicker, Text } from "@yamada-ui/react";
import type { Palette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

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
  const { palette, format, setPalette } = usePaletteStore((store) => store);

  const onValueChange =
    (key: Exclude<keyof Palette["road"], "edge">, type: "main" | "edge") =>
    (value: string) => {
      setPalette({
        road: {
          [key]: {
            [type]: value,
          },
        },
      });
    };

  return (
    <VStack gap="md">
      {items.map(({ label, field }) => (
        <VStack gap="sm" key={field}>
          <Text>{label}</Text>
          <Text fontSize="sm">線</Text>
          <ColorPicker
            // label="線"
            name={`${field}.main`}
            format={format}
            value={palette.road[field].main}
            onChange={onValueChange(field, "main")}
          />
          <Text fontSize="sm">道路縁</Text>
          <ColorPicker
            // label="道路縁"
            name={`${field}.edge`}
            format={format}
            value={palette.road[field].edge}
            onChange={onValueChange(field, "edge")}
          />
        </VStack>
      ))}
      <VStack gap="sm">
        <Text>道路縁 (z16以上)</Text>
        <ColorPicker
          // label="道路縁 (z16以上)"
          name="road.edge"
          format={format}
          value={palette.road.edge}
          onChange={(value) => {
            setPalette({
              road: {
                edge: value,
              },
            });
          }}
        />
      </VStack>
    </VStack>
  );
}

export default RoadHandler;
