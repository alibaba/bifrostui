import bound from '../utils/bound';

describe('bound function', () => {
  it('returns the position when min and max are undefined', () => {
    expect(bound(5, undefined, undefined)).toBe(5);
  });

  it('returns min when position is less than min', () => {
    expect(bound(3, 5, undefined)).toBe(5);
  });

  it('returns max when position is greater than max', () => {
    expect(bound(10, undefined, 8)).toBe(8);
  });

  it('returns position when it is between min and max', () => {
    expect(bound(5, 3, 8)).toBe(5);
  });

  it('returns min when position equals to min', () => {
    expect(bound(3, 3, 8)).toBe(3);
  });

  it('returns max when position equals to max', () => {
    expect(bound(8, 3, 8)).toBe(8);
  });

  it('handles negative numbers appropriately', () => {
    expect(bound(-2, -5, -1)).toBe(-2);
  });
});
