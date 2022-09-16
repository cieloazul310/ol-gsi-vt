export function isAnnoCode<Code extends number>(annoCode: number[]) {
  return (code: number): code is Code => annoCode.includes(code);
}
