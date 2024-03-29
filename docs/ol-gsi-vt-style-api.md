# @cieloazul310/ol-gsi-vt-style API

## スタイル

### <*function*> gsiOptVtStyle(*options?*, *defaultTheme?*)

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

- *styles?*: <*Object*> `GsiOptVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト
- *theme?*: <*Object*> `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### defaultTheme?

<*Object*> `Theme`  
参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### returns

<*function*> [StyleFunction]  
`(feature: FeatureLike, resolution: number) => Style | Style[]`

### <*function*> gsiVtStyle(*options?*, *defaultTheme?*)

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

- *styles?*: <*Object*> `GsiVTLayerStyleOptions`
  マニュアル記法によるスタイリングを実装するオブジェクト
- *theme?*: <*Object*> `ThemeOptions`
  - *palette?*: `PaletteOptions`
  - *typography?*: `Partial<Typography>`
  - *zIndex*: `Partial<Typography>`
  
  参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### defaultTheme?

<*Object*> `Theme`  
参照: [@cieloazul310/ol-gsi-vt-style-utils API]

#### returns

<*function*> [StyleFunction]  
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

- `[sourceLayerName]`: <*function*> `(feature: FeatureLike, resolution: number, theme: Theme) => Style | Style[] | void`

**返り値がないときは、プリセットのスタイルが適用される**。つまりマニュアル記法で設定する地物と、プリセットのスタイルを設定する地物を区別することができる。  
最適化ベクトルタイルとベクトルタイルではソースレイヤ名が異なるため注意が必要。

[StyleFunction]: https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleFunction "ol/style/Style"
[@cieloazul310/ol-gsi-vt API]: ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: ol-gsi-vt-style-utils-api.md