import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

getCustomDemoCodesFromFile(
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
        // 启用详细的无障碍错误报告
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
              try {
                // 使用更安全的方式查找元素，避免CSS选择器语法错误
                const titleElement = container.querySelector(
                  `[id="${hasAriaLabelledBy}"]`,
                );
                if (!titleElement) {
                  console.warn(
                    `Dialog ${index + 1} 的 aria-labelledby 指向的元素不存在`,
                  );
                }
              } catch (error) {
                // 如果ID包含特殊字符，使用getElementById的替代方案
                const allElements = container.querySelectorAll('*');
                const titleElement = Array.from(allElements).find(
                  (el) => el.id === hasAriaLabelledBy,
                );
                if (!titleElement) {
                  console.warn(
                    `Dialog ${index + 1} 的 aria-labelledby 指向的元素不存在`,
                  );
                }
              }
            }

            // 检查内容描述
            const hasAriaDescribedBy = dialog.getAttribute('aria-describedby');
            if (hasAriaDescribedBy) {
              try {
                // 使用更安全的方式查找元素
                const contentElement = container.querySelector(
                  `[id="${hasAriaDescribedBy}"]`,
                );
                if (!contentElement) {
                  console.warn(
                    `Dialog ${index + 1} 的 aria-describedby 指向的元素不存在`,
                  );
                }
              } catch (error) {
                // 如果ID包含特殊字符，使用替代方案
                const allElements = container.querySelectorAll('*');
                const contentElement = Array.from(allElements).find(
                  (el) => el.id === hasAriaDescribedBy,
                );
                if (!contentElement) {
                  console.warn(
                    `Dialog ${index + 1} 的 aria-describedby 指向的元素不存在`,
                  );
                }
              }
            }
          });

          // 检查Dialog背景遮罩的ARIA属性
          const backdrops = container.querySelectorAll(
            '.bui-dialog-backdrop, .bui-modal-backdrop',
          );
          backdrops.forEach((backdrop, index) => {
            const ariaHidden = backdrop.getAttribute('aria-hidden');
            if (ariaHidden !== 'true') {
              console.warn(
                `Dialog背景遮罩 ${index + 1} 应该设置 aria-hidden="true"`,
              );
            }
          });

          // 检查Dialog内容区域的焦点管理
          const dialogContents = container.querySelectorAll(
            '.bui-dialog [tabindex="-1"], .bui-modal [tabindex="-1"]',
          );
          dialogContents.forEach((content, index) => {
            const tabIndex = content.getAttribute('tabindex');
            if (tabIndex !== '-1') {
              console.warn(
                `Dialog内容区域 ${index + 1} 应该设置 tabindex="-1" 以支持焦点管理`,
              );
            }
          });
          // 检查输入框的无障碍性（针对prompt类型）
          const inputs = container.querySelectorAll('input, select, textarea');
          inputs.forEach((input, index) => {
            const hasLabel =
              input.getAttribute('aria-label') ||
              input.getAttribute('aria-labelledby') ||
              input.getAttribute('placeholder') ||
              container.querySelector(`label[for="${input.id}"]`);
            if (!hasLabel) {
              console.warn(
                `Dialog 表单元素 ${index + 1} (${input.tagName}) 缺少标签或占位符`,
              );
            }

            // 检查是否有aria-describedby关联描述
            const hasAriaDescribedBy = input.getAttribute('aria-describedby');
            if (hasAriaDescribedBy) {
              try {
                const descElement = container.querySelector(
                  `[id="${hasAriaDescribedBy}"]`,
                );
                if (!descElement) {
                  console.warn(
                    `Dialog 表单元素 ${index + 1} 的 aria-describedby 指向的元素不存在`,
                  );
                }
              } catch (error) {
                // 如果ID包含特殊字符，使用替代方案
                const allElements = container.querySelectorAll('*');
                const descElement = Array.from(allElements).find(
                  (el) => el.id === hasAriaDescribedBy,
                );
                if (!descElement) {
                  console.warn(
                    `Dialog 表单元素 ${index + 1} 的 aria-describedby 指向的元素不存在`,
                  );
                }
              }
            }
          });
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如['basicDialogDemo']
);
