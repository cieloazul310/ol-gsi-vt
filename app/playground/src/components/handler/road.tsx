import { VStack, Text, AccordionItem, AccordionPanel } from "@yamada-ui/react";
import type { Palette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import ColorPickerContainer from "./color-picker-container";

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
    <AccordionItem label="道路">
      <AccordionPanel py="md">
        <VStack gap="lg">
          {items.map(({ label, field }) => (
            <VStack gap="md" key={field}>
              <Text>{label}</Text>
              <ColorPickerContainer
                label="線"
                name={`${field}.main`}
                format={format}
                value={palette.road[field].main}
                setValue={onValueChange(field, "main")}
              />
              <ColorPickerContainer
                label="道路縁"
                name={`${field}.edge`}
                format={format}
                value={palette.road[field].edge}
                setValue={onValueChange(field, "edge")}
              />
            </VStack>
          ))}
          <ColorPickerContainer
            label="道路縁 (z16以上)"
            name="road.edge"
            format={format}
            value={palette.road.edge}
            setValue={(value) => {
              setPalette({
                road: {
                  edge: value,
                },
              });
            }}
          />
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default RoadHandler;
