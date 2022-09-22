import { gsiVtLayer } from '@cieloazul310/ol-gsi-vt';

const terrain = gsiVtLayer({
  layers: [
    'boundary',
    'coastline',
    'contour',
    'lake',
    'landforma',
    'river',
    'waterarea',
  ],
});

export default terrain;
