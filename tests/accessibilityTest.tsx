/* eslint-disable */
/**
 * 无障碍测试工具
 * 
 * 这个模块提供了改进的无障碍测试功能，包括：
 * 
 * 1. 详细的无障碍错误报告
 * 2. 具体的修复建议
 * 3. 可配置的错误报告级别
 * 
 * 使用示例：
 * 
 * ```typescript
 * import { accessibilityDemoTest } from 'testing';
 * 
 * accessibilityDemoTest(
 *   MyComponent,
 *   {
 *     componentName: 'MyComponent',
 *     // 启用详细的无障碍错误报告（默认启用）
 *     detailedErrorReporting: true,
 *     // 禁用特定的无障碍规则
 *     disabledRules: ['color-contrast'],
 *     // 自定义 axe 配置
 *     axeOptions: {
 *       runOnly: ['wcag2a', 'wcag2aa']
 *     }
 *   }
 * );
 * ```
 * 
 * 错误报告包含：
 * - 🔍 无障碍问题标识
 * - 📝 问题描述
 * - 💡 帮助信息
 * - 🔗 详细文档链接
 * - 📍 问题元素位置
 * - 🛠️ 修复建议
 * 
 * 支持的配置选项：
 * - detailedErrorReporting: 是否启用详细错误报告（默认 true）
 * - disabledRules: 禁用的无障碍规则列表
 * - axeOptions: 自定义 axe 配置
 * - timeout: 测试超时时间
 * - customA11yChecks: 自定义无障碍检查函数
 */
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
  /**
   * Enable detailed accessibility error reporting
   * @default true
   */
  detailedErrorReporting?: boolean;
  demoComponentIndex?: number;
  beforeAllFn?: () => void;
  beforeEachFn?: () => void;
  afterEachFn?: () => void;
  customA11yChecks?: (container: HTMLElement) => void;
  /**
   * Callback function called when test finishes
   */
  finishCallback?: (index?: number) => void;
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

// 获取修复建议的辅助函数
const getFixSuggestions = (violationId: string) => {
  const suggestions: { [key: string]: string[] } = {
    'button-name': [
      '✅ 添加 aria-label 属性: <button aria-label="关闭">',
      '✅ 添加 title 属性: <button title="关闭">',
      '✅ 添加可见文本: <button>关闭</button>',
      '✅ 使用 aria-labelledby 引用标签: <button aria-labelledby="label-id">',
      '✅ 如果按钮仅用于装饰，添加 role="presentation"'
    ],
    'color-contrast': [
      '✅ 增加文本与背景的对比度',
      '✅ 使用更深的文本颜色',
      '✅ 使用更浅的背景颜色',
      '✅ 检查 WCAG 2.1 AA 标准（对比度至少 4.5:1）'
    ],
    'image-alt': [
      '✅ 添加 alt 属性: <img alt="描述性文本">',
      '✅ 如果图片是装饰性的，使用 alt=""',
      '✅ 如果图片包含重要信息，提供详细的 alt 描述'
    ],
    'label': [
      '✅ 为表单控件添加 <label> 元素',
      '✅ 使用 aria-label 属性',
      '✅ 使用 aria-labelledby 属性'
    ],
    'heading-order': [
      '✅ 确保标题层级正确（h1 > h2 > h3...）',
      '✅ 不要跳过标题层级',
      '✅ 每个页面应该只有一个 h1 标题'
    ],
    'link-name': [
      '✅ 添加 aria-label 属性描述链接目的',
      '✅ 确保链接文本有意义',
      '✅ 使用 title 属性提供额外信息'
    ],
    'aria-hidden-focus': [
      '✅ 移除 aria-hidden 属性或使元素不可聚焦',
      '✅ 使用 tabindex="-1" 移除聚焦能力',
      '✅ 重新考虑元素的可访问性设计'
    ],
    'focus-order-semantics': [
      '✅ 使用语义化 HTML 元素 (button, input, a)',
      '✅ 确保焦点顺序逻辑合理',
      '✅ 添加适当的 ARIA 属性'
    ]
  };
  
  return suggestions[violationId] || [
    '✅ 查看详细文档了解具体修复方法',
    '✅ 使用屏幕阅读器测试组件',
    '✅ 确保键盘导航正常工作'
  ];
};

// 格式化无障碍违规信息的辅助函数
const formatViolation = (violation: any) => {
  const { id, description, help, helpUrl, nodes } = violation;
  
  let formattedMessage = `\n\n🔍 无障碍问题: ${id}\n`;
  formattedMessage += `📝 描述: ${description}\n`;
  formattedMessage += `💡 帮助信息: ${help}\n`;
  formattedMessage += `🔗 详细文档: ${helpUrl}\n`;
  
  if (nodes && nodes.length > 0) {
    formattedMessage += `\n📍 问题元素:\n`;
    nodes.forEach((node: any, index: number) => {
      formattedMessage += `  ${index + 1}. 选择器: ${node.target.join(' > ')}\n`;
      if (node.failureSummary) {
        formattedMessage += `     失败原因: ${node.failureSummary}\n`;
      }
      if (node.html) {
        formattedMessage += `     HTML: ${node.html}\n`;
      }
    });
  }
  
  // 添加修复建议
  const suggestions = getFixSuggestions(id);
  formattedMessage += `\n🛠️  修复建议:\n`;
  suggestions.forEach(suggestion => {
    formattedMessage += `  ${suggestion}\n`;
  });
  
  return formattedMessage;
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
      
      // 检查是否有无障碍违规
      if (results.violations.length > 0) {
        const detailedReporting = options?.detailedErrorReporting !== false; // 默认为 true
        
        if (detailedReporting) {
          let errorMessage = `\n🚨 发现 ${results.violations.length} 个无障碍问题:\n`;
          
          results.violations.forEach((violation, index) => {
            errorMessage += formatViolation(violation);
            if (index < results.violations.length - 1) {
              errorMessage += '\n' + '─'.repeat(50) + '\n';
            }
          });
          
          throw new Error(errorMessage);
        } else {
          // 使用简单的错误信息
          expect(results.violations).toHaveLength(0);
        }
      }
      
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
  
  // 支持跳过特定的demo索引
  if (Array.isArray(options.skip) && options.demoComponentIndex !== undefined) {
    const shouldSkip = options.skip.some(skipPattern => 
      typeof skipPattern === 'string' 
        ? options.componentName.includes(skipPattern)
        : skipPattern === options.demoComponentIndex
    );
    
    if (shouldSkip) {
      describe.skip(`${options.componentName} demo a11y (skipped)`, () => {
        it('skipped', () => {});
      });
      return;
    }
  }
  
  describe(`Test ${options.componentName} accessibility`, () => {
    accessibilityTest(Component, options, options.disabledRules, finishCallback);
  });
}
