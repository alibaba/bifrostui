const fs = require('fs');
const path = require('path');
const { input } = require('@inquirer/prompts');

/**
 * 为指定组件生成无障碍测试模板脚本
 * 
 * 使用方式：
 * node tests/a11y-template.test.tsx [组件名]
 * 
 * 示例：
 * node tests/a11y-template.test.tsx Button
 * node tests/a11y-template.test.tsx Calendar
 * 
 * 如果不提供组件名，将交互式询问
 */

const componentsDir = path.resolve(__dirname, '../packages/bui-core/src');

// 无障碍测试模板
const getA11yTestTemplate = (componentName) => {
  return `import { getMdDemoCodes, accessibilityDemoTest } from 'testing';

/**
 * ${componentName} 组件无障碍测试
 * 
 * 此文件由 a11y-template 脚本自动生成
 * 生成时间: ${new Date().toLocaleString()}
 */

getMdDemoCodes(
  '${componentName}',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      finishCallback,
    } = params;
    
    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        // 启用详细的无障碍错误报告
        detailedErrorReporting: true,
        // axe 配置选项
        axeOptions: {
          // 运行特定规则集
          runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
        },
        // 根据 ${componentName} 组件特性调整禁用规则
        // disabledRules: ['color-contrast'], // 示例：如果确定颜色对比度符合要求
        
        // ${componentName} 组件的自定义无障碍检查
        customA11yChecks: (container) => {
          // TODO: 根据 ${componentName} 组件特性添加自定义检查
          
          // 示例：检查按钮是否有可访问的名称（适用于包含按钮的组件）
          // const buttons = container.querySelectorAll('button');
          // buttons.forEach((button, index) => {
          //   const hasAccessibleName = button.textContent?.trim() || 
          //                             button.getAttribute('aria-label') || 
          //                             button.getAttribute('title');
          //   if (!hasAccessibleName) {
          //     console.warn(\`${componentName} 按钮 \${index + 1} 缺少可访问的名称\`);
          //   }
          // });
          
          // 示例：检查表单元素是否有标签（适用于表单组件）
          // const inputs = container.querySelectorAll('input, select, textarea');
          // inputs.forEach((input, index) => {
          //   const hasLabel = input.getAttribute('aria-label') ||
          //                   input.getAttribute('aria-labelledby') ||
          //                   container.querySelector(\`label[for="\${input.id}"]\`);
          //   if (!hasLabel) {
          //     console.warn(\`${componentName} 表单元素 \${index + 1} 缺少标签\`);
          //   }
          // });
        },
        
        // 生命周期钩子
        beforeAllFn: () => {
          console.log('🧪 开始 ${componentName} 组件无障碍测试...');
        },
        beforeEachFn: () => {
          // 每个测试前的准备工作
        },
        afterEachFn: () => {
          // 每个测试后的清理工作
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的demo，在此数组中添加，如 ['demo1', 'demo2']
);
`;
};

// 获取所有可用的组件列表
function getAvailableComponents() {
  const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(dir => dir.name)
    .filter(name => 
      !name.startsWith('.') && 
      name !== 'utils' && 
      name !== 'styles' &&
      name !== 'locales'
    );
}

// 检查组件是否存在
function validateComponent(componentName) {
  const componentDir = path.resolve(componentsDir, componentName);
  if (!fs.existsSync(componentDir)) {
    return false;
  }
  
  // 检查是否有 markdown 文档
  const mdFile = path.resolve(componentDir, 'index.zh-CN.md');
  if (!fs.existsSync(mdFile)) {
    console.warn(`⚠️  警告: ${componentName} 组件没有找到 index.zh-CN.md 文档文件`);
    console.warn(`   无障碍测试依赖于组件文档中的 demo 示例`);
  }
  
  return true;
}

// 为组件生成无障碍测试文件
function generateA11yTestForComponent(componentName) {
  const componentTestDir = path.resolve(componentsDir, componentName, '__tests__');
  const testFilePath = path.resolve(componentTestDir, 'a11y.test.tsx');
  
  // 检查测试文件是否已存在
  if (fs.existsSync(testFilePath)) {
    console.log(`⚠️  ${componentName} 的无障碍测试文件已存在: ${testFilePath}`);
    console.log(`   如果需要重新生成，请先删除现有文件`);
    return false;
  }
  
  // 确保测试目录存在
  if (!fs.existsSync(componentTestDir)) {
    fs.mkdirSync(componentTestDir, { recursive: true });
    console.log(`📁 创建测试目录: ${componentTestDir}`);
  }
  
  // 生成测试文件内容
  const testContent = getA11yTestTemplate(componentName);
  
  // 写入测试文件
  fs.writeFileSync(testFilePath, testContent);
  
  console.log(`✅ 成功为 ${componentName} 生成无障碍测试文件: ${testFilePath}`);
  console.log(`💡 运行测试: pnpm test:run packages/bui-core/src/${componentName}/__tests__/a11y.test.tsx`);
  
  return true;
}

// 主函数
async function main() {
  try {
    // 获取命令行参数
    const args = process.argv.slice(2);
    let componentName = args[0];
    
    // 如果没有提供组件名，交互式询问
    if (!componentName) {
      const availableComponents = getAvailableComponents();
      console.log('\n📋 可用的组件列表:');
      availableComponents.forEach((name, index) => {
        console.log(`  ${index + 1}. ${name}`);
      });
      console.log('');
      
      componentName = await input({ 
        message: '请输入要生成无障碍测试的组件名称:',
        validate: (input) => {
          if (!input.trim()) {
            return '组件名不能为空';
          }
          if (!availableComponents.includes(input.trim())) {
            return `组件 "${input.trim()}" 不存在。可用组件: ${availableComponents.join(', ')}`;
          }
          return true;
        }
      });
    }
    
    componentName = componentName.trim();
    
    // 验证组件是否存在
    if (!validateComponent(componentName)) {
      const availableComponents = getAvailableComponents();
      console.error(`❌ 错误: 组件 "${componentName}" 不存在`);
      console.error(`💡 可用组件: ${availableComponents.join(', ')}`);
      process.exit(1);
    }
    
    console.log(`\n🚀 开始为 ${componentName} 组件生成无障碍测试模板...\n`);
    
    // 生成无障碍测试文件
    const success = generateA11yTestForComponent(componentName);
    
    if (success) {
      console.log(`\n✨ 无障碍测试模板生成完成！`);
      console.log(`\n📖 接下来的步骤:`);
      console.log(`1. 根据 ${componentName} 组件的特性，完善 customA11yChecks 中的自定义检查逻辑`);
      console.log(`2. 如果组件有特殊的无障碍要求，调整 disabledRules 配置`);
      console.log(`3. 运行测试验证组件的无障碍性`);
      console.log(`\n🧪 运行测试命令:`);
      console.log(`   pnpm test:run packages/bui-core/src/${componentName}/__tests__/a11y.test.tsx`);
    }
    
  } catch (error) {
    console.error('❌ 生成过程中发生错误:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本，执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  generateA11yTestForComponent,
  getA11yTestTemplate
};