import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const cjstd = new Tile({
  source: new XYZ({
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attributions:
      '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
    maxZoom: 18,
    minZoom: 5,
  }),
});

export default cjstd;
