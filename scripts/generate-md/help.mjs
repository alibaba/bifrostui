import fs from 'node:fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { fileURLToPath } from 'url';

export async function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`读取文件失败: ${filePath}`, error);
    throw error;
  }
}

export async function getCode(componentName) {
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
