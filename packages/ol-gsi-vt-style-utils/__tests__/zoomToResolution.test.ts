import zoomToResolution from '../src/zoomToResolution';

// https://learn.microsoft.com/ja-jp/azure/azure-maps/zoom-levels-and-tile-grid?tabs=csharp
describe('zoom to resolution', () => {
  it('z12', () => {
    expect(zoomToResolution(12)).toBeCloseTo(38.219, 2);
  });
  it('z10', () => {
    expect(zoomToResolution(10)).toBeCloseTo(152.87, 2);
  });
  it('z14', () => {
    expect(zoomToResolution(14)).toBeCloseTo(9.555, 2);
  });
});
