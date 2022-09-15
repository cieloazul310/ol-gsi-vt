import Base from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import { gsiVtLayer, gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';
import cjstd from './gsi';
import stamen from './stamen';

export const vt = gsiVtLayer();
export const optVt = gsiOptVtLayer();

export type Layer = 'vt' | 'opt-vt' | 'cjstd' | 'stamen';
export const layers: {
  id: Layer;
  title: string;
  layer: Base;
}[] = [
  { id: 'vt', title: 'ベクトルタイル', layer: vt },
  { id: 'opt-vt', title: '最適化ベクトルタイル', layer: optVt },
  { id: 'cjstd', title: '地理院地図', layer: cjstd },
  { id: 'stamen', title: 'Stamen Tonor風', layer: stamen },
];

const layerGroup = new LayerGroup({
  layers: layers.map(({ layer }) => layer),
});
export default layerGroup;

export function setVisibleLayer(layer: Layer) {
  layerGroup.getLayers().forEach((lyr, index) => {
    lyr.setVisible(layers[index].id === layer);
  });
}
