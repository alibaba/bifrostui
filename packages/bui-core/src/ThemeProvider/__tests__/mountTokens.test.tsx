import React from 'react';

import {
  mountTokens,
  mountResponsiveTokens,
  overrideBuiltInThemes,
  rootSelector,
  breakpoints,
} from '..';

// Mock before importing the functions
vi.mock('@bifrostui/utils', () => ({
  isMini: false,
}));

let consoleSpy: jest.SpyInstance;
let isValidElement: jest.SpyInstance;
const testId = 'bui-var-bl';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = `<div class="${testId}"></div>`;
});

beforeAll(() => {
  consoleSpy = vi
    .spyOn(global.console, 'error')
    .mockImplementation((message) => {
      if (!message?.message?.includes('Could not parse CSS stylesheet')) {
        global.console.warn(message);
      }
    });

  // mock React.isValidElement
  isValidElement = vi
    .spyOn(React, 'isValidElement')
    .mockImplementation((element) => {
      return element !== null;
    });
});

afterAll(() => {
  consoleSpy.mockRestore();
  isValidElement.mockRestore();
});

describe('MountToken Functions', () => {
  test('mountTokens should not execute when isMini is true', () => {
    // This test is already covered by the global mock
    mountTokens();
    expect(document.head.innerHTML).toBe('');
  });

  test('overrideBuiltInThemes', () => {
    const tokenOptions = {
      defaultLightToken: { '--bui-color-red': '#f00' },
      defaultDarkToken: { '--bui-color-fg-default': '#fff' },
      dmLightToken: { '--bui-color-blue': 'blue' },
    };

    overrideBuiltInThemes(tokenOptions);

    const defaultLightTokenSelector = rootSelector.defaultLight.join(',');
    const defaultDarkTokenSelector = rootSelector.defaultDark.join(',');
    const dmLightTokenSelector = rootSelector.dmLight.join(',');

    expect(document.head.innerHTML).toContain(defaultLightTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-red: #f00;');

    expect(document.head.innerHTML).toContain(defaultDarkTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-fg-default: #fff;');

    expect(document.head.innerHTML).toContain(dmLightTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-blue: blue;');
  });

  test('mountResponsiveTokens with default breakpoints', () => {
    const options = {
      responsive: {
        xs: {
          '--bui-btn-border-radius': '2px',
        },
        sm: {
          '--bui-btn-border-radius': '6px',
        },
        md: {
          '--bui-btn-border-radius': '10px',
        },
        lg: {
          '--bui-btn-border-radius': '14px',
        },
        xl: {
          '--bui-btn-border-radius': '16px',
        },
      },
    };

    mountResponsiveTokens(options);

    const styleElement = document.head.querySelector('style');
    expect(styleElement).not.toBeNull();

    // check selector
    const defaultLightTokenSelector = rootSelector.defaultLight.join(',');
    expect(styleElement.textContent).toContain(defaultLightTokenSelector);

    // xs
    expect(styleElement.textContent).toContain(
      `@media (max-width: ${breakpoints.xs}) {  --bui-btn-border-radius: 2px; }`,
    );
    // sm
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.sm}) {  --bui-btn-border-radius: 6px; }`,
    );
    // md
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.md}) {  --bui-btn-border-radius: 10px; }`,
    );
    // lg
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.lg}) {  --bui-btn-border-radius: 14px; }`,
    );
    // xl
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.xl}) {  --bui-btn-border-radius: 16px; }`,
    );
  });

  test('mountResponsiveTokens with custom breakpoints', () => {
    const options = {
      responsive: {
        xs: {
          '--bui-btn-border-radius': '2px',
        },
        sm: {
          '--bui-btn-border-radius': '6px',
        },
        md: {
          '--bui-btn-border-radius': '10px',
        },
        lg: {
          '--bui-btn-border-radius': '14px',
        },
        xl: {
          '--bui-btn-border-radius': '16px',
        },
      },
      breakpoints: {
        xs: '499.98px',
        sm: '500px',
        md: '800px',
        lg: '1000px',
        xl: '1400px',
      },
    };

    mountResponsiveTokens(options);

    const styleElement = document.head.querySelector('style');
    expect(styleElement).not.toBeNull();

    // check selector
    const defaultLightTokenSelector = rootSelector.defaultLight.join(',');
    expect(styleElement.textContent).toContain(defaultLightTokenSelector);

    // xs
    expect(styleElement.textContent).toContain(
      `@media (max-width: ${options.breakpoints.xs}) {  --bui-btn-border-radius: 2px; }`,
    );
    // sm
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.sm}) {  --bui-btn-border-radius: 6px; }`,
    );
    // md
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.md}) {  --bui-btn-border-radius: 10px; }`,
    );
    // lg
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.lg}) {  --bui-btn-border-radius: 14px; }`,
    );
    // xl
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.xl}) {  --bui-btn-border-radius: 16px; }`,
    );
  });

  test('mountComponentsTokens', () => {
    const tokenOptions = {
      isRoot: false,
      token: {
        '--bui-btn-border-radius': '2px',
      },
      containerId: testId,
      container: 'test',
    };

    expect(document.body.innerHTML).toContain('<div class="bui-var-bl"></div>');

    mountTokens(tokenOptions);

    expect(document.body.innerHTML).toContain(
      '<div class="bui-var-bl"><style type="text/css">.bui-var-bl {   --bui-btn-border-radius: 2px; }</style></div>',
    );
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });
});
