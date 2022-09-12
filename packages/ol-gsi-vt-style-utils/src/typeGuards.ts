export function isNumber(num: unknown): num is number {
  return typeof num === 'number';
}

export function isString(str: unknown): str is string {
  return typeof str === 'string';
}

export function altiToString(alti: unknown): string {
  if (isNumber(alti)) return alti.toString();
  if (isString(alti)) return alti;
  throw new Error();
}

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
