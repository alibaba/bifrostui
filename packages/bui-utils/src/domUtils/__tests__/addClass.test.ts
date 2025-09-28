import { addClass } from '../addClass';

describe('addClass', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should add class to element with classList', () => {
    // Mock classList support
    Object.defineProperty(element, 'classList', {
      value: {
        add: jest.fn(),
        contains: jest.fn().mockReturnValue(false),
      },
      writable: true,
    });

    addClass(element, 'test-class');
    expect(element.classList.add).toHaveBeenCalledWith('test-class');
  });

  test('should add class to element without classList support', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'existing-class';
    addClass(element, 'new-class');
    expect(element.className).toBe('existing-class new-class');
  });

  test('should not add duplicate class to element without classList support', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'existing-class';
    addClass(element, 'existing-class');
    expect(element.className).toBe('existing-class');
  });

  test('should handle SVG elements', () => {
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );

    // Mock classList support for SVG
    Object.defineProperty(svgElement, 'classList', {
      value: {
        add: jest.fn(),
        contains: jest.fn().mockReturnValue(false),
      },
      writable: true,
    });

    addClass(svgElement, 'svg-class');
    expect(svgElement.classList.add).toHaveBeenCalledWith('svg-class');
  });

  test('should handle SVG elements without classList', () => {
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );

    // Remove classList to simulate older browsers
    Object.defineProperty(svgElement, 'classList', {
      value: undefined,
      writable: true,
    });

    // Mock baseVal for SVG elements
    Object.defineProperty(svgElement, 'className', {
      value: {
        baseVal: 'existing-svg-class',
        toString: () => 'existing-svg-class',
      },
      writable: true,
    });

    addClass(svgElement, 'new-svg-class');
    expect(svgElement.getAttribute('class')).toBe(
      'existing-svg-class new-svg-class',
    );
  });
});
