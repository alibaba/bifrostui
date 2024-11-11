import {
  mountTokens,
  mountResponsiveTokens,
  overrideBuiltInThemes,
  rootSelector,
  breakpoints,
} from '..';

let consoleSpy: jest.SpyInstance;

jest.mock('@bifrostui/utils', () => ({
  isMini: false,
}));

beforeEach(() => {
  document.head.innerHTML = '';
});

beforeAll(() => {
  consoleSpy = jest
    .spyOn(global.console, 'error')
    .mockImplementation((message) => {
      if (!message?.message?.includes('Could not parse CSS stylesheet')) {
        global.console.warn(message);
      }
    });
});

afterAll(() => consoleSpy.mockRestore());

describe('MountToken Functions', () => {
  test('mountTokens should not execute when isMini is true', () => {
    jest.mock('@bifrostui/utils', () => ({
      isMini: true,
    }));

    mountTokens();
    expect(document.head.innerHTML).toBe('');
  });

  test('overrideBuiltInThemes', () => {
    const tokenOptions = {
      defaultLightToken: { '--bui-color-red': '#f00' },
      defaultDarkToken: { '--bui-color-fg-default': '#fff' },
      dmLightToken: { '--bui-color-blue': 'blue' },
      dmDarkToken: { '--bui-color-powder-start': 'red' },
    };

    overrideBuiltInThemes(tokenOptions);

    const defaultLightTokenSelector = rootSelector.defaultLight.join(',');
    const defaultDarkTokenSelector = rootSelector.defaultDark.join(',');
    const dmLightTokenSelector = rootSelector.dmLight.join(',');
    const dmtDarkTokenSelector = rootSelector.dmDark.join(',');

    expect(document.head.innerHTML).toContain(defaultLightTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-red: #f00;');

    expect(document.head.innerHTML).toContain(defaultDarkTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-fg-default: #fff;');

    expect(document.head.innerHTML).toContain(dmLightTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-blue: blue;');

    expect(document.head.innerHTML).toContain(dmtDarkTokenSelector);
    expect(document.head.innerHTML).toContain('--bui-color-powder-start: red;');
  });

  test('mountResponsiveTokens with default breakpoints', () => {
    const options = {
      responsive: {
        xs: {
          '--bui-button-border-radius': '2px',
        },
        sm: {
          '--bui-button-border-radius': '6px',
        },
        md: {
          '--bui-button-border-radius': '10px',
        },
        lg: {
          '--bui-button-border-radius': '14px',
        },
        xl: {
          '--bui-button-border-radius': '16px',
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
      `@media (max-width: ${breakpoints.xs}) {  --bui-button-border-radius: 2px; }`,
    );
    // sm
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.sm}) {  --bui-button-border-radius: 6px; }`,
    );
    // md
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.md}) {  --bui-button-border-radius: 10px; }`,
    );
    // lg
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.lg}) {  --bui-button-border-radius: 14px; }`,
    );
    // xl
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${breakpoints.xl}) {  --bui-button-border-radius: 16px; }`,
    );
  });

  test('mountResponsiveTokens with custom breakpoints', () => {
    const options = {
      responsive: {
        xs: {
          '--bui-button-border-radius': '2px',
        },
        sm: {
          '--bui-button-border-radius': '6px',
        },
        md: {
          '--bui-button-border-radius': '10px',
        },
        lg: {
          '--bui-button-border-radius': '14px',
        },
        xl: {
          '--bui-button-border-radius': '16px',
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
      `@media (max-width: ${options.breakpoints.xs}) {  --bui-button-border-radius: 2px; }`,
    );
    // sm
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.sm}) {  --bui-button-border-radius: 6px; }`,
    );
    // md
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.md}) {  --bui-button-border-radius: 10px; }`,
    );
    // lg
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.lg}) {  --bui-button-border-radius: 14px; }`,
    );
    // xl
    expect(styleElement.textContent).toContain(
      `@media (min-width: ${options.breakpoints.xl}) {  --bui-button-border-radius: 16px; }`,
    );
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });
});
