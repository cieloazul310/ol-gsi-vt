# `@cieloazul310/ol-gsi-vt`

> 国土地理院ベクトルタイルのOpenLayers用プリセット

`@cieloazul310/ol-gsi-vt` は国土地理院が提供するベクトルタイルを[OpenLayers]でスタイルの設定なしで表示するためのパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt)

---

## 機能

- 2種類のベクトルタイルに対応
  - [ベクトルタイル] (2019年7月29日関東の一部地域、2020年3月19日全国提供開始)
  - [最適化ベクトルタイル] (2022年9月6日提供開始開始)
- 設定不要で使用可能
- テーマを使用した配色、タイポグラフィの編集
- [TypeScript]による型安全

---

## 使い方

### 1. インストール

OpenLayers のプロジェクトにインストールします。

```sh
yarn add @cieloazul310/ol-gsi-vt
```

### 2. レイヤを使う

```JavaScript
import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtLayer();
// => VectorTileLayer の生成
```

プリセットとして4種類のレイヤを搭載しています。

- `gsiOptVtLayer`: 最適化ベクトルタイルによるレイヤ
- `gsiOptVtPaleLayer`: 最適化ベクトルタイルによる淡色レイヤ
- `gsiVtLayer`: ベクトルタイルによるレイヤ
- `gsiVtPaleLayer`: ベクトルタイルによる淡色レイヤ

### 3. 地図の生成

OpenLayers の地図にレイヤを追加

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
  layers: [layer],
});
```

---

## カスタマイズ

### 1. 特定のレイヤのみを描写

```ts
import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtLayer({
  layers: ['waterarea'],
});
```

### 2. テーマで配色を編集する

スタイルはテーマ (`theme`) による制御

```ts
import { gsiOptVtPaleLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtPaleLayer({
  theme: {
    palette: {

    },
  },
});
```

### 3. マニュアルでスタイルを変更する

準備中

---

## API リファレンス

### レイヤ `@cieloazul310/ol-gsi-vt`

#### 最適化ベクトルタイル

**gsiOptVtLayer**(*options?*): 通常   **gsiOptVtPaleLayer**(*options?*): 淡色

- *arguments*: `GsiOptVtOptions`
- *return*: [`VectorTileLayer`][VectorTileLayer]

##### options: `GsiOptVtOptions`

- *layers?*: `GsiOptVTLayerName[]`
- *styles?*: `GsiOptLayerStyleOptions`
- *...options?*: レイヤ共通オプション (下記)

#### ベクトルタイル

**gsiVtLayer**(*options?*): 通常  
**gsiVtPaleLayer**(*options?*): 淡色

- *arguments*: `GsiVtOptions`
- *return*: [`VectorTileLayer`][VectorTileLayer]

##### options: `GsiVtOptions`

- *layers?*: `GsiVTLayerName[]`
- *styles?*: `GsiLayerStyleOptions`
- *...options?*: レイヤ共通オプション (下記)

### レイヤ共通オプション

- *theme?*: `ThemeOption`
- *attribution?*: `AttributionLike`
- *declutter?*: `boolean`
- *background?*: `boolean`
- *...vectorTileLayerOptions?*: `VectorTileLayerOptions`

VectorTileLayerOptions  
<https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html>

#### Example

```ts
const layer = gsiOptVtLayer({
  layers: ['RoadCL'],
});
```

---

## パッケージ一覧

`@cieloazul310/ol-gsi-vt` には以下のパッケージが含まれます。各パッケージは個別にインストールが可能です。

- `@cieloazul310/ol-gsi-vt-style`: スタイルを提供
- `@cieloazul310/ol-gsi-vt-utils`: テーマや地物コードなどを提供

---

## ベクトルタイルの仕様

地理院地図Vector（仮称）提供実験  
<https://github.com/gsi-cyberjapan/gsimaps-vector-experiment>

最適化ベクトルタイル試験公開  
<https://github.com/gsi-cyberjapan/optimal_bvmap>

国土地理院によるベクトルタイルは提供実験及び試験公開であるため、今後仕様変更や公開終了の可能性があります。留意してください。

[ベクトルタイル]: https://github.com/gsi-cyberjapan/gsimaps-vector-experiment "地理院地図Vector（仮称）提供実験"
[最適化ベクトルタイル]: https://github.com/gsi-cyberjapan/optimal_bvmap "最適化ベクトルタイル試験公開"
[TypeScript]: https://www.typescriptlang.org/ "TypeScript"
[OpenLayers]: https://openlayers.org/ "OpenLayers"

[VectorTileLayer]: https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html "VectorTileLayer"
