import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * TextArea 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'TextArea',
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
          // 验证 textarea 元素存在
          const textarea = container.querySelector('textarea');
          expect(textarea).not.toBeNull();
          // 验证 aria-label 属性（如果存在）
          if (textarea) {
            const ariaLabel = textarea.getAttribute('aria-label');
            if (ariaLabel !== null) {
              expect(ariaLabel).toBeTruthy();
            }
            // 验证 aria-required 属性（如果存在）
            const ariaRequired = textarea.getAttribute('aria-required');
            if (ariaRequired !== null) {
              expect(['true', 'false']).toContain(ariaRequired);
            }
            // 验证 aria-readonly 属性（如果存在）
            const ariaReadonly = textarea.getAttribute('aria-readonly');
            if (ariaReadonly !== null) {
              expect(['true', 'false']).toContain(ariaReadonly);
            }
          }
        },
        beforeAllFn: () => {
          // console.log('TextArea beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('TextArea beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('TextArea afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'TextArea',
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
          // 验证 textarea 元素存在
          const textarea = container.querySelector('textarea');
          expect(textarea).not.toBeNull();
          // 验证 aria-label 属性（如果存在）
          if (textarea) {
            const ariaLabel = textarea.getAttribute('aria-label');
            if (ariaLabel !== null) {
              expect(ariaLabel).toBeTruthy();
            }
            // 验证 aria-required 属性（如果存在）
            const ariaRequired = textarea.getAttribute('aria-required');
            if (ariaRequired !== null) {
              expect(['true', 'false']).toContain(ariaRequired);
            }
            // 验证 aria-readonly 属性（如果存在）
            const ariaReadonly = textarea.getAttribute('aria-readonly');
            if (ariaReadonly !== null) {
              expect(['true', 'false']).toContain(ariaReadonly);
            }
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
  [], // 如需跳过特定的 demo，例如[''basicTextAreaDemo']
);
