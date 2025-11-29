import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Tag 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Tag',
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
          // 检查可点击 Tag 的无障碍属性
          const clickableTags = container.querySelectorAll('[role="button"]');
          clickableTags.forEach((tag, index) => {
            // 检查是否有可访问的名称
            const hasAccessibleName =
              tag.textContent?.trim() ||
              tag.getAttribute('aria-label') ||
              tag.getAttribute('aria-labelledby') ||
              tag.getAttribute('title');

            if (!hasAccessibleName) {
              console.warn(`可点击标签 ${index + 1} 缺少可访问的名称`);
            }

            // 检查 tabindex
            const tabIndex = tag.getAttribute('tabindex');
            if (tabIndex !== '0') {
              console.warn(
                `可点击标签 ${index + 1} 应该设置 tabindex="0" 以支持键盘导航`,
              );
            }

            // 检查 role 属性
            const role = tag.getAttribute('role');
            if (role !== 'button') {
              console.warn(`可点击标签 ${index + 1} 应该设置 role="button"`);
            }
          });

          // 检查所有 Tag 组件的基础结构
          const allTags = container.querySelectorAll('.bui-tag');
          allTags.forEach((tag, index) => {
            // 检查内容是否为空
            if (!tag.textContent?.trim()) {
              console.warn(`标签 ${index + 1} 内容为空，可能影响可访问性`);
            }

            // 检查颜色对比度相关的类名（通过类名推断）
            const hasColorClass = Array.from(tag.classList).some(
              (cls) =>
                cls.includes('primary') ||
                cls.includes('success') ||
                cls.includes('warning') ||
                cls.includes('danger') ||
                cls.includes('info') ||
                cls.includes('neutral'),
            );

            if (!hasColorClass) {
              console.warn(
                `标签 ${index + 1} 可能缺少颜色样式，建议检查颜色对比度`,
              );
            }
          });
        },
        beforeAllFn: () => {
          // console.log('Tag beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Tag beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Tag afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Tag',
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
          // 检查可点击 Tag 的键盘支持
          const clickableTags = container.querySelectorAll('[role="button"]');
          clickableTags.forEach((tag, index) => {
            const tabIndex = tag.getAttribute('tabindex');
            if (tabIndex !== '0') {
              console.warn(
                `可点击标签 ${index + 1} 应该设置 tabindex="0" 以支持键盘导航`,
              );
            }

            // 检查是否有可访问的名称
            const ariaLabel = tag.getAttribute('aria-label');
            const textContent = tag.textContent?.trim();
            if (!ariaLabel && !textContent) {
              console.warn(`可点击标签 ${index + 1} 缺少可访问的名称`);
            }
          });

          // 检查普通 Tag 的语义化
          const normalTags = container.querySelectorAll(
            '.bui-tag:not([role="button"])',
          );
          normalTags.forEach((tag, index) => {
            if (!tag.textContent?.trim()) {
              console.warn(`普通标签 ${index + 1} 内容为空`);
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
  [], // 如需跳过特定的 demo，例如['basicTagDemo']
);
