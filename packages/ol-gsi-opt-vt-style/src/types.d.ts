declare module '*.svg' {
  const content: any;
  export default content;
}

export type OptVTFeatureProperties<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  vt_code: number;
  vt_lvorder?: 0 | 1 | 2 | 3 | 4;
  vt_flag17?: 0 | 1 | 2;
} & T;
