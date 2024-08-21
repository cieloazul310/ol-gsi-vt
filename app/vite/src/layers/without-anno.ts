import { gsiOptVtLayer, gsiOptVtLayerExclude } from "@cieloazul310/ol-gsi-vt";

const withoutAnno = gsiOptVtLayer({
  layers: gsiOptVtLayerExclude(["Anno"]),
  properties: {
    name: "注記なし",
  },
});

export default withoutAnno;
