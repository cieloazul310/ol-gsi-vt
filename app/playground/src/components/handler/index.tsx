import {
  Accordion,
  AccordionPanel,
  Box,
  Text,
  AccordionItem,
} from "@yamada-ui/react";
import BasicHandler from "./basic";
import RoadHandler from "./road";
import RailHandler from "./rail";
import LayerHandler from "./layer-handler";
import FormatHandler from "./format-handler";

/*
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
*/
function Handler() {
  return (
    <>
      <Box minHeight="full">
        <Accordion isToggle>
          <BasicHandler />
          <RoadHandler />
          <RailHandler />
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
