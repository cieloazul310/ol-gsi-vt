import Style from 'ol/style/Style';
import {
  annoCodeIsAddress,
  annoCodeIsElevation,
  annoCodeIsGreen,
  annoCodeIsVegetation,
  annoCodeIsLandformPoint,
  annoCodeIsTerrain,
  annoCodeIsTransp,
  annoCodeIsWater,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';

import addressCommonStyle from './address';
import elevationCommonStyle from './elevation';
import greenCommonStyle from './green';
import iconCommonStyle from './icon';
import terrainCommonStyle from './terrain';
import transpCommonStyle from './transp';
import waterCommonStyle from './water';
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
  if (annoCodeIsTerrain(code))
    return terrainCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsTransp(code))
    return transpCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsWater(code))
    return waterCommonStyle({ ...properties, code }, resolution, theme);
  if (annoCodeIsVegetation(code)) return new Style();
  if (annoCodeIsLandformPoint(code)) return new Style();

  return iconCommonStyle({ text, code }, resolution, theme);
}

export {
  elevationCommonStyle,
  greenCommonStyle,
  terrainCommonStyle,
  transpCommonStyle,
  waterCommonStyle,
};
