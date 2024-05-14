import convertHexToRGBA from '../hex2rgba';

describe('convertHexToRGBA', () => {
  test('should convert a 3-digit hex code to RGBA', () => {
    const hexCode = '#abc';
    const expectedRGBA = 'rgba(170,187,204,1)';
    expect(convertHexToRGBA(hexCode)).toBe(expectedRGBA);
  });

  test('should convert a 6-digit hex code to RGBA', () => {
    const hexCode = '#336699';
    const expectedRGBA = 'rgba(51,102,153,1)';
    expect(convertHexToRGBA(hexCode)).toBe(expectedRGBA);
  });

  test('should convert a 3-digit hex code with opacity to RGBA', () => {
    const hexCode = '#abc';
    const opacity = 0.5;
    const expectedRGBA = 'rgba(170,187,204,0.5)';
    expect(convertHexToRGBA(hexCode, opacity)).toBe(expectedRGBA);
  });

  test('should convert a 6-digit hex code with opacity to RGBA', () => {
    const hexCode = '#336699';
    const opacity = 0.75;
    const expectedRGBA = 'rgba(51,102,153,0.75)';
    expect(convertHexToRGBA(hexCode, opacity)).toBe(expectedRGBA);
  });

  test('should handle hex code without leading "#" symbol', () => {
    const hexCode = 'abc';
    const expectedRGBA = 'rgba(170,187,204,1)';
    expect(convertHexToRGBA(hexCode)).toBe(expectedRGBA);
  });

  test('should handle opacity value as whole number', () => {
    const hexCode = '#336699';
    const opacity = 50;
    const expectedRGBA = 'rgba(51,102,153,0.5)';
    expect(convertHexToRGBA(hexCode, opacity)).toBe(expectedRGBA);
  });

  test('should handle opacity value greater than 1 and convert it to decimal', () => {
    const hexCode = '#336699';
    const opacity = 200;
    const expectedRGBA = 'rgba(51,102,153,200)';
    expect(convertHexToRGBA(hexCode, opacity)).toBe(expectedRGBA);
  });
});
