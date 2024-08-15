import type { ColorPickerValueChangeDetails } from "@ark-ui/react/color-picker";
import {
  useDefaultPalette,
  type PaletteOptions,
} from "@cieloazul310/ol-gsi-vt";
import { VStack } from "styled-system/jsx";
import { usePaletteStore } from "@/providers/palette-provider";
import { Button } from "@/components/ui/button";
import MyColorPicker from "./color-picker";
import RoadHandler from "./road";

type NotNestedPaletteField = Extract<
  keyof PaletteOptions,
  | "background"
  | "contrast"
  | "isbt"
  | "searoute"
  | "structure"
  | "volcano"
  | "waterarea"
  | "waterline"
>;

const items: { label: string; field: NotNestedPaletteField }[] = [
  { label: "背景", field: "background" },
  { label: "コントラスト", field: "contrast" },
  { label: "水域・河川", field: "waterarea" },
  { label: "海岸線・水涯線", field: "waterline" },
  { label: "航路", field: "searoute" },
  { label: "ダムなどの構造物", field: "structure" },
  { label: "等深線", field: "isbt" },
  { label: "火山", field: "volcano" },
];

function Handler() {
  const { palette, setPalette, reset } = usePaletteStore((store) => store);
  const defaultPalette = useDefaultPalette();

  const onValueChange =
    (key: keyof PaletteOptions) => (details: ColorPickerValueChangeDetails) => {
      setPalette({ [key]: details.valueAsString });
    };

  return (
    <VStack gap={4}>
      {items.map(({ label, field }) => (
        <MyColorPicker
          key={field}
          label={label}
          name={field}
          defaultValue={defaultPalette[field]}
          value={palette[field]}
          onValueChange={onValueChange(field)}
        />
      ))}
      <RoadHandler />
      <Button onClick={reset}>Reset</Button>
    </VStack>
  );
}

export default Handler;
