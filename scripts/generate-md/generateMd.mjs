/**
 * 使用前需要在env.process中配置IDEALAB_API_KEY和IDEALAB_BASE_URL
 * @see https://aliyuque.antfin.com/wushuxuan.wsx/mobfr5/gwebrbfu6dkl0zlk?singleDoc#%20
 * @example node scripts/generate-md/generateMd.mjs
 * @example node scripts/generate-md/generateMd.mjs --all
 * @example node scripts/generate-md/generateMd.mjs --component Button
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import minimist from 'minimist';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import {
  getAllCodes,
  getComponentName,
  CONFIG,
  saveMarkdown,
} from './help.mjs';
import { generateSystemPrompt, generateUserPrompt } from './prompt.mjs';

dotenv.config();

// 初始化 OpenAI 客户端
const initOpenAIClient = () => {
  return new OpenAI({
    apiKey: process.env.IDEALAB_API_KEY,
    baseURL: process.env.IDEALAB_BASE_URL,
  });
};

// 生成 Markdown
const generateMarkdown = async (params) => {
  const spinner = ora(
    `AI 正在为 ${params.componentName} 生成markdown文档...`,
  ).start();

  try {
    const client = initOpenAIClient();
    const response = await client.chat.completions.create({
      model: 'claude37_sonnet',
      messages: [
        {
          role: 'system',
          content: generateSystemPrompt(params.mdFileName),
        },
        {
          role: 'user',
          content: generateUserPrompt({
            componentName: params.componentName,
            referenceDoc: {
              fileName: params.mdFileName,
              code: {
                component: params.referenceCodes.componentCode,
                types: params.referenceCodes.typesCode,
                styles: params.referenceCodes.styleCode,
              },
              format: params.mdFormat,
            },
            targetDoc: {
              code: {
                component: params.targetCodes.componentCode,
                types: params.targetCodes.typesCode,
                styles: params.targetCodes.styleCode,
                layout: params.stackCode,
              },
            },
          }),
        },
      ],
      stream: true,
    });

    // 处理流式响应
    let fullContent = '';
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullContent += content;
    }

    return fullContent.trim();
  } finally {
    spinner.stop();
  }
};

// 获取所有组件名称
const getAllComponentNames = () => {
  const componentsDir = path.resolve(process.cwd(), 'packages/bui-core/src');

  try {
    const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((dir) => dir.name)
      .filter(
        (name) =>
          !name.startsWith('.') && name !== 'utils' && name !== 'styles',
      );
  } catch (error) {
    console.error('读取组件目录失败:', error.message);
    return [];
  }
};

// 为单个组件生成文档
async function generateForComponent(componentName, mdFileName) {
  try {
    // 获取所有必要的代码
    const { targetCodes, referenceCodes, stackCode, mdFormat } =
      await getAllCodes(componentName, mdFileName);

    // 生成 Markdown
    const markdown = await generateMarkdown({
      componentName,
      mdFileName,
      targetCodes,
      referenceCodes,
      stackCode,
      mdFormat,
    });

    // 保存文件
    const outputPath = saveMarkdown(componentName, markdown);
    console.log(`${componentName} 的Markdown文档已生成: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`为 ${componentName} 生成文档失败:`, error.message);
    return false;
  }
}

async function main() {
  try {
    // 获取命令行参数
    const args = minimist(process.argv.slice(2));
    const mdFileName = args.md || CONFIG.DEFAULT_MD_FILE;
    const generateAll = args.all || false;
    const specifiedComponent = args.component;

    if (generateAll) {
      // 批量生成所有组件的文档
      const componentNames = getAllComponentNames();
      console.log(`找到 ${componentNames.length} 个组件，开始批量生成文档...`);

      let successCount = 0;
      for (const componentName of componentNames) {
        const success = await generateForComponent(componentName, mdFileName);
        if (success) successCount++;
      }

      console.log(
        `批量生成完成，成功: ${successCount}/${componentNames.length}`,
      );
    } else if (specifiedComponent) {
      // 为指定组件生成文档
      await generateForComponent(specifiedComponent, mdFileName);
    } else {
      // 交互式选择组件
      const componentName = await getComponentName();
      await generateForComponent(componentName, mdFileName);
    }
  } catch (error) {
    console.error('生成文档失败:', error.message);
    process.exit(1);
  }
}

main();
