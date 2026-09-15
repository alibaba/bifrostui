import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

getMdDemoCodes(
  'IconButton',
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
        // 自定义配置，默认无需配置
        axeOptions: {},
        customA11yChecks: (container) => {
          // 这里写你需要的自定义断言，没有特殊需求无需关注
        },
        beforeAllFn: () => {
          // 这里写你需要的自定义逻辑，没有相关需求无需关注
          console.log('IconButton beforeAllFn...');
        },
        beforeEachFn: () => {
          // 这里写你需要的自定义逻辑，没有相关需求无需关注
          console.log('IconButton beforeEachFn...');
        },
        afterEachFn: () => {
          // 这里写你需要的自定义逻辑，没有相关需求无需关注
          console.log('IconButton afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);
