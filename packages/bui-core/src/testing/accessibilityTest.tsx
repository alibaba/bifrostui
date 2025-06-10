/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { axe, AxeResults, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

type Rules = {
  [key: string]: {
    enabled: boolean;
  };
};

type AxeOptions = {
  rules?: Rules;
  runOnly?: string[];
  resultTypes?: string[];
  selectors?: boolean;
  ancestry?: boolean;
  xpath?: boolean;
  absolutePaths?: boolean;
  iframes?: boolean;
  frameWaitTime?: number;
  pingWaitTime?: number;
};

type Options = {
  /**
   * skip test
   * @default false
   */
  skip?: boolean | string[];
  /**
   * Disable axe rule checks
   * @default []
   */
  disabledRules?: string[];
  /**
   * Component name
   */
  componentName: string;
  /**
   * Custom axe options
   */
  axeOptions?: AxeOptions;
  /**
   * Custom test cases
   */
  testCases?: Array<{
    name: string;
    props?: Record<string, any>;
  }>;
  /**
   * Test timeout in milliseconds
   * @default 10000
   */
  timeout?: number;
  beforeAllFn?: () => void;
  beforeEachFn?: () => void;
  afterEachFn?: () => void;
};

const convertRulesToAxeFormat = (rules: string[]): Rules => {
  return rules.reduce(
    (acc, rule) => ({
      ...acc,
      [rule]: { enabled: false },
    }),
    {},
  );
};

export function accessibilityTest(
  Component: React.ComponentType,
  disabledRules?: string[],
  options?: Options,
) {
  beforeAll(() => {
    options?.beforeAllFn?.();
  });

  beforeEach(() => {
    options?.beforeEachFn?.();
  });

  afterEach(() => {
    options?.afterEachFn?.();
  });

  describe(`accessibility`, () => {
    const testCases = options?.testCases || [{ name: 'default', props: {} }];

    testCases.forEach(({ name, props }) => {
      it(
        `${name} does not have any violations`,
        async () => {
          const { container } = render(<Component {...props} />);

          const rules = convertRulesToAxeFormat(disabledRules || []);
          const axeOptions = {
            rules,
            ...options?.axeOptions,
          };

          const results = await axe(container, axeOptions);
          (expect(results) as any).toHaveNoViolations();
        },
        options?.timeout || 10000,
      );
    });
  });
}

export default function accessibilityDemoTest(
  Component: React.ComponentType,
  options: Options,
) {
  if (options.skip === true) {
    describe.skip(`${options.componentName} demo a11y`, () => {
      it('skipped', () => {});
    });
    return;
  }

  describe(`${options.componentName} demo a11y`, () => {
    describe(`Test ${options.componentName} accessibility`, () => {
      accessibilityTest(Component, options.disabledRules, options);
    });
  });
}
