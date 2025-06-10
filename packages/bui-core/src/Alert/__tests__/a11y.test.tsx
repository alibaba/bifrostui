import React from 'react';
import accessibilityDemoTest from '../../testing/accessibilityTest';
import Alert from '../Alert';

accessibilityDemoTest(Alert, {
  componentName: 'Alert',
  timeout: 15000,
  testCases: [
    {
      name: 'default alert',
      props: {
        children: 'This is a default alert',
      },
    },
    {
      name: 'success alert',
      props: {
        color: 'success',
        children: 'This is a success alert',
      },
    },
    {
      name: 'error alert',
      props: {
        color: 'danger',
        children: 'This is an error alert',
      },
    },
    {
      name: 'alert with description',
      props: {
        children: (
          <>
            <div>Alert with description</div>
            <div>This is a detailed description</div>
          </>
        ),
      },
    },
    {
      name: 'alert with close button',
      props: {
        children: 'Alert with close button',
        onClose: () => {
          console.log('onClose....');
        },
      },
    },
    {
      name: 'alert with marquee',
      props: {
        children: 'This is a marquee alert message that should be accessible',
        marquee: true,
      },
    },
    {
      name: 'alert with custom action',
      props: {
        children: 'Alert with custom action',
        action: <button type="button">Custom Action</button>,
      },
    },
    {
      name: 'alert with icon',
      props: {
        children: 'Alert with icon',
        icon: <span>Icon</span>,
      },
    },
  ],
  axeOptions: {
    runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
    resultTypes: ['violations', 'incomplete', 'inapplicable'],
  },
});
