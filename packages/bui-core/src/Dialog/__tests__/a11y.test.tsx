import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

getMdDemoCodes(
  'Dialog',
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
          // 检查Dialog容器的ARIA属性
          const dialogElements = container.querySelectorAll(
            '[role="dialog"], [role="alertdialog"]',
          );
          dialogElements.forEach((dialog, index) => {
            // 检查是否有aria-modal属性
            const hasAriaModal = dialog.getAttribute('aria-modal') === 'true';
            if (!hasAriaModal) {
              console.warn(`Dialog ${index + 1} 缺少 aria-modal="true" 属性`);
            }

            // 检查是否有aria-labelledby或aria-label
            const hasAriaLabelledBy = dialog.getAttribute('aria-labelledby');
            const hasAriaLabel = dialog.getAttribute('aria-label');
            if (!hasAriaLabelledBy && !hasAriaLabel) {
              console.warn(
                `Dialog ${index + 1} 缺少 aria-labelledby 或 aria-label 属性`,
              );
            }

            // 检查标题元素是否存在且有正确的ID
            if (hasAriaLabelledBy) {
              const titleElement = container.querySelector(
                `#${hasAriaLabelledBy}`,
              );
              if (!titleElement) {
                console.warn(
                  `Dialog ${index + 1} 的 aria-labelledby 指向的元素不存在`,
                );
              }
            }

            // 检查内容描述
            const hasAriaDescribedBy = dialog.getAttribute('aria-describedby');
            if (hasAriaDescribedBy) {
              const contentElement = container.querySelector(
                `#${hasAriaDescribedBy}`,
              );
              if (!contentElement) {
                console.warn(
                  `Dialog ${index + 1} 的 aria-describedby 指向的元素不存在`,
                );
              }
            }
          });

          // 检查按钮的可访问性
          const buttons = container.querySelectorAll('button');
          buttons.forEach((button, index) => {
            const hasAccessibleName =
              button.textContent?.trim() ||
              button.getAttribute('aria-label') ||
              button.getAttribute('title');
            if (!hasAccessibleName) {
              console.warn(`Dialog 按钮 ${index + 1} 缺少可访问的名称`);
            }
          });

          // 检查输入框的无障碍性（针对prompt类型）
          const inputs = container.querySelectorAll('input');
          inputs.forEach((input, index) => {
            const hasLabel =
              input.getAttribute('aria-label') ||
              input.getAttribute('aria-labelledby') ||
              input.getAttribute('placeholder') ||
              container.querySelector(`label[for="${input.id}"]`);
            if (!hasLabel) {
              console.warn(`Dialog 输入框 ${index + 1} 缺少标签或占位符`);
            }

            // 检查是否有aria-describedby关联描述
            const hasAriaDescribedBy = input.getAttribute('aria-describedby');
            if (hasAriaDescribedBy) {
              const descElement = container.querySelector(
                `#${hasAriaDescribedBy}`,
              );
              if (!descElement) {
                console.warn(
                  `Dialog 输入框 ${index + 1} 的 aria-describedby 指向的元素不存在`,
                );
              }
            }
          });

          // 检查焦点管理
          const focusableElements = container.querySelectorAll(
            'button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          if (focusableElements.length > 0) {
            // 检查是否有元素设置了autofocus
            const autoFocusElements = container.querySelectorAll('[autofocus]');
            if (autoFocusElements.length === 0) {
              // 对于Dialog，通常应该有一个元素获得初始焦点
              console.info('Dialog 建议设置初始焦点元素以提升用户体验');
            }
          }
        },
      },
      finishCallback,
    );
  },
  [],
);
