import { zIndex } from '../../utils';

export default function labelOrder(annoCtg: number) {
  const order = [140, 351, 344, 345, 351, 352, 333, 337, 346].includes(annoCtg)
    ? 10
    : [110].includes(annoCtg)
    ? 9
    : [411, 421].includes(annoCtg)
    ? 8
    : [311, 321, 322].includes(annoCtg)
    ? 7
    : [412, 422, 431, 441, 521].includes(annoCtg)
    ? 6
    : [120, 130, 210, 314, 315, 323, 332, 343, 534].includes(annoCtg)
    ? 5
    : [
        220, 316, 413, 423, 423, 533, 531, 532, 612, 621, 631, 673, 681,
      ].includes(annoCtg)
    ? 4
    : 3;
  return zIndex.label + order;
}
