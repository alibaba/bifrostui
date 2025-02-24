/**
 * 使用LLM翻译md文件
 * 也通过 --file 指定翻译特定的markdown文件
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
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

async function translateMarkdownFile(inputFilePath, outputFilePath) {
  try {
    const markdownContent = fs.readFileSync(inputFilePath, 'utf-8');
    fs.writeFileSync(outputFilePath, '');

    const spinner = ora('AI 翻译markdown文档中...').start();
    const completionStream = await openai.chat.completions.create({
      model: 'qwen-max',
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
    spinner.stop();
  } catch (error) {
    console.error('翻译过程中发生错误:', error);
  }
}

async function main() {
  let componentName = '';
  while (!componentName) {
    componentName = await input({ message: '组件名称' });
  }

  const argv = minimist(process.argv.slice(2));

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
