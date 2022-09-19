# @cieloazul310/ol-gsi-vt API

## レイヤ

- **gsiOptVtLayer**(*options?*)
- **gsiVtLayer**(*options?*)
- **gsiOptVtPaleLayer**(*options?*)
- **gsiVtPaleLayer**(*options?*)

### gsiOptVtLayer(*options?*)

最適化ベクトルタイルのレイヤを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/gsi-opt-vt.ts)

```ts
import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtLayer();
```

#### options

- *layers?*: `GsiOptVTLayerName[]`
  描写する最適化ベクトルタイルのソースレイヤ名を配列で記述
- *styles?*: `GsiOptVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト  
  参照: [@cieloazul310/ol-gsi-vt-style API]
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照 [@cieloazul310/ol-gsi-vt-style-utils API]
- *attribution*?: `string | string[]`
  出典、帰属を記述
- *declutter*?: `boolean`
  地図の点データが重ならないようにする (default to `true`)
- *background*?: `boolean`
  地図に背景色を設定する (deafult to `true`)
- ...and [VectorTileLayer] options

#### returns

[VectorTileLayer] Class  

### gsiVtLayer(*options?*)

ベクトルタイルのレイヤを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/gsi-vt.ts)

```ts
import { gsiVtLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiVtLayer();
```

#### options

- *layers?*: `GsiVTLayerName[]`
  描写するベクトルタイルのソースレイヤ名を配列で記述
- *styles?*: `GsiVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト  
  参照: [@cieloazul310/ol-gsi-vt-style API]
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]
- *attribution*?: `string | string[]`
  出典、帰属を記述
- *declutter*?: `boolean`
  地図の点データが重ならないようにする (default to `true`)
- *background*?: `boolean`
  地図に背景色を設定する (deafult to `true`)
- ...and [VectorTileLayer] options

#### returns

[VectorTileLayer] Class

### gsiOptVtPaleLayer(*options?*)

最適化ベクトルタイルの淡色レイヤを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/gsi-opt-vt-pale.ts)

```ts
import { gsiOptVtPaleLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiOptVtPaleLayer();
```

#### options

- *layers?*: `GsiOptVTLayerName[]`
  描写する最適化ベクトルタイルのソースレイヤ名を配列で記述
- *styles?*: `GsiOptVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト  
  参照: [@cieloazul310/ol-gsi-vt-style API]
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]
- *attribution*?: `string | string[]`
  出典、帰属を記述
- *declutter*?: `boolean`
  地図の点データが重ならないようにする (default to `true`)
- *background*?: `boolean`
  地図に背景色を設定する (deafult to `true`)
- ...and [VectorTileLayer] options

#### returns

[VectorTileLayer] Class

### gsiVtLayer(*options?*)

ベクトルタイルの淡色レイヤを生成する関数  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/gsi-vt-pale.ts)

```ts
import { gsiVtPaleLayer } from '@cieloazul310/ol-gsi-vt';

const layer = gsiVtPaleLayer();
```

#### options

- *layers?*: `GsiVTLayerName[]`
  描写するベクトルタイルのソースレイヤ名を配列で記述
- *styles?*: `GsiVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト  
  参照: [@cieloazul310/ol-gsi-vt-style API]
- *theme?*: `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]
- *attribution*?: `string | string[]`
  出典、帰属を記述
- *declutter*?: `boolean`
  地図の点データが重ならないようにする (default to `true`)
- *background*?: `boolean`
  地図に背景色を設定する (deafult to `true`)
- ...and [VectorTileLayer] options

#### returns

[VectorTileLayer] Class

## その他

- **optVtDefaultAttribution**
- **vtDefaultAttribution**

### optVtDefaultAttribution

最適化ベクトルタイルレイヤのデフォルトのアトリビューション  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/types.ts)

equal to `'<a href="https://github.com/gsi-cyberjapan/optimal_bvmap" target="_blank" rel=”noopener noreferrer”>国土地理院最適化ベクトルタイル</a>'`

### vtDefaultAttribution

ベクトルタイルレイヤのデフォルトのアトリビューション  
[Source](https://github.com/cieloazul310/ol-gsi-vt/blob/main/packages/ol-gsi-vt/src/layers/types.ts)

equal to `'<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院ベクトルタイル提供実験</a>'`
``

[VectorTileLayer]: https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html "VectorTileLayer"
[@cieloazul310/ol-gsi-vt API]: ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: ol-gsi-vt-style-utils-api.md