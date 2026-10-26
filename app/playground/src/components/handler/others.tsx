import { VStack, Text, Accordion } from "@yamada-ui/react";
import type { Palette, PaletteOptions } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import ColorPickerContainer from "./color-picker-container";

const items: {
  label: string;
  field: Extract<
    keyof PaletteOptions,
    "searoute" | "structure" | "isbt" | "volcano"
  >;
}[] = [
  { label: "航路", field: "searoute" },
  { label: "ダムなどの構造物", field: "structure" },
  { label: "等深線", field: "isbt" },
  { label: "火山", field: "volcano" },
];

const contourItems: {
  label: string;
  field: keyof Palette["contour"];
}[] = [
  {
    label: "メイン",
    field: "main",
  },
  {
    label: "サブ",
    field: "light",
  },
];

const tpgphAreaItems: {
  label: string;
  field: keyof Palette["tpgphArea"];
}[] = [
  { label: "湿地", field: "wetland" },
  {
    label: "万年雪",
    field: "firn",
  },
  {
    label: "砂礫地",
    field: "sand",
  },
];

export function OthersHandler({ index }: { index: number }) {
  const { palette, format, setPalette } = usePaletteStore((store) => store);

  const setValue =
    <K extends keyof PaletteOptions>(key: K) =>
    (value: string) => {
      setPalette({ [key]: value });
    };

  const setNestedValue =
    <K extends "contour" | "tpgphArea">(key: K, field: keyof Palette[K]) =>
    (value: string) => {
      setPalette({
        [key]: {
          [field]: value,
        },
      });
    };

  return (
    <Accordion.Item index={index} button="地形・その他">
      <Accordion.Panel py="md">
        <VStack gap="lg">
          <VStack gap="md">
            <Text>等高線</Text>
            {contourItems.map(({ label, field }) => (
              <ColorPickerContainer
                key={field}
                label={label}
                name={`contour.${field}`}
                format={format}
                value={palette.contour[field]}
                setValue={setNestedValue("contour", field)}
              />
            ))}
          </VStack>
          <VStack gap="md">
            <Text>地形面</Text>
            {tpgphAreaItems.map(({ label, field }) => (
              <ColorPickerContainer
                key={field}
                label={label}
                name={`tpgphArea.${field}`}
                format={format}
                value={palette.tpgphArea[field]}
                setValue={setNestedValue("tpgphArea", field)}
              />
            ))}
          </VStack>
          {items.map(({ label, field }) => (
            <ColorPickerContainer
              key={field}
              label={label}
              name={`${field}.main`}
              format={format}
              value={palette[field]}
              setValue={setValue(field)}
            />
          ))}
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
