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

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const args = minimist(process.argv.slice(2));
const mdFileName = args.md || 'Switch';

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
      `${componentName}`,
    );
    const mdFilePath = path.resolve(
      __dirname,
      '../../packages/bui-core/src',
      `${mdFileName}`,
    );

    const componentCode = await readFileContent(
      path.join(componentDir, `${componentName}.tsx`),
    );
    const typesCode = await readFileContent(
      path.join(componentDir, `${componentName}.types.ts`),
    );
    const styleCode = await readFileContent(
      path.join(componentDir, `${componentName}.less`),
    );
    const mdFormat = await readFileContent(
      path.join(mdFilePath, `index.zh-CN.md`),
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
          content: `你是一个专业的组件库文档编写者。请根据提供的React组件代码生成一个详细的组件markdown描述文档，markdown示例参考：${mdFormat}`,
        },
        {
          role: 'user',
          content: `请根据以下React组件代码生成markdown文档：
          组件代码：${componentCode}
          类型定义：${typesCode}
          样式代码：${styleCode}`,
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

    // 获取返回内容
    const functionCall = stream.choices[0].message.tool_calls[0];
    let markdown;

    try {
      // 解析 JSON
      const parsedArgs = JSON.parse(functionCall.function.arguments);
      markdown = parsedArgs.markdown;
    } catch (error) {
      // 如果 JSON 解析失败，直接使用返回的文本
      markdown = functionCall.function.arguments;
      if (
        typeof markdown === 'string' &&
        markdown.startsWith('{') &&
        markdown.endsWith('}')
      ) {
        // 如果是 JSON 字符串，尝试提取 markdown 内容
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
    // 打印更详细的错误信息
    if (error.response) {
      console.error('API 响应:', error.response.data);
    }
    process.exit(1);
  }
}

main();
