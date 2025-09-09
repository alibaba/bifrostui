import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Badge 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Badge',
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
          // Badge 特定的无障碍检查
          const badgeElements = container.querySelectorAll('[role="status"]');

          // 检查数字 Badge 是否有正确的 aria-label
          badgeElements.forEach((badge) => {
            const ariaLabel = badge.getAttribute('aria-label');
            if (ariaLabel) {
              expect(ariaLabel).toMatch(
                /^\d+(条通知|条消息)|通知：.+|有新通知|无通知$/,
              );
            }
          });

          // 检查装饰性 Badge 是否正确设置了 aria-hidden
          const decorativeBadges = container.querySelectorAll(
            '[role="presentation"]',
          );
          decorativeBadges.forEach((badge) => {
            expect(badge).toHaveAttribute('aria-hidden', 'true');
          });
        },
        beforeAllFn: () => {
          // console.log('Badge beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Badge beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Badge afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Badge',
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
          // Badge 组件特定的无障碍检查
          const badgeElements = container.querySelectorAll('.bui-badge');

          badgeElements.forEach((badgeContainer) => {
            const badgeContent = badgeContainer.querySelector('[role]');

            if (badgeContent) {
              const role = badgeContent.getAttribute('role');
              const ariaLabel = badgeContent.getAttribute('aria-label');
              const ariaHidden = badgeContent.getAttribute('aria-hidden');

              // 检查角色设置
              if (role) {
                expect(['status', 'img', 'presentation']).toContain(role);
              }

              // 如果是装饰性元素，应该有 aria-hidden
              if (role === 'presentation') {
                expect(ariaHidden).toBe('true');
              }

              // 如果有 aria-label，应该是有意义的文本
              if (ariaLabel && role !== 'presentation') {
                expect(ariaLabel.trim()).not.toBe('');
              }
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
          console.log(`✅ ${demoComponentName} 测试完成`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如['basicBadgeDemo']
);
