import path from 'path';
import fse from 'fs-extra';
import getAllComponents from '../utils/getAllComponents.mjs';
import { formatMarkdown } from '../utils/formatMarkdown.mjs';

const targetDir = path.resolve(
  import.meta.dirname,
  '../../docs/components/theme-designer/canvas-demos',
);

const generateThemeDemo = async () => {
  const components = await getAllComponents();
  let entryList = '';
  for (const component of components) {
    const { path: componentPath } = component;
    const mdPath = path.join(componentPath, 'index.zh-CN.md');
    const mdFile = formatMarkdown(mdPath);
    const { theme, codeModules } = mdFile ?? {};
    const filePath = `${targetDir}/${theme.enName}Demo.tsx`;
    const fileContent = codeModules[0].code;
    fse.writeFileSync(filePath, fileContent, 'utf8');
    const demoName = `${theme.enName}Demo`;
    entryList += `export { default as ${demoName} } from './${demoName}';
`;
  }
  fse.writeFileSync(`${targetDir}/index.ts`, entryList, 'utf8');
};

generateThemeDemo();
