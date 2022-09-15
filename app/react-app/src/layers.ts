import Base from 'ol/layer/Base';
import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import LayerGroup from 'ol/layer/Group';
import { gsiVtLayer, gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

export const vt = gsiVtLayer();
export const optVt = gsiOptVtLayer();

export const cjstd = new Tile({
  source: new XYZ({
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attributions:
      '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
    maxZoom: 18,
    minZoom: 2,
  }),
});

export type Layer = 'vt' | 'opt-vt' | 'cjstd';
export const layers: {
  id: Layer;
  title: string;
  layer: Base;
}[] = [
  { id: 'vt', title: 'ベクトルタイル', layer: vt },
  { id: 'opt-vt', title: '最適化ベクトルタイル', layer: optVt },
  { id: 'cjstd', title: '地理院地図', layer: cjstd },
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
