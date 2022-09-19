# @cieloazul310/ol-gsi-vt-style

> 国土地理院ベクトルタイルのOpenLayers用スタイルプリセット

`@cieloazul310/ol-gsi-vt-style` は国土地理院が提供するベクトルタイルを[OpenLayers]で表示するためスタイルパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style)

## API

- **gsiOptVtStyle**(*options?*, *defaultTheme?*)
- **gsiVtStyle**(*options?*, *defaultTheme?*)

### gsiOptVtStyle(*options?*, *defaultTheme?*)

最適化ベクトルタイルのプリセットスタイルを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt-style/src/opt-vt/index.ts)

```ts
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { gsiOptVtStyle } from '@cieloazul310/ol-gsi-vt-style';

const layer = new VectorLayer({
  source: new VectorTileSource({
    format: new MVTFormat(),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf',
    attributions: '<a href="https://github.com/gsi-cyberjapan/optimal_bvmap" target="_blank" rel=”noopener noreferrer”>国土地理院最適化ベクトルタイル</a>',
  }),
  style: gsiOptVtStyle(),
});
```

#### options?

- *styles?*: `GsiOptVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### defaultTheme?

`Theme` Object  
参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### returns

[StyleFunction]  
`(feature: FeatureLike, resolution: number) => Style | Style[]`

### gsiVtStyle(*options?*, *defaultTheme?*)

ベクトルタイルのプリセットスタイルを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt-style/src/vt/index.ts)

```ts
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { gsiVtStyle } from '@cieloazul310/ol-gsi-vt-style';

const layer = new VectorLayer({
  source: new VectorTileSource({
    format: new MVTFormat(),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
    attributions: '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院ベクトルタイル提供実験</a>',
  }),
  style: gsiVtStyle(),
});
```

#### options?

- *styles?*: `GsiVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### defaultTheme?

`Theme` Object  
参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### returns

[StyleFunction]  
`(feature: FeatureLike, resolution: number) => Style | Style[]`

## スタイルのマニュアル記法

テーマによる配色やタイポグラフィの設定以外に、マニュアル記法によるスタイリングをサポートしています。

```ts
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import { gsiOptVTLayer, type GsiOptVTStyleOptions, type GsiOptVTLayerName } from '@cieloazul310/ol-gsi-vt';

const styles: GsiOptVTStyleOptions = {
  // ソースレイヤ名 Anno: 注記
  Anno: (feature, resolution, theme) => {
    const { vt_code, vt_text } = feature.getProperties() as GsiOptVTFeatureProperties;
    // 注記分類コードが 411: 道路名 のとき
    if (vt_code === 411) {
      return new Style({
        text: new Text({
          text: vt_text,
          font: 'italic bold 20px sans-serif',
          fill: new Fill({ color: theme.palette.anno.text.main }),
        })
      });
    }
    // それ以外は空のスタイル
    return new Style();
  },
};

const layer = gsiOptVtLayer({
  styles,
});
```

### StyleOptions のプロパティと値

- `[sourceLayerName]`: `(feature: FeatureLike, resolution: number, theme: Theme) => Style | Style[] | void`

返り値がないときは、プリセットのスタイルが適用される。つまりマニュアル記法で設定する地物と、プリセットのスタイルを設定する地物を区別することができる。  
最適化ベクトルタイルとベクトルタイルではソースレイヤ名が異なるため注意が必要。

[StyleFunction]: https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleFunction "ol/style/Style"

## パッケージ

### [@cieloazul310/ol-gsi-vt]

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt)

メインパッケージ。4種類のレイヤと以下の2つのパッケージが含まれる。

### [@cieloazul310/ol-gsi-vt-style]

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style)

最適化ベクトルタイル及びベクトルタイルのプリセットのスタイルを定義したパッケージ。

### [@cieloazul310/ol-gsi-vt-style-utils]

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style-utils.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style-utils)

テーマや型定義、注記の地物コードのフィルタリングなどの関数を搭載したパッケージ。

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

[@cieloazul310/ol-gsi-vt]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/packages/ol-gsi-vt
[@cieloazul310/ol-gsi-vt-style]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/packages/ol-gsi-vt-style
[@cieloazul310/ol-gsi-vt-style-utils]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/packages/ol-gsi-vt-style-utils

[@cieloazul310/ol-gsi-vt API]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/docs/ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/docs/ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/docs/ol-gsi-vt-style-utils-api.md
[Tips]: https://github.com/cieloazul310/ol-gsi-vt/tree/main/docs/tips.md
