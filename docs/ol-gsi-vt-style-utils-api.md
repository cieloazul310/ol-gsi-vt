# @cieloazul310/ol-gsi-vt-utils API

### Theme

- **defaultTheme**

```ts
type Theme = {
  palette: Palette;
  typography: Typography;
  zIndex: ZIndex;
};
```

#### Palette

```ts
type Palette = {
  /** 注記レイヤーの文字色 */
  anno: {
    /** テキスト */
    text: {
      main: string;
      light: string;
    };
    /** 水域関連の文字色 */
    water: string;
    /** 山岳関連の文字色 */
    terrain: string;
    /** 交通関連の文字色 */
    transp: string;
    /** 森林・緑地・公園関連の文字色 */
    green: string;
  };
  /** レイヤーの背景 */
  background: string;
  /** 境界の色 */
  boundary: {
    main: string;
    light: string;
  };
  /** 建物の色 */
  building: {
    stroke: string;
    fill: string;
  };
  /** 等高線の色 */
  contour: {
    main: string;
    light: string;
  };
  /** テキストの文字縁など */
  contrast: string;
  /** 等深線 */
  isbt: string;
  /** 鉄道関連 */
  rail: {
    /** 駅 */
    station: {
      main: string;
      light: string;
    };
    /** 新幹線 */
    shinkansen: string;
    /** JR */
    jr: string;
    /** JR以外 */
    shitetsu: string;
  };
  /** 道路の色
   * `main`は道路中心線、`edge` は道路縁
   */
  road: {
    /** 高速道路 */
    highway: {
      main: string;
      edge: string;
    };
    /** 国道 */
    national: {
      main: string;
      edge: string;
    };
    /** 都道府県道 */
    pref: {
      main: string;
      edge: string;
    };
    /** 一般道 */
    basic: {
      main: string;
      edge: string;
    };
    /** z16以上の道路縁 */
    edge: string;
  };
  /** 航路 */
  searoute: string;
  /** ダムなどの構造物 */
  structure: string;
  /** 地形面 */
  tpgphArea: {
    /** 湿地 */
    wetland: string;
    /** 万年雪 */
    firn: string;
    /** 砂礫地 */
    sand: string;
  };
  /** 国道番号・高速道路番号 */
  transp: {
    /** 高速道路番号の背景色 */
    highway: string;
    /** 国道番号の背景色 */
    national: string;
  };
  /** 火山 */
  volcano: string;
  /** 水域・河川 */
  waterarea: string;
  /** 海岸線・水涯線 */
  waterline: string;
};
```

#### Typography

```ts
type Typography = {
  fontFamily: string;
  fontSize: {
    /** default to '10px' */
    xs: string;
    /** default to '12px' */
    sm: string;
    /** default to '14px' */
    md: string;
    /** default to '18px' */
    lg: string;
    /** default to '24px' */
    xl: string;
  };
  /** Canvas フォント設定を生成
   * https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/font
   */
  toString: (
    fontSize?: keyof Typography['fontSize'] | string,
    option?: {
      italic?: boolean;
      bold?: boolean;
      fontFamily?: string;
      fontWeight?: string | number | number;
    }
  ) => string;
};
```

#### zIndex

```ts
type ZIndex = {
  /** 水域 (default to 0) */
  waterarea: number;
  /** 海岸線・水涯線 (default to 1) */
  waterline: number;
  /** 地形面 (default to 2) */
  tpgphArea: number;
  /** 等高線 (default to 3) */
  contour: number;
  /** 航路 (default to 4) */
  searoute: number;
  /** 道路の背景 (default to 100) */
  roadBg: number;
  /** 鉄道の背景 (default to 150) */
  railwayBg: number;
  /** 建物の基準面 (default to 150) (lvOrder属性に依存) */
  building: number;
  /** 道路の基準面 (default to 150) (lvOrder属性に依存) */
  road: number;
  /** 鉄道の基準面 (default to 160) (lvOrder属性に依存) */
  railway: number;
  /** 駅 (default to 200) */
  station: number;
  /** 送電線 (default to 250) */
  pwrTrnsmL: number;
  /** 境界線 (default to 500) */
  boundary: number;
  /** 標高点 (default to 600) */
  elevation: number;
  /** 国道番号・高速道路番号 (default to 700)「 */
  transp: number;
  /** 注記の基準 (default to 800) */
  label: number;
  /** 記号の基準 (default to 900) */
  symbol: number;
  /** 注記の最上位 (default to 1000) */
  highest: number;
};
```

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

ベクトルタイルのソースレイヤーの取捨選択用の定数と関数

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

[VectorTileLayer]: https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html "VectorTileLayer"
[@cieloazul310/ol-gsi-vt API]: ol-gsi-vt-api.md
[@cieloazul310/ol-gsi-vt-style API]: ol-gsi-vt-style-api.md
[@cieloazul310/ol-gsi-vt-style-utils API]: ol-gsi-vt-style-utils-api.md