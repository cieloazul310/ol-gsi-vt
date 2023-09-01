import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type {
  Theme,
  RdEdgCode,
  RdComptCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function rdEdgComptStyle(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { code }: { code: RdEdgCode | RdComptCode },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  return new Style({
    stroke: new Stroke({
      color: palette.road.edge,
      width: 2,
    }),
    zIndex: zIndex.road + 60,
  });
}
