import fs from 'node:fs';
import path from 'path';
import { input } from '@inquirer/prompts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 常量配置
export const CONFIG = {
  DEFAULT_MD_FILE: 'TabBar',
  BASE_PATH: '../../packages/bui-core/src',
  MD_FILE_NAME: 'index.zh-CN.md',
};

export async function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`读取文件失败: ${filePath}`, error);
    throw error;
  }
}

async function getCode(componentName) {
  const componentDir = path.resolve(
    __dirname,
    '../../packages/bui-core/src',
    componentName,
  );

  const tsxFiles = [];
  const typesFiles = [];
  const styleFiles = [];

  const filesInDir = fs
    .readdirSync(componentDir)
    .filter(
      (file) =>
        file.endsWith('.tsx') ||
        file.endsWith('.types.ts') ||
        file.endsWith('.less'),
    );

  for (const file of filesInDir) {
    const filePath = path.join(componentDir, file);

    if (file.endsWith('.tsx')) {
      tsxFiles.push(
        `${file}\n\n---\n\n${await readFileContent(filePath)}\n\n---\n\n`,
      );
    } else if (file.endsWith('.types.ts')) {
      typesFiles.push(
        `${file}\n\n---\n\n${await readFileContent(filePath)}\n\n---\n\n`,
      );
    } else if (file.endsWith('.less')) {
      styleFiles.push(
        `${file}\n\n---\n\n${await readFileContent(filePath)}\n\n---\n\n`,
      );
    }
  }

  const componentCode = tsxFiles.join('');
  const typesCode = typesFiles.join('');
  const styleCode = styleFiles.join('');
  return { componentCode, typesCode, styleCode };
}

// 获取所有必要的代码
export const getAllCodes = async (componentName, mdFileName) => {
  try {
    const [targetCodes, referenceCodes, stackCode, mdFormat] =
      await Promise.all([
        getCode(componentName),
        getCode(mdFileName),
        getCode('Stack'),
        readFileContent(
          path.resolve(
            __dirname,
            CONFIG.BASE_PATH,
            mdFileName,
            CONFIG.MD_FILE_NAME,
          ),
        ),
      ]);

    return {
      targetCodes,
      referenceCodes,
      stackCode: stackCode.componentCode,
      mdFormat,
    };
  } catch (error) {
    throw new Error(`获取代码失败: ${error.message}`);
  }
};

// 获取组件名称
export const getComponentName = async () => {
  let componentName = '';
  while (!componentName) {
    componentName = await input({ message: '组件名称' });
  }
  return componentName;
};

export const saveMarkdown = (componentName, markdown) => {
  const componentDir = path.resolve(__dirname, CONFIG.BASE_PATH, componentName);
  const outputPath = path.join(componentDir, 'index.zh-CN.md');

  if (!fs.existsSync(outputPath)) {
    console.log(`正在生成${componentName} 的Markdown文档`);
    fs.writeFileSync(outputPath, markdown);
  } else {
    console.log(`正在覆盖${componentName} Markdown的API和样式变量部分`);
    const existingContent = fs.readFileSync(outputPath, 'utf-8');
    const apiStart = existingContent.indexOf('# API');
    const styleVarsStart = existingContent.indexOf('# 样式变量');

    let newContent;
    if (apiStart !== -1 || styleVarsStart !== -1) {
      const beforeAPI =
        apiStart !== -1
          ? existingContent.substring(0, apiStart)
          : existingContent;
      const apiAndStyleVars = markdown.substring(
        markdown.indexOf('# API') !== -1
          ? markdown.indexOf('# API')
          : markdown.indexOf('# 样式变量'),
      );
      newContent = beforeAPI + apiAndStyleVars;
    } else {
      newContent = markdown;
    }

    fs.writeFileSync(outputPath, newContent);
  }

  return outputPath;
};
