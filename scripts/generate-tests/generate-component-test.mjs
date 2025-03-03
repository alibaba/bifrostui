/**
 * 使用前需要在env.process中配置IDEALAB_API_KEY和IDEALAB_BASE_URL
 * @see https://aliyuque.antfin.com/tppwd/tech/zmlkl8g7bdggo6rg
 */

import fs from 'node:fs';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { getComponentName } from '../generate-md/help.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// 配置OpenAI客户端
const openai = new OpenAI({
  apiKey: process.env.IDEALAB_API_KEY,
  baseURL: process.env.IDEALAB_BASE_URL,
});

// 文件路径配置
const testsFilePath = path.join(__dirname, 'component-tests.txt');
const srcDirectory = path.join(__dirname, '../../packages/bui-core/src');

/**
 * 从组件源文件中提取组件信息
 * @param {string} componentName 组件名称
 * @returns {Object} 组件信息
 */
async function extractComponentInfo(componentName) {
  debugger;
  const componentDir = path.join(srcDirectory, componentName);

  if (!fs.existsSync(componentDir)) {
    throw new Error(`组件目录不存在: ${componentDir}`);
  }

  let componentCode = '';
  // 查找目录中的所有.tsx和.ts文件（排除测试文件）
  const files = fs
    .readdirSync(componentDir)
    .filter(
      (file) =>
        (file.endsWith('.tsx') || file.endsWith('.ts')) &&
        !file.endsWith('.test.tsx') &&
        !file.endsWith('.test.ts'),
    );

  if (files.length === 0) {
    throw new Error(`找不到组件源文件: ${componentName}`);
  }

  // 读取所有符合条件的文件内容并合并
  componentCode = files
    .map((file) => {
      const filePath = path.join(componentDir, file);
      return `// File: ${file}\n${fs.readFileSync(filePath, 'utf8')}`;
    })
    .join('\n\n');

  return {
    name: componentName,
    code: componentCode,
  };
}

/**
 * 从测试文件中提取示例测试
 * @returns {string} 示例测试代码
 */
async function getExampleTests() {
  if (!fs.existsSync(testsFilePath)) {
    console.log('测试文件不存在，请先运行extract-tests.js');
    return '';
  }

  const testsContent = fs.readFileSync(testsFilePath, 'utf8');

  // 提取几个代表性的测试作为示例
  const examples = [];
  const components = testsContent.split('='.repeat(80));

  // 选择几个不同类型的组件测试作为示例
  const targetComponents = ['Picker', 'Input', 'Select', 'Modal'];

  for (const component of components) {
    for (const target of targetComponents) {
      if (component.includes(`组件: ${target}\n`)) {
        examples.push(component.trim());
        break;
      }
    }

    if (examples.length >= 4) break; // 获取足够的示例
  }

  return examples.join('\n\n' + '='.repeat(40) + '\n\n');
}

/**
 * 使用OpenAI生成测试代码
 * @param {Object} componentInfo 组件信息
 * @param {string} exampleTests 示例测试
 * @returns {string} 生成的测试代码
 */
async function generateTestWithOpenAI(componentInfo, exampleTests) {
  const prompt = `
我需要为React组件 "${componentInfo.name}" 生成单元测试代码。
请根据以下组件代码和示例测试，为这个组件创建完整的单元测试。

## 组件代码:
${componentInfo.code}

## 示例测试:
${exampleTests}

## 要求:
1. 生成可直接执行的测试代码，不包含任何代码块标记（如 \`\`\`javascript）
2. 要严格按照组件的的类型文件（type.ts）来定义mock数据，若为必选属性，则必须提供
3. 不要为组件添加类型文件（type.ts）中未出现的属性和方法，如ref
4. 使用Jest和React Testing Library，从'testing'导入所需工具
5. 增加测试用例以覆盖更多的语句和分支
6. 严格按照组件源代码编写测试，不引入任何组件中不存在的属性、方法或行为
7. 使用isConformant测试组件的基本一致性（如果适用）

直接返回完整的测试代码，不要包含任何额外的解释，确保代码可以直接执行。
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'claude37_sonnet', // 或其他适合的模型
      messages: [
        {
          role: 'system',
          content:
            '你是一个专业的React测试专家，擅长编写高质量、准确且可直接执行的单元测试代码。你的测试严格遵循组件的实际实现，不引入额外的属性或方法，并确保不会出现语法错误或访问不存在的属性。',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.1, // 降低温度以获得更一致的结果
      max_tokens: 4096,
      timeout_ms: 30000,
      stream: true,
    });

    // 处理流式响应
    let fullContent = '';
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullContent += content;
    }

    return fullContent.trim();
  } catch (error) {
    console.error('OpenAI API调用失败:', error);
    throw error;
  }
}

/**
 * 保存生成的测试代码到文件
 * @param {string} componentName 组件名称
 * @param {string} testCode 测试代码
 */
async function saveTestCode(componentName, testCode) {
  const componentDir = path.join(srcDirectory, componentName);
  const testsDir = path.join(componentDir, '__tests__');

  // 确保测试目录存在
  if (!fs.existsSync(testsDir)) {
    fs.mkdirSync(testsDir, { recursive: true });
  }

  const testFilePath = path.join(testsDir, `${componentName}.test.tsx`);
  fs.writeFileSync(testFilePath, testCode, 'utf8');

  console.log(`测试代码已保存到: ${testFilePath}`);
}

/**
 * 主函数
 * @param {string} componentName 组件名称
 */
async function main(componentName) {
  try {
    console.log(`开始为组件 ${componentName} 生成测试代码...`);

    // 1. 提取组件信息
    const componentInfo = await extractComponentInfo(componentName);

    // 2. 获取示例测试
    const exampleTests = await getExampleTests();

    const testCode = await generateTestWithOpenAI(componentInfo, exampleTests);

    // 5. 保存测试代码
    await saveTestCode(componentName, testCode);

    console.log(`成功为组件 ${componentName} 生成测试代码！`);
  } catch (error) {
    console.error(`生成测试代码失败:`, error);
  }
}

const componentName = await getComponentName();

if (!componentName) {
  console.error('请提供组件名称~');
} else {
  main(componentName);
}
