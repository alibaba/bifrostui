/**
 * 翻译单个md文件
 * 1. 通过 --component 指定
 * 如 node scripts/translate/translate.js --component Button 表示翻译 Button 组件下的 index.zh-CN.md 文件，并写入 index.en-US.md
 * 等价于运行 pnpm run md:trans --component Button
 * 2. 通过 --file 指定
 * 如 node scripts/translate/translate.js --file ./packages/bui-icons/src/index.zh-CN.md
 */

const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const OpenAI = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

async function translateMarkdownFile(filePath, outputFilePath) {
  try {
    const markdownContent = fs.readFileSync(filePath, 'utf-8');
    const completion = await openai.chat.completions.create({
      model: 'qwen-plus',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful translation expert. Help me translate the Chinese content in the Markdown file to English while preserving the original format.',
        },
        { role: 'user', content: `Input text: ${markdownContent}` },
      ],
    });
    const translatedText = completion.choices[0].message.content;
    fs.writeFileSync(outputFilePath, translatedText);

    console.log(`翻译成功并已保存到 ${filePath}`);
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
