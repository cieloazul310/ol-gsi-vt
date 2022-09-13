# `@cieloazul310/ol-gsi-vt-style-utils`

> OpenLayers style package for GSI Vector Tile

## Usage

### 1. Install

```sh
yarn add ol @cieloazul310/vt-style-aoi
```

### 2. Create the `VectorTile` layer

```JavaScript
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';

import vtStyle from '@cieloazul310/vt-style-aoi';

const vtLayer = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat(),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
    attributions: '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
  }),
  style: vtStyle,
});

```

### 3. Create a map

```JavaScript
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

new Map({
  target: 'map',
  view: new View({
    center: fromLonLat([140.46, 36.37]),
    zoom: 12,
  }),
  layers: [vtLayer],
});
```

## レイヤー

### ベクトルタイル

- `boundary`: 境界
- `building`: 建物
- `coastline`: 海岸線
- `contour`: 等高線・等深線
- `elevation`: 標高
- `label`: 注記
- `lake`: 湖の外周
- `landforma`: 地形(面)
- `landformp`: 地形(点)
- `landforml`: 地形(線)
- `railway`: 鉄道
- `river`: 河川
- `road`: 道路
- `searoute`: 航路
- `structurea`: 構造物(面)
- `structurel`: 構造物(線)
- `symbol`: 記号
- `transp`: 交通構造物
- `waterarea`: 水域
- `wstructurea`: 水域関連の構造物

### 最適化ベクトルタイル

- `AdmArea`: 行政区画
- `AdmBdry`: 行政区画線
- `Anno`: 注記
- `BldA`: 建築物
- `Cntr`: 等高線
- `Cstline`: 海岸線
- `Isbt`: 等深線
- `PwrTrnsmL`: 送電線
- `RailCL`: 鉄道中心線
- `RailTrCL`: 軌道の中心線
- `RdEdg`: 道路縁
- `RdCompt`: 道路構成線
- `RdCL`: 道路中心線
- `RvrCL`: 河川中心線
- `SpcfArea`: 特定地区界
- `StrctLine`: 構造物線
- `StrctArea`: 構造物面
- `TpgphArea`: 地形表記面
- `TpgphLine`: 地形表記線
- `WA`: 水域
- `WL`: 水涯線
- `WRltLine`: 水部表記線
- `WStrA`: 水部構造面
- `WStrL`: 水部構造物線

地理院地図Vector（仮称）提供実験
<https://github.com/gsi-cyberjapan/gsimaps-vector-experiment>

[1]: https://github.com/gsi-cyberjapan/gsimaps-vector-experiment "地理院地図Vector（仮称）提供実験"
