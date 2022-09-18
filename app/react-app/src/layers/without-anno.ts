import { gsiOptVtLayer, gsiOptVtLayerExclude } from '@cieloazul310/ol-gsi-vt';

const withoutAnno = gsiOptVtLayer({
  layers: gsiOptVtLayerExclude(['Anno']),
});

export default withoutAnno;
