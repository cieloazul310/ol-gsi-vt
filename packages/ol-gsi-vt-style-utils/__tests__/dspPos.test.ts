import { dspPosToAlignBaseline, dspPosToOffset, dspPosToPosition } from '../src/dspPos';

describe('dspPosToAlignBaseline', () => {
  it('default', () => {
    expect(dspPosToAlignBaseline(undefined)).toStrictEqual([
      undefined,
      undefined,
    ]);
    expect(dspPosToAlignBaseline('LT')).toMatchObject(['left', 'top']);
    expect(dspPosToAlignBaseline('CC')).toMatchObject(['center', 'middle']);
    expect(dspPosToAlignBaseline('RC')).toMatchObject(['right', 'middle']);
    expect(dspPosToAlignBaseline('LB')).toMatchObject(['left', 'bottom']);
  });
  it('tate', () => {
    expect(dspPosToAlignBaseline(undefined)).toMatchObject([
      undefined,
      undefined,
    ]);
    expect(dspPosToAlignBaseline('LT', 2)).toMatchObject(['right', 'top']);
    expect(dspPosToAlignBaseline('CC', 2)).toMatchObject(['center', 'middle']);
    expect(dspPosToAlignBaseline('RC', 2)).toMatchObject(['center', 'bottom']);
    expect(dspPosToAlignBaseline('LB', 2)).toMatchObject(['left', 'top']);
  });
});

describe('dspPosToOffset', () => {
  it('default', () => {
    const radius = 10;
    expect(dspPosToOffset(undefined, undefined)).toMatchObject([0, 0]);
    expect(dspPosToOffset('left', 'top', radius)).toMatchObject([12, 10]);
    expect(dspPosToOffset('center', 'middle', radius)).toMatchObject([0, 0]);
    expect(dspPosToOffset('right', 'middle', radius)).toMatchObject([-12, 0]);
    expect(dspPosToOffset('left', 'bottom', radius)).toMatchObject([12, -10]);
  });
});

describe('dspPosToPosition', () => {
  it('default', () => {
    expect(dspPosToPosition('RT', 1,  10)).toMatchObject({
      textAlign: 'right',
      textBaseline: 'top',
      offsetX: -12,
      offsetY: 10,
    });
  });
  it('tate', () => {
    expect(dspPosToPosition('RT', 2, 10)).toMatchObject({
      textAlign: 'right',
      textBaseline: 'bottom',
      offsetX: -12,
      offsetY: -10,
    });
  });
});
