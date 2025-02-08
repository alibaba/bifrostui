/**
 * 使用LLM翻译md文件
 * 1. 通过 --component 指定
 * 如 node scripts/translate/translate.mjs --component Button 表示翻译 Button 组件下的 index.zh-CN.md 文件，并写入 index.en-US.md
 * 等价于运行 pnpm run md:trans --component Button
 * 2. 通过 --file 指定
 * 如 node scripts/translate/translate.mjs --file ./packages/bui-icons/src/index.zh-CN.md
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'path';
import minimist from 'minimist';
import ora from 'ora';
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
          content:
            'You are a helpful translation expert. Help me translate the Chinese content in the Markdown file to English while preserving the original format.',
        },
        { role: 'user', content: `Input text: ${markdownContent}` },
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
    console.log(`翻译成功并已追加到 ${outputFilePath}`);
    spinner.stop();
  } catch (error) {
    console.error('翻译过程中发生错误:', error);
  }
}

async function main() {
  const argv = minimist(process.argv.slice(2));
  let inputFilePath;
  let outputFilePath;
  if (argv.component) {
    const directory = path.resolve(
      __dirname,
      '../../packages/bui-core/src',
      `${argv.component}`,
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
