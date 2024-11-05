/* eslint-disable no-restricted-syntax */
/**
 * 翻译单个文件（推荐开发新组件时使用，如果只是更改现有md的内容，建议手动修改）
 * 1. 通过 --component 指定
 * 如 node scripts/translate/translate.js --component Button 表示翻译 Button 组件下的 index.zh-CN.md 文件，并写入 index.en-US.md
 * 等价于运行 pnpm run md:trans --component Button
 * 2. 通过 --file 指定
 * 如 node scripts/translate/translate.js --file packages/bui-icons/src/index.zh-CN.md
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const minimist = require('minimist');

// 百度翻译 API 配置
const APP_ID = '20241103002193096'; // 替换为你的 APP ID
const API_KEY = 'v1i7fPjDsUzTsEMMKLpu'; // 替换为你的 API 密钥
const BAIDU_TRANSLATE_API =
  'https://fanyi-api.baidu.com/api/trans/vip/translate';

// 翻译函数
async function translateText(text, from = 'zh', to = 'en') {
  const salt = Date.now();
  const sign = crypto
    .createHash('md5')
    .update(`${APP_ID}${text}${salt}${API_KEY}`)
    .digest('hex');

  const response = await axios.get(BAIDU_TRANSLATE_API, {
    params: {
      q: text,
      from,
      to,
      appid: APP_ID,
      salt,
      sign,
    },
  });

  return response.data.trans_result ? response.data.trans_result[0].dst : text;
}

// 逐行翻译 Markdown 文件，保留格式和标识符
async function translateMarkdownFile(inputFilePath, outputFilePath) {
  const lines = fs.readFileSync(inputFilePath, 'utf-8').split('\n');
  const translatedLines = [];

  let insideCodeBlock = false;

  for (const line of lines) {
    const leadingSpaces = line.match(/^\s*/)[0]; // 提取行前空格
    const trimmedLine = line.trim();

    // 检测代码块的起止符号
    if (trimmedLine.startsWith('```')) {
      insideCodeBlock = !insideCodeBlock;
      translatedLines.push(line); // 保留代码块标识符，不翻译
    } else if (insideCodeBlock) {
      // 在代码块内，保留原行
      translatedLines.push(line);
    } else if (trimmedLine.startsWith('---') && trimmedLine.endsWith('---')) {
      // 保留分隔线并处理说明行
      translatedLines.push(line); // 直接保留分隔线
    } else if (/^\s*(group|title|order|nav|name):/i.test(trimmedLine)) {
      // 对于以小写开头的说明行，保留格式
      const [key, ...rest] = trimmedLine.split(':');
      const value = rest.join(':').trim(); // 获取冒号后面的内容
      const translatedValue = await translateText(value); // 进行翻译
      translatedLines.push(
        `${leadingSpaces}${key.toLowerCase()}: ${translatedValue}`,
      ); // 保持小写及原格式
    } else if (trimmedLine.startsWith('---') || trimmedLine.startsWith('|')) {
      // 保留分隔线、表格行等不翻译
      const translatedLine =
        await translateLineWithPreservedEnglish(trimmedLine);
      translatedLines.push(`${leadingSpaces}${translatedLine}`);
    } else if (/^#+\s+/.test(trimmedLine)) {
      // 对以 #, ##, ###, #### 等开头的行进行翻译
      const headerMatch = trimmedLine.match(/^#+\s+(.*)$/);
      if (headerMatch) {
        const headerText = headerMatch[1]; // 获取标题内容
        const translatedHeader = await translateText(headerText.trim());
        const headerLevel = headerMatch[0].match(/^#+/)[0]; // 获取标题标识符
        translatedLines.push(
          `${leadingSpaces}${headerLevel} ${translatedHeader}`,
        ); // 保留标题格式
      } else {
        translatedLines.push(line); // 如果不匹配，则保留原行
      }
    } else {
      // 对于包含 `...` 的文本，分离出 ` 包裹的内容进行翻译
      const translatedLine = await translateLineWithBackticks(line);
      translatedLines.push(`${leadingSpaces}${translatedLine}`);
    }
  }

  // 将翻译结果写入新文件
  fs.writeFileSync(outputFilePath, translatedLines.join('\n'), 'utf-8');
  console.log(`${outputFilePath}翻译完成！`);
}

// 处理包含 `...` 标识符的行
async function translateLineWithBackticks(line) {
  const backtickPattern = /(`[^`]+`)(\W?)/g; // 匹配 `内容`，后跟可选标点符号
  const segments = line.split(backtickPattern);
  const translatedSegments = [];
  let isFirstSegment = true;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (segment.startsWith('`') && segment.endsWith('`')) {
      // 如果是单反引号包裹的内容，进行翻译
      const innerText = segment.slice(1, -1); // 提取反引号内的内容
      const isChinese = /[\u4e00-\u9fa5]/.test(innerText);
      if (isChinese) {
        // 只有中文内容需要翻译
        let translatedInner = await translateText(innerText);

        // 根据句子开头大写处理
        if (isFirstSegment) {
          translatedInner =
            translatedInner.charAt(0).toUpperCase() + translatedInner.slice(1);
        }

        translatedSegments.push(`\`${translatedInner}\``); // 加空格包裹
      } else {
        // 非中文内容直接保留
        translatedSegments.push(`\`${innerText}\``); // 加空格包裹
      }
    } else if (segment.trim()) {
      // 翻译非反引号包裹的部分
      const translatedSegment = await translateText(segment.trim());

      // 判断首个非反引号段落是否为句首
      const processedSegment = isFirstSegment
        ? translatedSegment.charAt(0).toUpperCase() + translatedSegment.slice(1)
        : translatedSegment.toLowerCase(); // 非首个段落为小写

      // 移除多余空格并添加到结果
      translatedSegments.push(processedSegment.replace(/\s+/g, ' '));
    }

    // 标点符号或空格处理
    if (i + 1 < segments.length && segments[i + 1].match(/^\W$/)) {
      const punctuation = segments[i + 1];
      if (punctuation === ' ' || punctuation === '\t') {
        // 如果是空格或制表符，跳过
        continue;
      }
      translatedSegments.push(punctuation); // 添加标点符号
      i++;
    }

    isFirstSegment = false;
  }

  // 处理翻译后的结果，确保英文与标点符号之间没有空格
  const result = translatedSegments.join('').trim();
  return result.replace(/ \./g, '.').replace(/ \,/g, ',').replace(/ \!/g, '!');
}

// 处理 --- 和 | 行，保持英文原状，只翻译中文
async function translateLineWithPreservedEnglish(line) {
  const parts = line.split(/([|])/); // 根据 | 分割行
  const translatedParts = [];

  for (const part of parts) {
    // 保留分隔线和空白部分
    if (part.trim().startsWith('---') || part.trim() === '') {
      translatedParts.push(part);
      continue;
    }

    // 对于每一部分进行中文检测和翻译
    const isChinese = /[\u4e00-\u9fa5]/.test(part);
    if (isChinese) {
      // 只翻译中文内容
      const translatedPart = await translateText(part.trim());
      translatedParts.push(translatedPart);
    } else {
      // 英文部分直接保留，不做任何更改
      translatedParts.push(part);
    }
  }

  return translatedParts.join('');
}

// 处理指定目录下的所有 index.zh-CN.md 文件，并将翻译结果写入index.en-US.md 文件
// 会覆盖现有的markdown
async function processMarkdownFiles(directory) {
  const files = fs.readdirSync(directory);
  files.reverse();

  for (const file of files) {
    const filePath = path.join(directory, file);

    // 如果是文件夹，递归调用
    if (fs.statSync(filePath).isDirectory()) {
      await processMarkdownFiles(filePath);
    } else if (file === 'index.zh-CN.md') {
      const inputFilePath = filePath;
      const outputFilePath = path.join(directory, 'index.en-US.md');

      // 翻译文件
      await translateMarkdownFile(inputFilePath, outputFilePath);
    }
  }
}

// 调用函数，处理 src 目录下的文件
// 谨慎操作
// processMarkdownFiles(
//   path.resolve(__dirname, '../../packages/bui-core/src'),
// ).catch((err) => console.error(err));

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
    outputFilePath = path.resolve(
      inputFilePath,
      `../${argv.file.split('/')[2].split('.')[0]}.en-US.md`,
    );
  }
  // 翻译文件
  await translateMarkdownFile(inputFilePath, outputFilePath);
}

main();
