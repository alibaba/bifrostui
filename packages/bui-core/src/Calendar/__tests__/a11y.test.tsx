import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

getCustomDemoCodesFromFile(
  'Calendar',
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
      },
      finishCallback,
    );
  },
  [],
);
