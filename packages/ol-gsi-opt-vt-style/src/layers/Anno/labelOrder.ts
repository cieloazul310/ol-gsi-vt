import { zIndex } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function labelOrder(vt_code: number) {
  const order = [140, 351, 344, 345, 351, 352, 333, 337, 346].includes(vt_code)
    ? 10
    : [110].includes(vt_code)
    ? 9
    : [411, 421].includes(vt_code)
    ? 8
    : [311, 321, 322].includes(vt_code)
    ? 7
    : [412, 422, 431, 441, 521].includes(vt_code)
    ? 6
    : [120, 130, 210, 314, 315, 323, 332, 343, 534].includes(vt_code)
    ? 5
    : [
        220, 316, 413, 423, 423, 533, 531, 532, 612, 621, 631, 673, 681,
      ].includes(vt_code)
    ? 4
    : 3;
  return zIndex.label + order;
}
