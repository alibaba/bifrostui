import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Drawer 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Drawer',
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
          // 检查 Drawer 根容器的 role 属性（继承自 Modal）
          const modalRoots = container.querySelectorAll(
            '[role="presentation"]',
          );
          modalRoots.forEach((modalRoot, index) => {
            const role = modalRoot.getAttribute('role');
            if (role !== 'presentation') {
              console.warn(
                `Drawer 根容器 ${index + 1} 的 role 属性应该是 "presentation"，当前是 "${role}"`,
              );
            }
          });

          // 检查 Drawer 内容区域的 dialog 角色
          const dialogs = container.querySelectorAll('[role="dialog"]');
          dialogs.forEach((dialog, index) => {
            // 检查 aria-modal 属性
            const ariaModal = dialog.getAttribute('aria-modal');
            if (ariaModal !== 'true') {
              console.warn(
                `Drawer 对话框 ${index + 1} 应该设置 aria-modal="true"`,
              );
            }

            // 检查是否有可访问的名称
            const hasAccessibleName =
              dialog.getAttribute('aria-label') ||
              dialog.getAttribute('aria-labelledby') ||
              dialog.getAttribute('title');

            if (!hasAccessibleName) {
              console.warn(
                `Drawer 对话框 ${index + 1} 缺少可访问的名称（aria-label 或 aria-labelledby）`,
              );
            }

            // 检查 tabindex
            const tabIndex = dialog.getAttribute('tabindex');
            if (tabIndex !== '-1') {
              console.warn(
                `Drawer 对话框 ${index + 1} 应该设置 tabindex="-1" 以支持焦点管理`,
              );
            }
          });

          // 检查背景遮罩的 ARIA 属性（继承自 Modal）
          const backdrops = container.querySelectorAll('.bui-modal-backdrop');
          backdrops.forEach((backdrop, index) => {
            const ariaHidden = backdrop.getAttribute('aria-hidden');
            if (ariaHidden !== 'true') {
              console.warn(
                `Drawer 背景遮罩 ${index + 1} 应该设置 aria-hidden="true"`,
              );
            }
          });

          // 检查可交互元素的无障碍性
          const interactiveElements = container.querySelectorAll(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
          );
          interactiveElements.forEach((element, index) => {
            const hasAccessibleName =
              element.textContent?.trim() ||
              element.getAttribute('aria-label') ||
              element.getAttribute('aria-labelledby') ||
              element.getAttribute('title') ||
              element.getAttribute('alt');

            if (!hasAccessibleName) {
              console.warn(
                `Drawer 中的交互元素 ${index + 1} (${element.tagName}) 缺少可访问的名称`,
              );
            }
          });
        },
        beforeAllFn: () => {
          // console.log('Drawer beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Drawer beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Drawer afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Drawer',
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
          // 检查 Drawer 对话框的基础无障碍属性
          const dialogs = container.querySelectorAll('[role="dialog"]');
          dialogs.forEach((dialog, index) => {
            const ariaModal = dialog.getAttribute('aria-modal');
            if (ariaModal !== 'true') {
              console.warn(
                `Drawer 对话框 ${index + 1} 应该设置 aria-modal="true"`,
              );
            }

            const tabIndex = dialog.getAttribute('tabindex');
            if (tabIndex !== '-1') {
              console.warn(`Drawer 对话框 ${index + 1} 应该设置 tabindex="-1"`);
            }
          });

          // 检查 Modal 根容器的 presentation 角色
          const presentations = container.querySelectorAll(
            '[role="presentation"]',
          );
          presentations.forEach((presentation, index) => {
            const role = presentation.getAttribute('role');
            if (role !== 'presentation') {
              console.warn(
                `Drawer 根容器 ${index + 1} 应该设置 role="presentation"`,
              );
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
  [], // 如需跳过特定的 demo，例如['basicDrawerDemo']
);
