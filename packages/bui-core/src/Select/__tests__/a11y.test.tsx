import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
} from 'testing';

/**
 * Select 组件无障碍测试
 *
 * 本文件同时支持两种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 */

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Select',
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
        timeout: 30000,
        // 启用详细的无障碍错误报告（默认启用）
        detailedErrorReporting: true,
        customA11yChecks: (container) => {
          // 检查 Select 根容器的 ARIA 属性
          const selects = container.querySelectorAll('[role="combobox"]');
          selects.forEach((select, index) => {
            // 检查是否有可访问的名称
            const hasAccessibleName =
              select.getAttribute('aria-label') ||
              select.getAttribute('aria-labelledby') ||
              select.getAttribute('placeholder');

            if (!hasAccessibleName) {
              console.warn(
                `Select ${index + 1} 缺少可访问的名称（aria-label 或 aria-labelledby）`,
              );
            }

            // 检查 aria-expanded 属性
            const ariaExpanded = select.getAttribute('aria-expanded');
            if (ariaExpanded !== 'true' && ariaExpanded !== 'false') {
              console.warn(`Select ${index + 1} 应该设置 aria-expanded 属性`);
            }

            // 检查 aria-haspopup 属性
            const ariaHaspopup = select.getAttribute('aria-haspopup');
            if (ariaHaspopup !== 'listbox') {
              console.warn(
                `Select ${index + 1} 应该设置 aria-haspopup="listbox"`,
              );
            }

            // 检查 tabindex
            const tabIndex = select.getAttribute('tabindex');
            if (tabIndex !== '0' && !select.hasAttribute('disabled')) {
              console.warn(
                `Select ${index + 1} 应该设置 tabindex="0" 以支持键盘导航`,
              );
            }
          });

          // 检查选项列表的 ARIA 属性
          const listboxes = container.querySelectorAll('[role="listbox"]');
          listboxes.forEach((listbox, index) => {
            const ariaLabel = listbox.getAttribute('aria-label');
            if (!ariaLabel) {
              console.warn(`选项列表 ${index + 1} 应该设置 aria-label 属性`);
            }
          });

          // 检查选项的 ARIA 属性
          const options = container.querySelectorAll('[role="option"]');
          options.forEach((option, index) => {
            const ariaSelected = option.getAttribute('aria-selected');
            if (ariaSelected !== 'true' && ariaSelected !== 'false') {
              console.warn(`选项 ${index + 1} 应该设置 aria-selected 属性`);
            }

            // 检查禁用选项的 aria-disabled
            if (option.classList.contains('bui-select-option-disabled')) {
              const ariaDisabled = option.getAttribute('aria-disabled');
              if (ariaDisabled !== 'true') {
                console.warn(
                  `禁用选项 ${index + 1} 应该设置 aria-disabled="true"`,
                );
              }
            }
          });
        },
        beforeAllFn: () => {
          // console.log('Select beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Select beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Select afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Select',
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
          // 检查 Select 的基础无障碍属性
          const selects = container.querySelectorAll('[role="combobox"]');
          selects.forEach((select, index) => {
            const ariaExpanded = select.getAttribute('aria-expanded');
            if (ariaExpanded !== 'true' && ariaExpanded !== 'false') {
              console.warn(`Select ${index + 1} 应该设置 aria-expanded 属性`);
            }
          });

          // 检查选项的键盘导航支持
          const options = container.querySelectorAll('[role="option"]');
          options.forEach((option, index) => {
            const tabIndex = option.getAttribute('tabindex');
            if (!option.hasAttribute('aria-disabled') && tabIndex !== '0') {
              console.warn(
                `选项 ${index + 1} 应该设置 tabindex="0" 以支持键盘导航`,
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
          console.log(`✅ ${demoComponentName} 测试完成`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如['basicSelectDemo']
);
