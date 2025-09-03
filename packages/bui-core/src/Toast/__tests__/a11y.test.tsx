import { getCustomDemoCodesFromFile, accessibilityDemoTest } from 'testing';

getCustomDemoCodesFromFile(
  'Toast',
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
