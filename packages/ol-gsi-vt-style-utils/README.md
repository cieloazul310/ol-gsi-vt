# @cieloazul310/ol-gsi-vt-utils

> 国土地理院ベクトルタイルのOpenLayers用プリセット

`@cieloazul310/ol-gsi-vt-style-utils` は `@cieloazul310/ol-gsi-vt`のためのユーティリティパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style-utils.svg)](https://badge.fury.io/js/@cieloazul310%2Fol-gsi-vt-style-utils)

## API

### テーマ

- **defaultTheme**
- **mergeDefaultTheme**(*defaultTheme*)

#### Palette

- **defaultPalette**
- **palePalette**
- **mergeDefaultPalette**(*paletteOptions?*, *initialPalette?*)

#### Typography

- **defaultTypography**
- **mergeDefaultTypogrphy**(*typographyOptions?*, *initialTypography?*)

#### zIndex

- **defaultZIndex**

### 関数

#### for source-layers

ベクトルタイルのソースレイヤの取捨選択用の定数と関数

- **gsiOptVtLayerNameCollection**
- **gsiOptVtLayerExclude**(*layerNameCollection*)
- **gsiVtLayerNameCollection**
- **gsiVtLayerExclude**(*layerNameCollection*)

#### 注記

マニュアル記法で注記のスタイルを記述する際に、地物のフィルタリングと型安全を保つ関数。

- **annoCodeIsAdress**(*code*)
- **annoCodeIsAdm**(*code*)
- **annoCodeIsAirport**(*code*)
- **annoCodeIsElevation**(*code*)
- **annoCodeIsGreen**(*code*)
- **annoCodeIsLandformPoint**(*code*)
- **annoCodeIsPort**(*code*)
- **annoCodeIsSchool**(*code*)
- **annoCodeIsTerrain**(*code*)
- **annoCodeIsTransp**(*code*)
- **annoCodeIsVegetation**(*code*)
- **annoCodeIsWater**(*code*)

#### その他

- **zoomToResolution**(*zoomLevel*)
- **dspPos**(*dspPos?*, *arrng?*, *radius?*)

### types

最適化ベクトルタイル及びベクトルタイルの地物の型定義

- **GsiOptVTFeatureProperties**<*VTCode*, *T*>
- **GsiVTFeatureProperties**<*FTCode*, *T*>


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
