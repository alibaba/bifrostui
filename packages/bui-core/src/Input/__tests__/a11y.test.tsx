import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

/**
 * Input 组件无障碍测试：
 *  基于自定义 Demo 组件的测试（新增方式）
 */

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Input',
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
    console.log(`开始测试自定义 Demo: ${demoComponentName} (${demoKey})`);
    // eslint-disable-next-line no-console
    console.log(`Demo 文件路径: ${demoFilePath}`);
    // eslint-disable-next-line no-console
    console.log(`当前进度: ${demoComponentIndex + 1}/${demoTotal}`);
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
          // 验证 input 元素存在
          const input = container.querySelector('input');
          expect(input).not.toBeNull();
          // 验证 input 元素有正确的类型
          if (input) {
            const type = input.getAttribute('type');
            expect(type).toBe('text');
          }
          // 验证禁用状态，有正确的 aria-disabled 属性
          if (input && input.hasAttribute('disabled')) {
            const ariaDisabled = input.getAttribute('aria-disabled');
            expect(ariaDisabled).toBe('true');
          }
          // 验证占位内容，有正确的 aria-placeholder 属性
          if (input && input.hasAttribute('placeholder')) {
            const placeholder = input.getAttribute('placeholder');
            const ariaPlaceholder = input.getAttribute('aria-placeholder');
            expect(placeholder).toEqual(ariaPlaceholder);
          }
          // 验证输入框有可访问的名称， aria-label 属性
          const ariaLabel = input.getAttribute('aria-label');
          if (input && ariaLabel) {
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
          console.log(`✅ ${demoComponentName} 测试完成`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如[''basicInputDemo']
);
