/**
 * 需先在根目录新建.env文件，参考文档方法一（项目级别配置）https://aliyuque.antfin.com/tppwd/tech/zmlkl8g7bdggo6rg
 * 使用llm生成组件markdown文档, 可根据生成的md文档进行修改，减少编写成本
 * 通过--md指定参考markdown（默认参考TabBar的markdown文档规范）
 * @example node scripts/generate-md/generateMd.mjs
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import minimist from 'minimist';
import ora from 'ora';
import { getAllCodes, getComponentName, CONFIG, saveMarkdown} from './help.mjs';
import { generateSystemPrompt, generateUserPrompt } from './prompt.mjs';


dotenv.config();

// 初始化 OpenAI 客户端
const initOpenAIClient = () => {
  return new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  });
};



// 生成 Markdown
const generateMarkdown = async (params) => {
  const spinner = ora('AI 生成markdown文档中...').start();
  
  try {
    const client = initOpenAIClient();
    const response = await client.chat.completions.create({
      model: 'qwen-max',
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
                styles: params.referenceCodes.styleCode
              },
              format: params.mdFormat
            },
            targetDoc: {
              code: {
                component: params.targetCodes.componentCode,
                types: params.targetCodes.typesCode,
                styles: params.targetCodes.styleCode,
                layout: params.stackCode
              }
            }
          }),
        },
      ],
    });

    const markdown = response.choices[0].message.content;
    if (!markdown) {
      throw new Error('未能获取到有效的 markdown 内容');
    }

    return markdown;
  } finally {
    spinner.stop();
  }
};


async function main() {
  try {
    // 获取命令行参数
    const args = minimist(process.argv.slice(2));
    const mdFileName = args.md || CONFIG.DEFAULT_MD_FILE;

    // 获取组件名称
    const componentName = await getComponentName();

    // 获取所有必要的代码
    const {
      targetCodes,
      referenceCodes,
      stackCode,
      mdFormat
    } = await getAllCodes(componentName, mdFileName);

    // 生成 Markdown
    const markdown = await generateMarkdown({
      componentName,
      mdFileName,
      targetCodes,
      referenceCodes,
      stackCode,
      mdFormat
    });

    // 保存文件
    const outputPath = saveMarkdown(componentName, markdown);
    console.log(`Markdown文档已生成: ${outputPath}`);
  } catch (error) {
    console.error('生成文档失败:', error.message);
    process.exit(1);
  }
}

main();