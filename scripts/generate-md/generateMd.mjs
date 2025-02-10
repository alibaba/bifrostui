/**
 * 使用llm生成组件markdown文档
 * 通过--md指定参考markdown（默认参考Rating的markdown文档规范）
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const args = minimist(process.argv.slice(2));
const mdFileName = args.md || 'TabBar';

async function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`读取文件失败: ${filePath}`, error);
    throw error;
  }
}

async function main() {
  try {
    let componentName = '';
    while (!componentName) {
      componentName = await input({ message: '组件名称' });
    }

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

    const mdFormat = await readFileContent(
      path.resolve(
        __dirname,
        '../../packages/bui-core/src',
        `${mdFileName}`,
        `index.zh-CN.md`,
      ),
    );

    const spinner = ora('AI 生成markdown文档中...').start();

    const client = new OpenAI({
      apiKey: process.env.DASHSCOPE_API_KEY,
      baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    });

    const stream = await client.chat.completions.create({
      model: 'qwen-long',
      messages: [
        {
          role: 'system',
          content: `你是一个专业的组件库文档编写者。请根据提供的React组件代码生成一个详细的组件markdown描述文档，markdown示例参考：${mdFormat}`,
        },
        {
          role: 'user',
          content: `请根据以下React组件代码生成markdown文档：
          组件代码：${componentCode}，
          根据组件代码生成代码演示部分。
          类型定义：${typesCode}，
          根据类型定义生成API部分。
          样式代码：${styleCode}，
          根据样式代码生成css样式变量部分`,
        },
      ],
      tools: [
        {
          type: 'function',
          function: {
            name: 'generateMarkdown',
            description: '生成组件文档',
            parameters: {
              type: 'object',
              properties: {
                markdown: {
                  type: 'string',
                  description: '生成的markdown文档内容',
                },
              },
              required: ['markdown'],
            },
          },
        },
      ],
    });

    spinner.stop();

    const functionCall = stream.choices[0].message.tool_calls[0];
    let markdown;

    try {
      const parsedArgs = JSON.parse(functionCall.function.arguments);
      markdown = parsedArgs.markdown;
    } catch (error) {
      markdown = functionCall.function.arguments;
      if (
        typeof markdown === 'string' &&
        markdown.startsWith('{') &&
        markdown.endsWith('}')
      ) {
        try {
          const match = markdown.match(/"markdown"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          if (match) {
            markdown = match[1].replace(/\\"/g, '"').replace(/\\n/g, '\n');
          }
        } catch (e) {
          console.warn('提取 markdown 内容失败，使用原始内容');
        }
      }
    }

    if (!markdown) {
      throw new Error('未能获取到有效的 markdown 内容');
    }

    const outputPath = path.join(componentDir, 'index.zh-CN.md');
    fs.writeFileSync(outputPath, markdown);
    console.log(`Markdown文档已生成: ${outputPath}`);
  } catch (error) {
    console.error('生成文档失败:', error);
    if (error.response) {
      console.error('API 响应:', error.response.data);
    }
    process.exit(1);
  }
}

main();
