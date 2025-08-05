/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { resultGroups } from 'axe-core';

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
   * Test timeout in milliseconds
   * @default 10000
   */
  timeout?: number;
  demoComponentIndex?: number;
  beforeAllFn?: () => void;
  beforeEachFn?: () => void;
  afterEachFn?: () => void;
  customA11yChecks?: (container: HTMLElement) => void;
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

function accessibilityTest(
  Component: React.ComponentType | (() => Promise<{ default: React.ComponentType }>),
  options: Options,
  disabledRules?: string[],
  finishCallback?: (...args: any[]) => void
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

  it(
    `${options.componentName} does not have any violations`,
    async () => {
      // 处理异步组件
      let ActualComponent: React.ComponentType;
      if (typeof Component === 'function') {
        try {
          const result = await (Component as any)();
          ActualComponent = result.default || result;
        } catch {
          ActualComponent = Component as React.ComponentType;
        }
      } else {
        ActualComponent = Component;
      }
      
      const { container } = render(<ActualComponent />);

      const rules = convertRulesToAxeFormat(disabledRules || []);
      const axeOptions = {
        rules,
        ...options?.axeOptions,
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
        resultTypes: ['violations', 'incomplete', 'inapplicable'] as resultGroups[],
      };

      const results = await axe(container, axeOptions);
      expect(results.violations).toHaveLength(0);
      
      if (options.customA11yChecks) {
        options.customA11yChecks(container);
      }
      finishCallback?.(options.demoComponentIndex);
    },
    options?.timeout || 15000,
  );
}

export const accessibilityDemoTest = (
  Component: React.ComponentType,
  options: Options,
  finishCallback?: () => void
) => {
  if (options.skip === true) {
    describe.skip(`${options.componentName} demo a11y`, () => {
      it('skipped', () => {});
    });
    return;
  }
  describe(`Test ${options.componentName} accessibility`, () => {
    accessibilityTest(Component, options, options.disabledRules, finishCallback);
  });
}
