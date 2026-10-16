import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

getCustomDemoCodesFromFile(
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
        axeOptions: {},
        // 启用详细的无障碍错误报告
        detailedErrorReporting: true,
        // 自定义无障碍检查
        customA11yChecks: (container) => {
          const modalRoots = container.querySelectorAll(
            '[role="presentation"]',
          );
          // 验证找到的Modal根容器
          modalRoots.forEach((modalRoot, index) => {
            const role = modalRoot.getAttribute('role');
            if (role !== 'presentation') {
              console.warn(
                `Modal根容器 ${index + 1} 的role属性应该是"presentation"，当前是"${role}"`,
              );
            }
          });

          // 检查背景遮罩的ARIA属性（同时检查两个位置）
          const backdrops = container.querySelectorAll('.bui-modal-backdrop');
          backdrops.forEach((backdrop, index) => {
            const ariaHidden = backdrop.getAttribute('aria-hidden');
            if (ariaHidden !== 'true') {
              console.warn(
                `Modal背景遮罩 ${index + 1} 应该设置 aria-hidden="true"`,
              );
            }
          });

          // 检查Modal内容区域的焦点管理（同时检查两个位置）
          const containerModalContents = container.querySelectorAll(
            '.bui-modal [tabindex="-1"]',
          );
          containerModalContents.forEach((content, index) => {
            const tabIndex = content.getAttribute('tabindex');
            if (tabIndex !== '-1') {
              console.warn(
                `Modal内容区域 ${index + 1} 应该设置 tabindex="-1" 以支持焦点管理`,
              );
            }
          });
        },
      },
      finishCallback,
    );
  },
  [],
);
