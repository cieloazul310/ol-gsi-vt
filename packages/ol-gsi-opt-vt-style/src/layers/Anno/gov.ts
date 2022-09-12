import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  dspPosToPosition,
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';

export default function govStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code, vt_dsppos, vt_text, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<
      | 611 // 合同庁舎
      | 612 // 国の機関
      | 621 // 都道府県庁
      | 881 // 地方の機関
      | 882 // 保健所
      | 883 // 警察
      | 884 // 消防
      | 888 // 指定公共機関
      | 1401 //都道府県所在地
      | 1402 // 市役所・東京都の区役所
      | 1403 // 町・村役場
      | 3201 // 官公署
      | 3202 // 裁判所
      | 3203 // 税務署
      | 3204 // 外国公館
      | 3205 // 市役所・東京都の区役所
      | 3206 // 町村役場・政令指定都市の区役所
      | 3211 // 交番
      | 3241 // 警察署
      | 3242 // 消防署
      | 3244 // 保健所
    >;

  if (resolution > zoomToResolution(16) && [3204].includes(vt_code))
    return new Style();

  if (vt_text) {
    if (vt_text) {
      const radius = 3;
      const position = dspPosToPosition(
        { vt_dsppos: vt_dsppos ?? 'LC', vt_arrng },
        radius
      );

      return [
        new Style({
          image: new Circle({
            radius,
            fill: new Fill({ color: palette.anno.text.main }),
            declutterMode: 'obstacle',
          }),
          zIndex: zIndex.symbol,
        }),
        new Style({
          text: new Text({
            text: vt_text,
            font: `12px sans-serif`,
            fill: new Fill({ color: palette.anno.text.main }),
            stroke: new Stroke({ color: palette.contrast, width: 2 }),
            ...position,
          }),
          zIndex: zIndex.symbol + 2,
        }),
      ];
    }
  }

  return new Style();
}
