import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Image 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Image',
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
          // 检查图片的 alt 属性
          const images = container.querySelectorAll('img');
          images.forEach((img, index) => {
            const alt = img.getAttribute('alt');
            if (alt === null) {
              console.warn(`图片 ${index + 1} 缺少 alt 属性`);
            }
          });

          // 检查装饰性元素是否正确隐藏
          const decorativeElements = container.querySelectorAll(
            '[aria-hidden="true"]',
          );
          decorativeElements.forEach((element, index) => {
            const ariaHidden = element.getAttribute('aria-hidden');
            if (ariaHidden !== 'true') {
              console.warn(
                `装饰性元素 ${index + 1} 应该设置 aria-hidden="true"`,
              );
            }
          });
        },
        beforeAllFn: () => {
          // console.log('Image beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Image beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Image afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Image',
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
          // 检查图片的 alt 属性
          const images = container.querySelectorAll('img');
          images.forEach((img, index) => {
            const alt = img.getAttribute('alt');
            if (alt === null) {
              console.warn(`图片 ${index + 1} 缺少 alt 属性`);
            }
          });
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
  [],
);
