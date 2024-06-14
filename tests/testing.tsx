import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import path from 'path';
import { glob } from 'glob';
import fs from 'fs';
import ReactTestRenderer from 'react-test-renderer';
import { formatMarkdown } from '../scripts/mini-program-site/utils';

// re-export everything
export * from '@testing-library/react';
export {
  act as invoke,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks';

export { default as userEvent } from '@testing-library/user-event';

// override render method
const getTargetElement = (testInfo, result, attr) => {
  return testInfo.getTargetElement
    ? testInfo.getTargetElement(result, attr)
    : (result.firstElementChild as HTMLElement);
};
export const defaultTests = {
  'component-renders': (testInfo) => {
    it(`renders (component-renders)`, () => {
      try {
        const { requiredProps, Component, renderOptions } = testInfo;
        expect(() =>
          render(<Component {...requiredProps} />, renderOptions),
        ).not.toThrow();
      } catch (e) {
        throw new Error('render 异常');
      }
    });
  },
  'component-has-displayname': (testInfo) => {
    const { Component } = testInfo;
    it('show has displayName', () => {
      try {
        const { displayName } = Component;
        expect(displayName).toMatch(
          new RegExp(`^(Customized|Styled)?${testInfo.displayName}(Base)?$`),
        );
      } catch (e) {
        throw new Error('displayName 设置异常');
      }
    });
  },
  'component-has-root-ref': (testInfo) => {
    const { Component, requiredProps, renderOptions, className } = testInfo;

    it('should has root ref', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Component ref={ref} {...requiredProps} />, renderOptions);

      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(document.querySelector(`.${className}`)).toBe(ref.current);
    });
  },
  'component-handles-classNames': (testInfo) => {
    const { Component, requiredProps, renderOptions } = testInfo;
    it('can set classNames in root element', () => {
      const { container } = render(
        <Component className="testClassName" {...requiredProps} />,
        renderOptions,
      );
      const targetElement = getTargetElement(testInfo, container, 'className');
      expect(targetElement).toHaveClass('testClassName');
    });
  },
  'component-has-default-className': (testInfo) => {
    const { Component, className, requiredProps, renderOptions } = testInfo;
    it('show has default className', () => {
      const { container } = render(
        <Component {...requiredProps} />,
        renderOptions,
      );
      const targetElement = getTargetElement(testInfo, container, 'className');
      expect(targetElement).toHaveClass(className);
    });
  },
  'component-handles-style': (testInfo) => {
    const { Component, requiredProps, renderOptions } = testInfo;
    it('can set style in root element', () => {
      const { container } = render(
        <Component style={{ background: 'red' }} {...requiredProps} />,
        renderOptions,
      );
      const targetElement = getTargetElement(testInfo, container, 'style');
      expect(targetElement).toHaveStyle('background: red');
    });
  },
};
export const isConformant = (testInfo) => {
  const { skip = [] } = testInfo;
  for (const test of Object.keys(defaultTests)?.filter(
    (item) => skip?.indexOf(item) === -1,
  )) {
    defaultTests[test](testInfo);
  }
};

export const snapshotTest = async (componentName) => {
  const filePath = path.join(
    __dirname,
    `../packages/bui-core/src/${componentName}/*.md`,
  );
  const files = glob.sync(filePath);

  files.forEach((file, fileIndex) => {
    const mdFile = formatMarkdown(file);
    for (const [index, item] of mdFile.codeModules.entries()) {
      fs.writeFileSync(
        `./tests/snapshot.${componentName}${index}.tsx`,
        item.code,
      );
    }
    const snapshot = (index) => {
      return new Promise((resolve) => {
        import(`./snapshot.${componentName}${index}`)
          .then((component) => {
            const Component = component.default;
            const renderer = ReactTestRenderer.create(<Component />).toJSON();
            expect(renderer).toMatchSnapshot();
            fs.unlinkSync(`./tests/snapshot.${componentName}${index}.tsx`);
            resolve(true);
          })
          .catch((err) => {
            console.log(err, 'err');
            fs.unlinkSync(`./tests/snapshot.${componentName}${index}.tsx`);
            resolve(true);
          });
      });
    };
    it(`${componentName} demo snapshot ${fileIndex}`, async () => {
      for (const [index, item] of mdFile.codeModules.entries()) {
        await snapshot(index);
      }
    });
  });
};
