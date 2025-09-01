import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

getMdDemoCodes(
  'Modal',
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
        detailedErrorReporting: true,
        customA11yChecks: (container) => {
          // 检查Modal根容器的role属性
          const modalRoots = container.querySelectorAll(
            '[role="presentation"]',
          );
          modalRoots.forEach((modalRoot, index) => {
            // 验证Modal根容器是否正确设置了presentation角色
            const role = modalRoot.getAttribute('role');
            if (role !== 'presentation') {
              console.warn(
                `Modal根容器 ${index + 1} 的role属性应该是"presentation"，当前是"${role}"`,
              );
            }
          });

          // 检查背景遮罩的ARIA属性
          const backdrops = container.querySelectorAll('.bui-modal-backdrop');
          backdrops.forEach((backdrop, index) => {
            // 检查背景遮罩是否设置了aria-hidden
            const ariaHidden = backdrop.getAttribute('aria-hidden');
            if (ariaHidden !== 'true') {
              console.warn(
                `Modal背景遮罩 ${index + 1} 应该设置 aria-hidden="true"`,
              );
            }
          });

          // 检查Modal内容区域的焦点管理
          const modalContents = container.querySelectorAll(
            '.bui-modal [tabindex="-1"]',
          );
          modalContents.forEach((content, index) => {
            // 检查Modal内容是否正确设置了tabindex="-1"以支持焦点管理
            const tabIndex = content.getAttribute('tabindex');
            if (tabIndex !== '-1') {
              console.warn(
                `Modal内容区域 ${index + 1} 应该设置 tabindex="-1" 以支持焦点管理`,
              );
            }
          });

          // 检查可交互元素的无障碍性
          const interactiveElements = container.querySelectorAll(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
          );
          interactiveElements.forEach((element, index) => {
            // 检查可交互元素是否有可访问的名称
            const hasAccessibleName =
              element.textContent?.trim() ||
              element.getAttribute('aria-label') ||
              element.getAttribute('aria-labelledby') ||
              element.getAttribute('title') ||
              element.getAttribute('alt');

            if (!hasAccessibleName) {
              console.warn(
                `Modal中的交互元素 ${index + 1} (${element.tagName}) 缺少可访问的名称`,
              );
            }

            // 检查链接是否有有效的href
            if (element.tagName.toLowerCase() === 'a') {
              const href = element.getAttribute('href');
              if (!href || href === '#') {
                console.warn(`Modal中的链接 ${index + 1} 缺少有效的href属性`);
              }
            }
          });

          // 检查表单元素的标签关联
          const formElements = container.querySelectorAll(
            'input, select, textarea',
          );
          formElements.forEach((input, index) => {
            const hasLabel =
              input.getAttribute('aria-label') ||
              input.getAttribute('aria-labelledby') ||
              input.getAttribute('placeholder') ||
              container.querySelector(`label[for="${input.id}"]`);

            if (!hasLabel) {
              console.warn(
                `Modal中的表单元素 ${index + 1} (${input.tagName}) 缺少标签或占位符`,
              );
            }

            // 检查必填字段是否有适当的标识
            if (input.hasAttribute('required')) {
              const hasRequiredIndicator =
                input.getAttribute('aria-required') === 'true' ||
                input.getAttribute('aria-label')?.includes('必填') ||
                input.getAttribute('aria-label')?.includes('required');

              if (!hasRequiredIndicator) {
                console.warn(
                  `Modal中的必填字段 ${index + 1} 建议添加 aria-required="true" 或在标签中标明必填`,
                );
              }
            }
          });
        },
      },
      finishCallback,
    );
  },
  ['demo6', 'demo5', 'demo4'], // 如需跳过特定的demo，在此数组中添加，如 ['demo1', 'demo2']
);
