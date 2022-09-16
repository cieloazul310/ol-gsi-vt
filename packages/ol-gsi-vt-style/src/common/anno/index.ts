import Style from 'ol/style/Style';
import {
  annoCodeIsAddress,
  annoCodeIsElevation,
  annoCodeIsGreen,
  annoCodeIsMountain,
  annoCodeIsTransp,
  annoCodeIsWater,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';

import { default as addressCommonStyle } from './address';
import { default as elevationCommonStyle } from './elevation';
import { default as greenCommonStyle } from './green';
import { default as icon } from './icon';
import { default as mountainCommonStyle } from './mountain';
import { default as schoolCommonStyle } from './school';
import { default as transpCommonStyle } from './transp';
import { default as waterCommonStyle } from './water';
import type { LabelCommonProperties } from './types';

export function annoCommonStyle(
  properties: LabelCommonProperties,
  resolution: number,
  theme: Theme
) {
  const { code, text } = properties;
  // console.log(code, properties.text, properties.dspPos, properties.arrng);

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
  if (text) {
    return icon({ text });
  }
  return new Style();
}

export {
  elevationCommonStyle,
  mountainCommonStyle,
  schoolCommonStyle,
  transpCommonStyle,
  waterCommonStyle,
};
