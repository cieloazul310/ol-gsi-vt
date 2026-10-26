import { VStack, Text, Accordion } from "@yamada-ui/react";
import type { Palette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import ColorPickerContainer from "./color-picker-container";

const annoItems: {
  label: string;
  field: Exclude<keyof Palette["anno"], "text">;
}[] = [
  {
    label: "水域関連",
    field: "water",
  },
  {
    label: "山岳関連",
    field: "terrain",
  },
  {
    label: "交通関連",
    field: "transp",
  },
  {
    label: "森林・緑地関連",
    field: "green",
  },
];

const transpItems: {
  label: string;
  field: keyof Palette["transp"];
}[] = [
  { label: "高速道路番号の背景色", field: "highway" },
  { label: "国道番号の背景色", field: "national" },
];

export function AnnoHandler({ index }: { index: number }) {
  const { palette, format, setPalette } = usePaletteStore((store) => store);

  const setValue =
    <K extends "anno" | "transp">(
      key: K,
      field: K extends "anno"
        ? Exclude<keyof Palette["anno"], "text">
        : keyof Palette[K],
    ) =>
    (value: string) => {
      setPalette({
        [key]: {
          [field]: value,
        },
      });
    };

  const setNestedValue = (key: "main" | "light") => (value: string) => {
    setPalette({
      anno: {
        text: {
          [key]: value,
        },
      },
    });
  };

  return (
    <Accordion.Item index={index} button="注記">
      <Accordion.Panel py="md">
        <VStack gap="lg">
          <VStack gap="md">
            <Text>注記</Text>
            <ColorPickerContainer
              label="メイン"
              name="anno.main"
              format={format}
              value={palette.anno.text.main}
              setValue={setNestedValue("main")}
            />
            <ColorPickerContainer
              label="サブ・アイコン"
              name="station.light"
              format={format}
              value={palette.anno.text.light}
              setValue={setNestedValue("light")}
            />
          </VStack>
          {annoItems.map(({ label, field }) => (
            <ColorPickerContainer
              key={field}
              label={label}
              name={`${field}.main`}
              format={format}
              value={palette.anno[field]}
              setValue={setValue("anno", field)}
            />
          ))}
          {transpItems.map(({ label, field }) => (
            <ColorPickerContainer
              key={field}
              label={label}
              name={`${field}.main`}
              format={format}
              value={palette.transp[field]}
              setValue={setValue("transp", field)}
            />
          ))}
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
