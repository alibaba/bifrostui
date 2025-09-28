import { removeClass } from '../removeClass';

describe('removeClass', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should remove class from element with classList', () => {
    // Mock classList support
    element.className = 'class1 class2 class3';
    Object.defineProperty(element, 'classList', {
      value: {
        remove: jest.fn(),
      },
      writable: true,
    });

    removeClass(element, 'class2');
    expect(element.classList.remove).toHaveBeenCalledWith('class2');
  });

  test('should remove class from element without classList support', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'class1 class2 class3';
    removeClass(element, 'class2');
    expect(element.className).toBe('class1 class3');
  });

  test('should handle removing non-existent class', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'class1 class3';
    removeClass(element, 'class2');
    expect(element.className).toBe('class1 class3');
  });

  test('should handle removing the only class', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'class1';
    removeClass(element, 'class1');
    expect(element.className).toBe('');
  });

  test('should handle removing first class', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'class1 class2 class3';
    removeClass(element, 'class1');
    expect(element.className).toBe('class2 class3');
  });

  test('should handle removing last class', () => {
    // Remove classList to simulate older browsers
    Object.defineProperty(element, 'classList', {
      value: undefined,
      writable: true,
    });

    element.className = 'class1 class2 class3';
    removeClass(element, 'class3');
    expect(element.className).toBe('class1 class2');
  });

  test('should handle SVG elements', () => {
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );

    // Mock classList support for SVG
    svgElement.setAttribute('class', 'class1 class2 class3');
    Object.defineProperty(svgElement, 'classList', {
      value: {
        remove: jest.fn(),
      },
      writable: true,
    });

    removeClass(svgElement, 'class2');
    expect(svgElement.classList.remove).toHaveBeenCalledWith('class2');
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
        baseVal: 'class1 class2 class3',
        toString: () => 'class1 class2 class3',
      },
      writable: true,
    });

    removeClass(svgElement, 'class2');
    expect(svgElement.getAttribute('class')).toBe('class1 class3');
  });
});
