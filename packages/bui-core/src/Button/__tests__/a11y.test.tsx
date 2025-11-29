import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Button 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Button',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      finishCallback,
    } = params;

    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        axeOptions: {},
        // 启用详细的无障碍错误报告（默认启用）
        detailedErrorReporting: true,
        customA11yChecks: (container) => {
          // 验证 button 元素存在
          const button = container.querySelector('button');
          expect(button).not.toBeNull();
          // 验证 button 元素有正确的类型
          if (button) {
            const type = button.getAttribute('type');
            expect(type).toBe('button');
          }
          // 验证禁用状态的按钮有正确的 aria-disabled 属性
          if (button && button.hasAttribute('disabled')) {
            const ariaDisabled = button.getAttribute('aria-disabled');
            expect(ariaDisabled).toBe('true');
          }
          // 验证按钮有可访问的名称（通过文本内容或 aria-label）
          if (button) {
            const textContent = button.textContent?.trim();
            const ariaLabel = button.getAttribute('aria-label');
            expect(textContent || ariaLabel).toBeTruthy();
          }
        },
        beforeAllFn: () => {
          // console.log('Button beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Button beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Button afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Button',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      demoTotal,
      demoFilePath,
      demoKey,
      finishCallback,
    } = params;

    // eslint-disable-next-line no-console
    console.log(`start testing custom demo: ${demoComponentName} (${demoKey})`);
    // eslint-disable-next-line no-console
    console.log(`demo file path: ${demoFilePath}`);
    // eslint-disable-next-line no-console
    console.log(`progress: ${demoComponentIndex + 1}/${demoTotal}`);
    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        axeOptions: {},
        // 启用详细的无障碍错误报告
        detailedErrorReporting: true,
        // 自定义无障碍检查
        customA11yChecks: (container) => {
          // 验证 button 元素存在
          const button = container.querySelector('button');
          expect(button).not.toBeNull();
          // 验证 button 元素有正确的类型
          if (button) {
            const type = button.getAttribute('type');
            expect(type).toBe('button');
          }
          // 验证禁用状态的按钮有正确的 aria-disabled 属性
          if (button && button.hasAttribute('disabled')) {
            const ariaDisabled = button.getAttribute('aria-disabled');
            expect(ariaDisabled).toBe('true');
          }
          // 验证按钮有可访问的名称（通过文本内容或 aria-label）
          if (button) {
            const textContent = button.textContent?.trim();
            const ariaLabel = button.getAttribute('aria-label');
            expect(textContent || ariaLabel).toBeTruthy();
          }
        },
        beforeAllFn: () => {
          // eslint-disable-next-line no-console
          console.log(`🧪 开始 ${demoComponentName} 自定义 Demo 无障碍测试...`);
        },
        beforeEachFn: () => {
          // eslint-disable-next-line no-console
          console.log(`📝 准备测试 ${demoComponentName}...`);
        },
        afterEachFn: () => {
          // eslint-disable-next-line no-console
          console.log(`✅ ${demoComponentName} 测试完成`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如[''basicButtonDemo']
);
