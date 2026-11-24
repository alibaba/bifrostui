/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import * as React from 'react';
import path from 'node:path';
import { glob } from 'glob';
import fs from 'node:fs';
import { formatMarkdown } from '../scripts/mini-program-site/utils';

// re-export everything
export * from '@testing-library/react';
export {
  act as invoke,
  renderHook,
  type RenderHookOptions,
  type RenderHookResult,
} from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';
export { accessibilityDemoTest } from './accessibilityTest';

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
  const tests = Object.keys(defaultTests).filter(
    (item) => skip.indexOf(item) === -1,
  );
  tests.forEach((test) => {
    defaultTests[test](testInfo);
  });
};

export const snapshotTest = async (componentName) => {
  const filePath = path.join(
    __dirname,
    `../packages/bui-core/src/${componentName}/*.zh-CN.md`,
  );
  const files = glob.sync(filePath);
  // Per-component temp dir avoids parallel snapshot tests racing on shared files
  const tempDir = path.join(__dirname, '.temp-snapshots', componentName);

  // Ensure temp directory exists
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  files.forEach((file, fileIndex) => {
    const mdFile = formatMarkdown(file);
    mdFile.codeModules.forEach((item, index) => {
      fs.writeFileSync(
        path.join(tempDir, `snapshot.${componentName}${index}.tsx`),
        item.code,
      );
    });
    const snapshot = (index) => {
      return new Promise((resolve, reject) => {
        try {
          // 使用动态 import，但需要确保路径是绝对路径
          const snapshotPath = path.resolve(
            tempDir,
            `snapshot.${componentName}${index}.tsx`,
          );
          import(snapshotPath)
            .then((component) => {
              const Component = component.default;
              const { container, unmount } = render(<Component />);
              expect(container).toMatchSnapshot();
              unmount();
              fs.unlinkSync(snapshotPath);
              resolve(true);
            })
            .catch((err) => {
              try {
                fs.unlinkSync(snapshotPath);
              } catch (unlinkErr) {
                // ignore
              }
              reject(err);
            });
        } catch (err) {
          reject(err);
        }
      });
    };
    it(`${componentName} demo snapshot ${fileIndex}`, async () => {
      // Execute snapshots sequentially to ensure deterministic order
      for (let index = 0; index < mdFile.codeModules.length; index += 1) {
        // eslint-disable-next-line no-await-in-loop
        await snapshot(index);
      }
    }, 30000);
  });
};

export const getMdDemoCodes = (
  componentName = '',
  callback = (...ags: any[]) => {},
  skips = [],
) => {
  if (!componentName) throw Error('componentName is required');
  const filePath = path.join(
    __dirname,
    `../packages/bui-core/src/${componentName}/*.zh-CN.md`,
  );
  const files = glob.sync(filePath);
  // 若果filePath没有
  if (!files.length) throw Error('componentName is not exist');
  files.forEach((file, fileIndex) => {
    const mdFile = formatMarkdown(file);
    // Use a fixed temp directory in workspace root (excluded from Nx)
    const tempDemoPath = path.join(__dirname, '.temp-demos', componentName);
    if (fs.existsSync(tempDemoPath)) {
      // 如果存在，则删除文件夹
      fs.rmSync(tempDemoPath, { recursive: true, force: true });
    }
    fs.mkdirSync(tempDemoPath, { recursive: true });

    mdFile.codeModules.forEach((item, index) => {
      if (!item.code) return;
      // 在文件夹下创建一个tsx文件，将item.code写入
      const createFilePath = path.join(tempDemoPath, `md_demo_${index}.tsx`);
      fs.writeFileSync(createFilePath, item.code);
    });
    // 去读取tempDemos文件夹下的所有tsx文件
    let demoFiles = glob.sync(`${tempDemoPath}/*.tsx`);
    // 过滤掉skip中的文件
    if (skips.length) {
      demoFiles = demoFiles.filter((item) => {
        return item && !skips.some((item2) => item.includes(item2));
      });
    }

    demoFiles.forEach((item, index) => {
      // 取出文件名字取出后缀作为componentDemoName
      const componentDemoName = `${componentName}_${path.basename(item).replace('.tsx', '')}`;

      // 同步创建测试用例，但异步加载组件
      callback({
        demoComponent: () => {
          // 使用动态 import，但需要确保路径是绝对路径
          const absolutePath = path.resolve(item);
          return import(absolutePath).then((demo) => demo.default);
        },
        demoComponentName: componentDemoName,
        demoComponentIndex: index,
        demoTotal: demoFiles.length,
        finishCallback: (finishIndex = 0) => {
          // eslint-disable-next-line no-console
          console.log('finishCallback running.......', finishIndex);
          if (finishIndex === demoFiles.length - 1) {
            // Delete temp directory
            try {
              fs.rmSync(tempDemoPath, { recursive: true, force: true });
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error(
                `Failed to clean up temp directory ${tempDemoPath}:`,
                err,
              );
            }
          }
        },
      });
    });
  });
};

// 支持单个文件中多个 demo 的测试函数
export const getCustomDemoCodesFromFile = (
  componentName = '',
  callback = (...args: any[]) => {},
  skips = [],
) => {
  if (!componentName) throw Error('componentName is required');
  const cusDemoPath = path.join(
    __dirname,
    `../packages/bui-core/src/${componentName}/__tests__/fixtures`,
  );

  // 构建自定义 demo 文件的完整路径
  const fullDemoPath = path.resolve(cusDemoPath);

  // 检查路径是否存在
  if (!fs.existsSync(fullDemoPath)) {
    throw Error(`Custom demo path does not exist: ${fullDemoPath}`);
  }

  // 直接读取固定的文件名 A11yDemos.tsx
  const demoFilePath = path.join(fullDemoPath, 'A11yDemos.tsx');

  // 检查文件是否存在
  if (!fs.existsSync(demoFilePath)) {
    // eslint-disable-next-line no-console
    console.warn(`Custom demo file not found: ${demoFilePath}`);
    return;
  }

  // 先同步导入文件，然后为每个 demo 创建测试用例
  const absolutePath = path.resolve(demoFilePath);

  // 使用同步的方式读取文件内容，然后解析出所有的 demo
  try {
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');

    // 简单的解析逻辑：查找 export const 和 export default
    const namedExports = [];
    const defaultExport = [];

    // 查找命名导出
    const namedExportRegex = /export\s+const\s+(\w+)\s*=/g;
    let match = namedExportRegex.exec(fileContent);
    while (match !== null) {
      namedExports.push(match[1]);
      match = namedExportRegex.exec(fileContent);
    }
    // 查找默认导出中的属性
    const defaultExportRegex = /export\s+default\s*\{([^}]+)\}/s;
    const defaultMatch = defaultExportRegex.exec(fileContent);
    if (defaultMatch) {
      const props = defaultMatch[1].split(',').map((prop) => prop.trim());
      props.forEach((prop) => {
        const cleanProp = prop.replace(/\s+/g, '');
        if (cleanProp && !cleanProp.includes(':')) {
          defaultExport.push(cleanProp);
        }
      });
    }
    // 确定要测试的 demos
    let demosToTest = [];
    if (defaultExport.length > 0) {
      // 使用默认导出中的属性
      demosToTest = defaultExport.map((key, index) => ({
        key,
        index,
        name: `${componentName}_customDemo_${key}`,
      }));
    } else if (namedExports.length > 0) {
      // 使用命名导出
      demosToTest = namedExports.map((key, index) => ({
        key,
        index,
        name: `${componentName}_customDemo_${key}`,
      }));
    }
    // 过滤掉 skip 中的 demo
    if (skips.length) {
      demosToTest = demosToTest.filter((demoInfo) => {
        return !skips.some((skipPattern) =>
          typeof skipPattern === 'string'
            ? demoInfo.key.includes(skipPattern)
            : demoInfo.key === skipPattern,
        );
      });
    }
    // 为每个 demo 创建测试用例
    demosToTest.forEach((demoInfo, demoIndex) => {
      callback({
        demoComponent: () => {
          return import(absolutePath).then((demo) => {
            if (
              demo.default &&
              typeof demo.default === 'object' &&
              demo.default !== null
            ) {
              // 从默认导出对象中获取特定的 demo
              return demo.default[demoInfo.key];
            }
            if (demo[demoInfo.key]) {
              // 从命名导出中获取特定的 demo
              return demo[demoInfo.key];
            }
            throw new Error(
              `Demo ${demoInfo.key} not found in ${demoFilePath}`,
            );
          });
        },
        demoComponentName: demoInfo.name,
        demoComponentIndex: demoIndex,
        demoTotal: demosToTest.length,
        demoFilePath,
        demoKey: demoInfo.key,
        finishCallback: (finishIndex = 0) => {
          // eslint-disable-next-line no-console
          console.log(
            `Custom demo ${demoInfo.key} finishCallback running.......`,
            finishIndex,
          );
          if (finishIndex === demosToTest.length - 1) {
            // eslint-disable-next-line no-console
            console.log(`All custom demos from ${componentName} completed`);
          }
        },
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Failed to parse custom demo file ${demoFilePath}:`, error);
  }
};
