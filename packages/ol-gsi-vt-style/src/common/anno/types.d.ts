export type LabelCommonProperties<Code extends number = number> = {
  code: Code;
  text?: string;
  dspPos?: string;
  arrng?: 1 | 2;
};
