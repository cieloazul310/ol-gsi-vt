import { Accordion, Box } from "@yamada-ui/react";
import BasicHandler from "./basic";
import AnnoHandler from "./anno";
import RoadHandler from "./road";
import RailHandler from "./rail";
import OthersHandler from "./others";
import LayerHandler from "./layer-handler";
import Settings from "./settings";

function Handler() {
  return (
    <>
      <Box minHeight="full">
        <Accordion isToggle>
          <BasicHandler />
          <AnnoHandler />
          <RoadHandler />
          <RailHandler />
          <OthersHandler />
          <LayerHandler />
          <Settings />
        </Accordion>
      </Box>
    </>
  );
}

export default Handler;
