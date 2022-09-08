import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import Icon from 'ol/style/Icon';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';
import roadIcon from '../../assets/road_icon.svg';

export default function transpStyle({
  vt_code,
  vt_text,
}: Pick<AnnoFeatureProperties, 'vt_code' | 'vt_text'>) {
  if (vt_code === 2901) {
    const isMajor = parseInt(vt_text ?? '0', 10) < 100;

    return [
      new Style({
        text: new Text({
          text: vt_text,
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ color: palette.transp.national, width: 3 }),
          font: `${isMajor ? 10 : 9}px sans-serif`,
          padding: [0, 0, 0, 1],
        }),
        zIndex: zIndex.transp - (isMajor ? 0 : 10),
      }),
      new Style({
        image: new Icon({
          src: roadIcon,
          scale: isMajor ? 0.06 : 0.05,
          offset: [0, 0],
          declutterMode: 'obstacle',
        }),
        zIndex: zIndex.transp - (isMajor ? 0 : 10) - 1,
      }),
    ];
  }
  if ([2941, 2942, 2943, 2944, 2945].includes(vt_code)) {
    return new Style({
      text: new Text({
        text: vt_text,
        fill: new Fill({ color: palette.road.highway.main }),
        stroke: new Stroke({ color: '#fff', width: 4 }),
        font: '11px sans-serif',
      }),
      zIndex: zIndex.transp,
    });
  }

  return new Style();
}
