import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Countdown 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Countdown',
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
          // 验证 countdown 元素存在
          const countdown = container.querySelector('.bui-countdown');
          expect(countdown).not.toBeNull();
          // 验证 role 属性
          if (countdown) {
            const role = countdown.getAttribute('role');
            expect(role).toBe('timer');
          }
          // 验证 aria-label 属性
          const ariaLabel = countdown?.getAttribute('aria-label');
          if (ariaLabel !== null) {
            expect(ariaLabel).toBeTruthy();
          }
          // 验证 aria-labelledby 属性（如果存在）
          const ariaLabelledby = countdown?.getAttribute('aria-labelledby');
          if (ariaLabelledby !== null) {
            expect(ariaLabelledby).toBeTruthy();
          }
          // 验证 aria-describedby 属性（如果存在）
          const ariaDescribedby = countdown?.getAttribute('aria-describedby');
          if (ariaDescribedby !== null) {
            expect(ariaDescribedby).toBeTruthy();
          }
          // 验证屏幕阅读器友好的文本存在（仅在使用默认渲染时检查）
          const srOnlyText = container.querySelector('.bui-countdown-sr-only');
          // 如果存在sr-only元素，验证其属性
          if (srOnlyText) {
            const ariaLive = srOnlyText.getAttribute('aria-live');
            const ariaAtomic = srOnlyText.getAttribute('aria-atomic');
            expect(ariaLive).toBe('polite');
            expect(ariaAtomic).toBe('true');
          }
        },
        beforeAllFn: () => {
          // console.log('Countdown beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Countdown beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Countdown afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Countdown',
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
          // 验证 countdown 元素存在
          const countdown = container.querySelector('.bui-countdown');
          expect(countdown).not.toBeNull();
          // 验证 role 属性
          if (countdown) {
            const role = countdown.getAttribute('role');
            expect(role).toBe('timer');
          }
          // 验证 aria-label 属性
          const ariaLabel = countdown?.getAttribute('aria-label');
          if (ariaLabel !== null) {
            expect(ariaLabel).toBeTruthy();
          }
          // 验证 aria-labelledby 属性（如果存在）
          const ariaLabelledby = countdown?.getAttribute('aria-labelledby');
          if (ariaLabelledby !== null) {
            expect(ariaLabelledby).toBeTruthy();
          }
          // 验证 aria-describedby 属性（如果存在）
          const ariaDescribedby = countdown?.getAttribute('aria-describedby');
          if (ariaDescribedby !== null) {
            expect(ariaDescribedby).toBeTruthy();
          }
          // 验证屏幕阅读器友好的文本存在（仅在使用默认渲染时检查）
          const srOnlyText = container.querySelector('.bui-countdown-sr-only');
          // 如果存在sr-only元素，验证其属性
          if (srOnlyText) {
            const ariaLive = srOnlyText.getAttribute('aria-live');
            const ariaAtomic = srOnlyText.getAttribute('aria-atomic');
            expect(ariaLive).toBe('polite');
            expect(ariaAtomic).toBe('true');
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
  [], // 如需跳过特定的 demo，例如[''basicCountdownDemo']
);
