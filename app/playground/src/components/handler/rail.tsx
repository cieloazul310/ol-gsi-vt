import { VStack, Text, AccordionItem, AccordionPanel } from "@yamada-ui/react";
import type { Palette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import ColorPickerContainer from "./color-picker-container";

const items: {
  label: string;
  field: Exclude<keyof Palette["rail"], "station">;
}[] = [
  /*
  {
    label: "新幹線",
    field: "shinkansen",
  },
  */
  {
    label: "JR",
    field: "jr",
  },
  {
    label: "JR以外",
    field: "shitetsu",
  },
];

function RailHandler() {
  const { palette, format, setPalette } = usePaletteStore((store) => store);
  console.log(palette.rail.station);

  const setValue =
    (key: Exclude<keyof Palette["rail"], "station">) => (value: string) => {
      setPalette({
        rail: {
          [key]: value,
        },
      });
    };

  const setNestedValue = (key: "main" | "light") => (value: string) => {
    setPalette({
      rail: {
        station: {
          [key]: value,
        },
      },
    });
  };

  return (
    <AccordionItem label="鉄道">
      <AccordionPanel py="md">
        <VStack gap="lg">
          {items.map(({ label, field }) => (
            <ColorPickerContainer
              key={field}
              label={label}
              name={field}
              format={format}
              value={palette.rail[field]}
              setValue={setValue(field)}
            />
          ))}
          <VStack gap="md">
            <Text>駅</Text>
            <ColorPickerContainer
              label="駅 (通常)"
              name="station.main"
              format={format}
              value={palette.rail.station.main}
              setValue={setNestedValue("main")}
            />
            <ColorPickerContainer
              label="駅 (地下など)"
              name="station.light"
              format={format}
              value={palette.rail.station.light}
              setValue={setNestedValue("light")}
            />
          </VStack>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default RailHandler;
