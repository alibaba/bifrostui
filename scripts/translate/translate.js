/* eslint-disable no-restricted-syntax */
/**
 * 翻译单个文件（推荐开发新组件时使用，如果只是更改现有md的内容，建议手动修改）
 * 1. 通过 --component 指定
 * 如 node scripts/translate/translate.js --component Button 表示翻译 Button 组件下的 index.zh-CN.md 文件，并写入 index.en-US.md
 * 等价于运行 pnpm run md:trans --component Button
 * 2. 通过 --file 指定
 * 如 node scripts/translate/translate.js --file ./packages/bui-icons/src/index.zh-CN.md
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
/**
 * 翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} from - 源语言代码（默认自动检测）
 * @param {string} to - 目标语言代码（默认英文 'en'）
 * @returns {Promise<string>} - 翻译后的文本
 */
async function translateText(text, from = 'auto', to = 'en') {
  const salt = Date.now();
  const sign = crypto
    .createHash('md5')
    .update(`${APP_ID}${text}${salt}${API_KEY}`)
    .digest('hex');
  try {
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
    // 检查翻译结果
    if (
      response.data &&
      response.data.trans_result &&
      response.data.trans_result.length > 0
    ) {
      const translatedText = response.data.trans_result[0].dst;
      console.log(`翻译 "${text}" -> "${translatedText}"`); // 添加日志
      return translatedText;
    } else {
      console.warn(`未获得有效的翻译结果: ${text}`);
      return text;
    }
  } catch (error) {
    console.error(`翻译错误: ${error}`);
    return text;
  }
}

// 优化后的函数：整体翻译并去除反引号
async function translateLineSimplified(line) {
  // 先翻译整个句子
  const translated = await translateText(line);
  // 然后去除反引号，替换为空格
  const cleaned = translated.replace(/`/g, '');
  return cleaned;
}

// 优化后的 translateTableLine 函数
async function translateTableLine(line) {
  // 移除行首和行尾的管道符（如果存在）并保留左右空格
  const trimmedLine = line.trim().replace(/^(\|)/, '').replace(/(\|)$/, '');

  // 按管道符分割单元格，并保留前后的空格
  const cells = trimmedLine.split('|').map((cell) => cell.trim());

  // 遍历每个单元格，检测是否包含中文并进行翻译
  const translatedCells = await Promise.all(
    cells.map(async (cell, index) => {
      if (containsChinese(cell)) {
        // 使用更明确的中文检测函数
        // 处理包含反引号的内容，避免翻译代码片段
        const translatedCell = await translateCellContent(cell);
        console.log(
          `翻译表格单元格 [${index}]: "${cell}" -> "${translatedCell}"`,
        ); // 添加日志
        return translatedCell;
      } else {
        // 不包含中文，保持原样
        return cell;
      }
    }),
  );

  // 重新组合表格行，保持原有的表格格式，不添加多余的空格
  return `|${translatedCells.join('|')}|`;
}

// 检测字符串中是否包含中文字符
function containsChinese(text) {
  return /[\u4e00-\u9fa5]/.test(text);
}

// 翻译单元格内容，保留反引号中的代码片段
async function translateCellContent(cell) {
  // 匹配反引号中的内容
  const codeRegex = /`([^`]+)`/g;
  let match;
  const fragments = [];
  let lastIndex = 0;
  while ((match = codeRegex.exec(cell)) !== null) {
    const [fullMatch, codeContent] = match;
    const indexMatch = match.index;
    // 翻译代码片段前的文本
    if (lastIndex < indexMatch) {
      const textToTranslate = cell.substring(lastIndex, indexMatch).trim();
      if (textToTranslate) {
        const translatedText = await translateText(textToTranslate);
        fragments.push(translatedText);
      }
    }
    // 保留代码片段
    fragments.push(fullMatch);
    lastIndex = indexMatch + fullMatch.length;
  }
  // 翻译代码片段后的文本
  if (lastIndex < cell.length) {
    const textToTranslate = cell.substring(lastIndex).trim();
    if (textToTranslate) {
      const translatedText = await translateText(textToTranslate);
      fragments.push(translatedText);
    }
  }
  // 重新组合翻译后的单元格内容
  const finalCell = fragments.join(' ').replace(/\s+/g, ' ').trim();
  return finalCell;
}

// 逐行翻译 Markdown 文件，保留格式和标识符
/**
 * 翻译 Markdown 文件中的中文为英文
 * @param {string} inputFilePath - 输入文件路径
 * @param {string} outputFilePath - 输出文件路径
 */
async function translateMarkdownFile(inputFilePath, outputFilePath) {
  const lines = fs.readFileSync(inputFilePath, 'utf-8').split('\n');
  const translatedLines = [];
  let insideCodeBlock = false;
  let insideFrontMatter = false; // 标记是否在 front matter 中
  for (const line of lines) {
    const leadingSpacesMatch = line.match(/^\s*/);
    const leadingSpaces = leadingSpacesMatch ? leadingSpacesMatch[0] : '';
    const trimmedLine = line.trim();

    // 检测代码块的起止符号
    if (trimmedLine.startsWith('```')) {
      insideCodeBlock = !insideCodeBlock;
      translatedLines.push(line); // 保留代码块标识符，不翻译
      continue;
    }

    // 检测 front matter 的起止符号
    if (trimmedLine.startsWith('---')) {
      insideFrontMatter = !insideFrontMatter;
      translatedLines.push(line); // 直接保留分隔线
      continue;
    }
    if (insideCodeBlock) {
      // 在代码块内，保留原行
      translatedLines.push(line);
    } else if (insideFrontMatter) {
      // 处理 front matter 内的键值对
      const frontMatterMatch = trimmedLine.match(/^(\w+):\s*(.+)$/);
      if (frontMatterMatch) {
        const [, key, value] = frontMatterMatch;
        const isNumeric = /^-?\d+(\.\d+)?$/.test(value); // 检查是否为数字
        let translatedValue = value;
        if (!isNumeric) {
          translatedValue = await translateText(value); // 进行翻译
        }
        translatedLines.push(
          `${leadingSpaces}${key.toLowerCase()}: ${translatedValue}`,
        );
      } else {
        // 其他行直接保留
        translatedLines.push(line);
      }
    } else if (isTableSeparatorLine(line)) {
      // 处理表格分隔行，保留原样
      translatedLines.push(line);
    } else if (isTableHeaderLine(line) || isTableRowLine(line)) {
      // 处理表格头部或表格行
      const translatedLine = await translateTableLine(line);
      translatedLines.push(`${leadingSpaces}${translatedLine}`);
    } else if (/^#+\s+/.test(trimmedLine)) {
      // 对以 #, ##, ###, #### 等开头的行进行翻译
      const headerMatch = trimmedLine.match(/^(#+)\s+(.*)$/);
      if (headerMatch) {
        const [, headerLevel, headerText] = headerMatch;
        const translatedHeader = await translateText(headerText);
        translatedLines.push(
          `${leadingSpaces}${headerLevel} ${translatedHeader}`,
        );
      } else {
        translatedLines.push(line); // 如果不匹配，则保留原行
      }
    } else if (trimmedLine) {
      // 对其他非空行进行翻译，整体翻译并去除反引号
      const translatedLine = await translateLineSimplified(line);
      translatedLines.push(translatedLine);
    } else {
      // 对于空行，直接保留
      translatedLines.push(line);
    }
  }
  // 将翻译结果写入新文件
  fs.writeFileSync(outputFilePath, translatedLines.join('\n'), 'utf-8');
  console.log(`${outputFilePath} 翻译完成！`);
}

// 辅助函数：判断是否为表格分隔行（例如：| --- | --- |）
function isTableSeparatorLine(line) {
  // 匹配至少一个单元格分隔符
  return /^(\s*\|?\s*:?-+:?\s*\|?)+\s*$/.test(line);
}

// 辅助函数：判断是否为表格头行（包含中文）
function isTableHeaderLine(line) {
  return line.includes('|') && containsChinese(line);
}

// 辅助函数：判断是否为表格数据行
function isTableRowLine(line) {
  return (
    line.includes('|') &&
    !isTableSeparatorLine(line) &&
    !isTableHeaderLine(line)
  );
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
