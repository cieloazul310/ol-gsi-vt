import { Accordion, Box } from "@yamada-ui/react";
import { BasicHandler } from "./basic";
import { AnnoHandler } from "./anno";
import { RoadHandler } from "./road";
import { RailHandler } from "./rail";
import { OthersHandler } from "./others";
import { LayerHandler } from "./layer-handler";
import { Settings } from "./settings";

export function Handler() {
  return (
    <>
      <Box minHeight="calc(100% - 112px)">
        <Accordion.Root toggle>
          <BasicHandler index={0} />
          <AnnoHandler index={1} />
          <RoadHandler index={2} />
          <RailHandler index={3} />
          <OthersHandler index={4} />
          <LayerHandler index={5} />
          <Settings index={5} />
        </Accordion.Root>
      </Box>
    </>
  );
}
