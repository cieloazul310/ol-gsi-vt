# `@cieloazul310/vt-style-aoi`

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

地理院地図Vector（仮称）提供実験
<https://github.com/gsi-cyberjapan/gsimaps-vector-experiment>

[1]: https://github.com/gsi-cyberjapan/gsimaps-vector-experiment "地理院地図Vector（仮称）提供実験"
