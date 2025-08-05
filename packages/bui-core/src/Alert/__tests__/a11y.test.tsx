import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

getMdDemoCodes(
  'Alert',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      finishCallback,
    } = params;
    // console.log('Alert getMdDemoCodes:', demoComponent, demoComponentName, demoComponentIndex, finishCallback);
    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        axeOptions: {},
        customA11yChecks: (container) => {
          // 这里写你需要的特定断言
          // expect(container.querySelector('[role="alert"]')).not.toBeNull();
        },
        beforeAllFn: () => {
          // console.log('Alert beforeAllFn...');
        },
        beforeEachFn: () => {
          // console.log('Alert beforeEachFn...');
        },
        afterEachFn: () => {
          // console.log('Alert afterEachFn...');
        },
      },
      finishCallback,
    );
  },
  [],
);
