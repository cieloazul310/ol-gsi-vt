import Style from 'ol/style/Style';
import {
  annoCodeIsAddress,
  annoCodeIsElevation,
  annoCodeIsGreen,
  annoCodeIsLandform,
  annoCodeIsLandformPoint,
  annoCodeIsMountain,
  annoCodeIsTransp,
  annoCodeIsWater,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';

import { default as addressCommonStyle } from './address';
import { default as elevationCommonStyle } from './elevation';
import { default as greenCommonStyle } from './green';
import { default as iconCommonStyle } from './icon';
import { default as mountainCommonStyle } from './mountain';
import { default as transpCommonStyle } from './transp';
import { default as waterCommonStyle } from './water';
import type { LabelCommonProperties } from './types';

export function annoCommonStyle(
  properties: LabelCommonProperties,
  resolution: number,
  theme: Theme
) {
  const { code, text } = properties;

  if (annoCodeIsAddress(code))
    return addressCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsElevation(code))
    return elevationCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsGreen(code))
    return greenCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsMountain(code))
    return mountainCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsTransp(code))
    return transpCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsWater(code))
    return waterCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsLandform(code)) return new Style();
  if (annoCodeIsLandformPoint(code)) return new Style();

  return iconCommonStyle({ text, code }, resolution, theme);
}

export {
  elevationCommonStyle,
  greenCommonStyle,
  mountainCommonStyle,
  transpCommonStyle,
  waterCommonStyle,
};
