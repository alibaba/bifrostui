import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

getMdDemoCodes(
  'Tabs',
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
          // 检查tabs组件
          const buiTabs = container.querySelector('.bui-tabs');
          const leftMask = buiTabs.querySelector('.bui-tabs-mask-left');
          const rightMask = buiTabs.querySelector('.bui-tabs-mask-right');
          // 只有当遮罩层存在时才检查（遮罩层仅在可滚动时渲染）
          if (leftMask && leftMask.getAttribute('aria-hidden') !== 'true') {
            console.warn(`Tabs左侧遮罩层 应该设置 aria-hidden="true"`);
          }

          if (rightMask && rightMask.getAttribute('aria-hidden') !== 'true') {
            console.warn(`Tabs右侧遮罩层 应该设置 aria-hidden="true"`);
          }

          const tabsList = buiTabs.querySelector('[role="tablist"]');
          if (tabsList.getAttribute('aria-orientation') !== 'horizontal') {
            console.warn(`Tabs应该设置 aria-orientation="horizontal"`);
          }

          const tabsIndicator = tabsList.querySelector('.bui-tabs-indicator');
          if (tabsIndicator.getAttribute('aria-hidden') !== 'true') {
            console.warn(`Tabs指示器 应该设置 aria-hidden="true"`);
          }

          const tabs = tabsList.querySelectorAll('[role="tab"]');
          tabs.forEach((tab) => {
            if (tab.classList.contains('bui-tab-active')) {
              if (tab.getAttribute('aria-selected') !== 'true') {
                console.warn(`Tabs选中项 应该设置 aria-selected="true"`);
              }
            }

            if (!tab.classList.contains('bui-tab-active')) {
              if (tab.getAttribute('aria-selected') !== 'false') {
                console.warn(`Tabs非选中项 应该设置 aria-selected="false"`);
              }
            }

            if (tab.classList.contains('bui-tab-disabled')) {
              if (tab.getAttribute('aria-disabled') !== 'true') {
                console.warn(`Tabs禁用项 应该设置 aria-disabled="true"`);
              }
              if (tab.getAttribute('tabindex') !== '-1') {
                console.warn(`Tabs禁用项 应该设置 tabindex="-1"`);
              }
            }
          });

          const tabPanels = buiTabs.querySelectorAll('.bui-tabpanel');
          tabPanels.forEach((tabPanel) => {
            if (tabPanel.getAttribute('role') !== 'tabpanel') {
              console.log(`Tabs面板 应该设置 role="tabpanel"`);
            }
            if (tabPanel.classList.contains('bui-tabpanel-active')) {
              if (tabPanel.hasAttribute('hidden')) {
                console.log(`Tabs选中项对应的面板 不应该设置 hidden 属性`);
              }
            }
            if (tabPanel.classList.contains('bui-tabpanel-inactive')) {
              if (!tabPanel.hasAttribute('hidden')) {
                console.log(`Tabs未选中项对应的面板 应该设置 hidden 属性`);
              }
            }
          });
        },
      },
      finishCallback,
    );
  },
  [],
);
