# @cieloazul310/ol-gsi-vt

> 国土地理院ベクトルタイルのOpenLayers用プリセット

**@cieloazul310/ol-gsi-vt** は、国土地理院が提供するベクトルタイルを [OpenLayers] で設定不要で手軽に表示するためのパッケージです。ベクトルタイル、最適化ベクトルタイルのそれぞれに通常、淡色の2種類ずつ、計4種類のプリセットレイヤを搭載しています。

GitHub リポジトリ  
<https://github.com/cieloazul310/ol-gsi-vt>

## 機能

- 2種類のベクトルタイルに対応
  - [ベクトルタイル] (2019年7月29日関東の一部地域、2020年3月19日全国提供開始)
  - [最適化ベクトルタイル] (2022年9月6日提供開始)
- 設定不要で使用可能
- テーマによる配色、タイポグラフィの編集
- [TypeScript]による型安全性

## インストール

### OpenLayers プロジェクトにインストール

```sh
yarn add @cieloazul310/ol-gsi-vt
```

既存の OpenLayers プロジェクトや [create-ol-app](https://github.com/openlayers/create-ol-app) などで新規作成したプロジェクトにインストール。

<https://openlayers.org/doc/quickstart.html>

### テンプレートを利用

OpenLayers プロジェクトの TypeScript テンプレートをクローン

```sh
git clone git@github.com:cieloazul310/ol-gsi-vt-template.git --depth=1
```

<https://github.com/cieloazul310/ol-gsi-vt-template>

## 使い方

```ts
import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtLayer();
```

スタイルの設定なしで国土地理院の最適化ベクトルタイル及びベクトルタイルを利用することができます。

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

## API

### [@cieloazul310/ol-gsi-vt API]

#### レイヤ

- **gsiOptVtLayer**(*options?*)
- **gsiVtLayer**(*options?*)
- **gsiOptVtPaleLayer**(*options?*)
- **gsiVtPaleLayer**(*options?*)

#### その他

- **optVtDefaultAttribution**
- **vtDefaultAttribution**

### [@cieloazul310/ol-gsi-vt-style API]  

#### スタイル

- **gsiOptVtStyle**(*options?*, *defaultTheme?*)
- **gsiVtStyle**(*options?*, *defaultTheme?*)

### [@cieloazul310/ol-gsi-vt-style-utils API]

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

## [レシピ]

1. 淡色プリセットを使う
2. テーマを変更して配色を変える
3. 表示するソースレイヤを選択する
4. 表示しないソースレイヤを選択する
5. マニュアルでスタイルを設定する

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

[@cieloazul310/ol-gsi-vt]: https://github.com/cieloazul310/ol-gsi-vt/tree/doc/packages/ol-gsi-vt
[@cieloazul310/ol-gsi-vt-style]: https://github.com/cieloazul310/ol-gsi-vt/tree/doc/packages/ol-gsi-vt-style
[@cieloazul310/ol-gsi-vt-style-utils]: https://github.com/cieloazul310/ol-gsi-vt/tree/doc/packages/ol-gsi-vt-style-utils

[@cieloazul310/ol-gsi-vt API]: ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: ol-gsi-vt-style-utils-api.md
[レシピ]: tips.md
