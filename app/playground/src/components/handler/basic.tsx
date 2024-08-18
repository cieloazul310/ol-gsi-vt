import { VStack, Text, AccordionItem, AccordionPanel } from "@yamada-ui/react";
import type { Palette, PaletteOptions } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import ColorPickerContainer from "./color-picker-container";

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
  // { label: "航路", field: "searoute" },
  // { label: "ダムなどの構造物", field: "structure" },
  // { label: "等深線", field: "isbt" },
  // { label: "火山", field: "volcano" },
];

const boundaryItems: {
  label: string;
  field: keyof Palette["boundary"];
}[] = [
  {
    label: "行政区画",
    field: "main",
  },
  {
    label: "その他",
    field: "light",
  },
];

const buildingItems: {
  label: string;
  field: keyof Palette["building"];
}[] = [
  {
    label: "線",
    field: "stroke",
  },
  {
    label: "塗り",
    field: "fill",
  },
];

function BasicHandler() {
  const { palette, format, setPalette } = usePaletteStore((store) => store);

  const setValue = (key: keyof PaletteOptions) => (newValue: string) => {
    setPalette({ [key]: newValue });
  };

  const setNestedValue =
    <K extends Extract<keyof PaletteOptions, "boundary" | "building">>(
      key: K,
      type: keyof Palette[K],
    ) =>
    (value: string) => {
      setPalette({
        [key]: {
          [type]: value,
        },
      });
    };

  return (
    <AccordionItem label="基本">
      <AccordionPanel py="md">
        <VStack gap="lg">
          <VStack gap="md">
            {items.map(({ label, field }) => (
              <ColorPickerContainer
                key={field}
                format={format}
                label={label}
                name={field}
                value={palette[field]}
                setValue={setValue(field)}
              />
            ))}
          </VStack>
          <VStack gap="md">
            <Text>境界線</Text>
            {boundaryItems.map(({ label, field }) => (
              <ColorPickerContainer
                key={field}
                label={label}
                name={`boundary.${field}`}
                format={format}
                value={palette.boundary[field]}
                setValue={setNestedValue("boundary", field)}
              />
            ))}
          </VStack>
          <VStack gap="md">
            <Text>建物</Text>
            {buildingItems.map(({ label, field }) => (
              <ColorPickerContainer
                key={field}
                label={label}
                name={`building.${field}`}
                format={format}
                value={palette.building[field]}
                setValue={setNestedValue("building", field)}
              />
            ))}
          </VStack>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default BasicHandler;
