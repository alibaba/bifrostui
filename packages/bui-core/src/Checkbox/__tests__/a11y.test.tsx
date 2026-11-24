import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

/**
 * Checkbox 组件无障碍测试：
 *  基于自定义 Demo 组件的测试（新增方式）
 */

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Checkbox',
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
          // 验证 checkbox 元素存在
          const checkbox = container.querySelector('input[type="checkbox"]');
          expect(checkbox).not.toBeNull();
          // 验证 checkbox 元素有正确的类型
          if (checkbox) {
            const type = checkbox.getAttribute('type');
            expect(type).toBe('checkbox');
          }
          // 验证禁用状态，有正确的 aria-disabled 属性
          if (checkbox && checkbox.hasAttribute('disabled')) {
            const ariaDisabled = checkbox.getAttribute('aria-disabled');
            expect(ariaDisabled).toBe('true');
          }
          // 验证输入框有可访问的名称， aria-label 属性
          const ariaLabel = checkbox.getAttribute('aria-label');
          if (checkbox && ariaLabel) {
            expect(ariaLabel).toBeTruthy();
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
          console.log(`✅ ${demoComponentName} test completed`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如[''basicCheckboxDemo']
);
