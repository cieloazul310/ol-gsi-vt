import { type PaletteOptions } from "@cieloazul310/ol-gsi-vt";
import {
  Accordion,
  AccordionPanel,
  VStack,
  ColorPicker,
  Box,
  Text,
  AccordionItem,
} from "@yamada-ui/react";
import { usePaletteStore } from "@/providers/palette-provider";
// import ColorPickerContainer from "./color-picker-container";
import FormatHandler from "./format-handler";
import RoadHandler from "./road";
import LayerHandler from "./layer-handler";

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
  const { palette, format, setPalette } = usePaletteStore((store) => store);

  const setValue = (key: keyof PaletteOptions) => (newValue: string) => {
    setPalette({ [key]: newValue });
  };

  return (
    <>
      <Box minHeight="full">
        <Accordion isMultiple isToggle>
          <AccordionItem label="基本">
            <AccordionPanel py="md">
              <VStack gap="sm">
                {items.map(({ label, field }) => (
                  <Box key={field}>
                    <Text>{label}</Text>
                    <ColorPicker
                      format={format}
                      name={field}
                      value={palette[field]}
                      onChange={setValue(field)}
                    />
                  </Box>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem label="道路">
            <AccordionPanel py="md">
              <RoadHandler />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem label="レイヤ">
            <AccordionPanel py="md">
              <LayerHandler />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem label="設定">
            <AccordionPanel
              py="md"
              display="flex"
              flexDirection="column"
              gap="sm"
            >
              <Text>モード</Text>
              <FormatHandler />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default Handler;
