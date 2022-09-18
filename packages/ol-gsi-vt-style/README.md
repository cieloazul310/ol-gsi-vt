# `@cieloazul310/ol-gsi-vt-style`

> 国土地理院ベクトルタイルのOpenLayers用スタイルプリセット

`@cieloazul310/ol-gsi-vt-style` は国土地理院が提供するベクトルタイルを[OpenLayers]で表示するためスタイルパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style)

## API リファレンス

### スタイル `@cieloazul310/ol-gsi-vt-style`

**gsiOptVtStyle**(*options?*, *defaultTheme?*): 最適化ベクトルタイルのスタイル設定

- *arguments*:
  - *options?*: `GsiOptVtStyleOptions`
  - *defaultTheme?*: `Theme`
- *returns*: `StyleFunction` (*feature*: `FeatureLike`, *resolution*: `number`) => `Style` | `Style[]`

**gsiVtStyle**(*options?*, *defaultTheme?*): ベクトルタイルのスタイル設定

- *arguments*:
  - *options?*: `GsiVtStyleOptions`
  - *defaultTheme?*: `Theme`
- *returns*: `StyleFunction` (*feature*: `FeatureLike`, *resolution*: `number`) => `Style` | `Style[]`

#### Example

```ts
import { gsiOptVtStyle } from '@cieloazul310/ol-gsi-vt';

const layer = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat(),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf',
    attributions: '<a href="https://github.com/gsi-cyberjapan/optimal_bvmap" target="_blank" rel=”noopener noreferrer”>国土地理院最適化ベクトルタイル</a>',
  }),
  style: gsiOptVtStyle({
    theme: {
      palette: {
        road: {
          highway: {
            main: '#fa6',
            edge: '#c40',
          },
        },
      },
    },
  }),
});
```

---

## パッケージ一覧

`@cieloazul310/ol-gsi-vt-style` には以下のパッケージが含まれます。各パッケージは個別にインストールが可能です。

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
