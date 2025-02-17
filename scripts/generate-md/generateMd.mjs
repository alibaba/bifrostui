/**
 * 使用llm生成组件markdown文档, 可根据生成的md文档进行修改，减少编写成本
 * 通过--md指定参考markdown（默认参考TabBar的markdown文档规范）
 * @example node scripts/generate-md/generateMd.mjs
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'path';
import minimist from 'minimist';
import ora from 'ora';
import { input } from '@inquirer/prompts';
import { fileURLToPath } from 'url';
import { getCode, readFileContent } from './help.mjs';
import { generateSystemPrompt, generateUserPrompt } from './prompt.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const args = minimist(process.argv.slice(2));
const mdFileName = args.md || 'TabBar';

async function main() {
  try {
    let componentName = '';
    while (!componentName) {
      componentName = await input({ message: '组件名称' });
    }

    const { componentCode, typesCode, styleCode } =
      await getCode(componentName);
    const {
      componentCode: mdComponentCode,
      typesCode: mdTypesCode,
      styleCode: mdStyleCode,
    } = await getCode(mdFileName);

    const { componentCode: stackCode } = await getCode('Stack');

    const mdFormat = await readFileContent(
      path.resolve(
        __dirname,
        '../../packages/bui-core/src',
        `${mdFileName}`,
        `index.zh-CN.md`,
      ),
    );

    const componentDir = path.resolve(
      __dirname,
      '../../packages/bui-core/src',
      componentName,
    );

    const spinner = ora('AI 生成markdown文档中...').start();

    const client = new OpenAI({
      apiKey: process.env.DASHSCOPE_API_KEY,
      baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    });

    const stream = await client.chat.completions.create({
      model: 'qwen-max',
      messages: [
        {
          role: 'system',
          content: generateSystemPrompt(mdFileName),
        },
        {
          role: 'user',
          content: generateUserPrompt(
            componentName,
            mdFileName,
            mdComponentCode,
            mdTypesCode,
            mdStyleCode,
            mdFormat,
            componentCode,
            typesCode,
            styleCode,
            stackCode,
          ),
        },
      ],
    });

    spinner.stop();

    let markdown;

    markdown = stream.choices[0].message.content || '';

    if (!markdown) {
      throw new Error('未能获取到有效的 markdown 内容');
    }

    const outputPath = path.join(componentDir, 'index.zh-CN.md');
    fs.writeFileSync(outputPath, markdown);
    console.log(`Markdown文档已生成: ${outputPath}`);
  } catch (error) {
    console.error('生成文档失败:', error);
  }
}

main();
