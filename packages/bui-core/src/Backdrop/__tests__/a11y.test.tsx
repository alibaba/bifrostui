import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Backdrop',
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
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如[''basicAlertDemo']
);
