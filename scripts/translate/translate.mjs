/**
 * 使用前需要在env.process中配置IDEALAB_API_KEY和IDEALAB_BASE_URL
 * @see https://aliyuque.antfin.com/tppwd/tech/zmlkl8g7bdggo6rg
 * @example node scripts/generate-md/generateMd.mjs
 * @example node scripts/translate/translate.mjs --all
 * @example node scripts/translate/translate.mjs --file ./packages/bui-icons/src/index.zh-CN.md
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'path';
import minimist from 'minimist';
import ora from 'ora';
import { input } from '@inquirer/prompts';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.IDEALAB_API_KEY,
  baseURL: process.env.IDEALAB_BASE_URL,
});

async function translateMarkdownFile(inputFilePath, outputFilePath) {
  try {
    const markdownContent = fs.readFileSync(inputFilePath, 'utf-8');
    fs.writeFileSync(outputFilePath, '');

    const completionStream = await openai.chat.completions.create({
      model: 'gpt-4o-0513',
      messages: [
        {
          role: 'system',
          content: `你是一名专业的技术文档翻译专家。请将以下 Markdown 文档从中文翻译成英文：
1. 保持所有 Markdown 语法格式不变，包括标题、列表、代码块、表格等
2. 保留所有代码示例、变量名和技术术语不翻译
3. 严格保留所有转义字符，包括但不限于：
   - 泛型类型中的转义反斜杠，如 Partial<Props\> 中的 \
   - 竖线分隔符中的转义反斜杠，如 A \| B 中的 \
   - 所有其他以反斜杠 \ 开头的转义序列
4. 翻译时使用技术文档的专业用语和表达方式
5. 保持英文表达的自然流畅，避免直译
6. 保留所有 HTML 标签和特殊标记不变
7. 数字、标点符号格式遵循英文规范`,
        },
        {
          role: 'user',
          content: `请翻译以下 Markdown 文档：\n\n${markdownContent}`,
        },
      ],
      stream: true,
    });
    for await (const chunk of completionStream) {
      if (
        chunk &&
        chunk.choices &&
        chunk.choices.length > 0 &&
        chunk.choices[0].delta.content
      ) {
        const deltaText = chunk.choices[0].delta.content;
        fs.appendFileSync(outputFilePath, deltaText);
      }
    }
    console.log(`\n翻译成功并已追加到 ${outputFilePath}`);
  } catch (error) {
    console.error('翻译过程中发生错误:', error);
  }
}

/**
 * 获取所有组件目录
 * @returns {string[]} 组件目录路径数组
 */
function getAllComponentDirectories() {
  const componentsDir = path.resolve(__dirname, '../../packages/bui-core/src');
  return fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(componentsDir, dirent.name));
}

/**
 * 翻译所有组件的文档
 */
async function translateAllComponents() {
  const componentDirs = getAllComponentDirectories();
  const spinner = ora('准备翻译所有组件文档...').start();

  let translatedCount = 0;
  let skippedCount = 0;

  for (const dir of componentDirs) {
    const inputFilePath = path.join(dir, 'index.zh-CN.md');
    const outputFilePath = path.join(dir, 'index.en-US.md');

    if (fs.existsSync(inputFilePath)) {
      spinner.text = `正在翻译 ${path.basename(dir)} 组件文档...`;
      await translateMarkdownFile(inputFilePath, outputFilePath);
      translatedCount++;
    } else {
      skippedCount++;
    }
  }

  spinner.succeed(
    `翻译完成！成功翻译 ${translatedCount} 个组件文档，跳过 ${skippedCount} 个组件（无中文文档）`,
  );
}

async function main() {
  const argv = minimist(process.argv.slice(2));
  debugger;

  // 处理 --all 参数
  if (argv.all) {
    await translateAllComponents();
    return;
  }

  // 原有逻辑
  let componentName = '';
  if (!argv.file) {
    while (!componentName) {
      componentName = await input({ message: '组件名称' });
    }
  }

  let inputFilePath;
  let outputFilePath;
  if (componentName) {
    const directory = path.resolve(
      __dirname,
      '../../packages/bui-core/src',
      `${componentName}`,
    );
    inputFilePath = path.resolve(directory, 'index.zh-CN.md');
    outputFilePath = path.join(directory, 'index.en-US.md');
  } else if (argv.file) {
    inputFilePath = path.resolve(__dirname, '../../', argv.file);
    let splitPath = inputFilePath.split('/');
    outputFilePath = path.resolve(
      inputFilePath,
      `../${splitPath[splitPath.length - 1].split('.')[0]}.en-US.md`,
    );
  }
  // 翻译文件
  await translateMarkdownFile(inputFilePath, outputFilePath);
}

main();
