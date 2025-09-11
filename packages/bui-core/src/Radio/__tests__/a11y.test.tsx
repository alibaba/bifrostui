import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

/**
 * Radio 组件无障碍测试：
 *  基于自定义 Demo 组件的测试（新增方式）
 */

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Radio',
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
          // 验证 radio 元素存在
          const radio = container.querySelector('input[type="radio"]');
          expect(radio).not.toBeNull();
          // 验证 radio 元素有正确的类型
          if (radio) {
            const type = radio.getAttribute('type');
            expect(type).toBe('radio');
          }
          // 验证禁用状态，有正确的 aria-disabled 属性
          if (radio && radio.hasAttribute('disabled')) {
            const ariaDisabled = radio.getAttribute('aria-disabled');
            expect(ariaDisabled).toBe('true');
          }
          // 验证输入框有可访问的名称， aria-label 属性
          const ariaLabel = radio.getAttribute('aria-label');
          if (radio && ariaLabel) {
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
  [], // 如需跳过特定的 demo，例如[''basicRadioDemo']
);
