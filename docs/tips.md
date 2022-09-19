# レシピ

1. 淡色プリセットを使う
2. テーマを変更して配色を変える
3. 表示するソースレイヤを選択する
4. 表示しないソースレイヤを選択する
5. マニュアルでスタイルを設定する

## 1. 淡色プリセットを使う

この例では `@cieloazul310/ol-gsi-vt` パッケージに搭載している淡色プリセットレイヤを使います。

```ts
import { gsiOptVtPaleLayer } from '@cieloazul310/ol-gsi-vt';

const optVtLayer = gsiOptVtPaleLayer();

export default optVtLayer;
```

- `gsiOptVtLayer`: 最適化ベクトルタイルの通常レイヤ
- `gsiOptVtPaleLayer`: 最適化ベクトルタイルの淡色レイヤ
- `gsiVtLayer`: ベクトルタイルの通常レイヤ
- `gsiVtPaleLayer`: ベクトルタイルの淡色レイヤ

**gsiOptVtPaleLayer**(*options?*)  
[@cieloazul310/ol-gsi-vt API]

## 2. テーマを変更して配色を変える

この例ではレイヤの `theme` オプションで地図の配色を変更します。

```ts
import { gsiOptVtLayer, type PaletteOption } from '@cieloazul310/ol-gsi-vt';

const palette: PaletteOptions = {
  road: {
    highway: {
      main: '#ccf',
      edge: '#77a',
    },
  },
};

const optVtLayer = gsiOptVtLayer({
  theme: {
    palette,
  },
});
```

上の例では `road.highway` (高速道路)の道路中心線(`main`)と道路縁(`edge`)の色を変更しています。

**Theme - Palette**  
[@cieloazul310/ol-gsi-vt-style-utils API]

## 3. 表示するソースレイヤを選択する

この例ではレイヤの `layers` オプションで最適化ベクトルタイルに含まれるソースレイヤの中から描写する地物を選択します。

```ts
import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const optVtLayer = gsiOptVtLayer({
  layers: ['Cntr', 'Cstline', 'WA', 'WL'],
});

export default optVtLayer;
```

上の例では `Cntr` (等高線), `Cstline` (海岸線), `WA` (水域), `WL` (水涯線)を選択して描写しています。

**※注意** 最適化ベクトルタイル(`gsiOptVtLayer`)とベクトルタイル(`gsiVtLayer`)のソースレイヤ名は異なります。詳しくはベクトルタイルの仕様をご覧ください。

**gsiOptVtLayer**(*options?*)  
[@cieloazul310/ol-gsi-vt API]

## 4. 表示しないソースレイヤを選択する

`@cieloazul310/ol-gsi-vt` パッケージに含まれるヘルパー関数を使って、表示しないソースレイヤを選択します。

```ts
import { gsiOptVtLayer, gsiOptVtLayerExclude } from '@cieloazul310/ol-gsi-vt';

const optVtLayer = gsiOptVtLayer({
  layers: gsiOptVtLayerExclude(['Anno']),
  // =>  ['AdmArea', 'AdmBdry', 'BldA', 'Cntr', 'Cstline', 'Isbt', 'PwrTrnsmL', 'RailCL', 'RailTrCL', 'RdEdg', 'RdCompt', 'RdCL', 'RvrCL', 'SpcfArea', 'StrctLine', 'StrctArea', 'TpgphArea', 'TpgphLine', 'WA', 'WL', 'WStrA', 'WStrL', 'WRltLine']
});

export default optVtLayer;
```

**gsiOptVtLayerExclude**(*layerNameCollection*)  
[@cieloazul310/ol-gsi-vt-style-utils API]

## 5. マニュアルでスタイルを設定する

テーマによる配色やタイポグラフィの設定以外に、マニュアル記法によるスタイリングをサポートしています。

```ts
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import { gsiOptVTLayer, annoCodeIsTerrain, type GsiOptVTStyleOptions, type GsiOptVTLayerName } from '@cieloazul310/ol-gsi-vt';

const styles: GsiOptVTStyleOptions = {
  // ソースレイヤ名 Anno: 注記
  Anno: (feature, resolution, theme) => {
    const { vt_code, vt_text } = feature.getProperties() as GsiOptVTFeatureProperties;
    // 地形の名称のとき
    if (annoCodeIsTerrain(vt_code) && vt_text) {
      return new Style({
        text: new Text({
          text: vt_text,
          font: 'italic bold 20px sans-serif',
          fill: new Fill({ color: theme.palette.anno.terrain }),
        }),
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

**gsiOptVtStyle**(*options?*, *defaultTheme?*)  
[@cieloazul310/ol-gsi-vt-style API]

**annoCodeIsTerrain**(*code*)  
[@cieloazul310/ol-gsi-vt-style-utils API]

[@cieloazul310/ol-gsi-vt API]: ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: ol-gsi-vt-style-utils-api.md