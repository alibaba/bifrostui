const fs = require('fs');
const path = require('path');

const inputDirectory = path.join(__dirname, '../../packages/bui-core/src');
const outputFilePath = path.join(__dirname, 'component-tests.txt');

// 存储所有测试内容
const allTests = [];

/**
 * 保存提取的测试内容到文件
 */
function saveToFile() {
  const content = allTests.join('\n\n' + '='.repeat(80) + '\n\n');
  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log(`测试代码已保存到 ${outputFilePath}`);
}

/**
 * 收集测试文件内容
 * @param {string} filePath 测试文件路径
 * @param {string} componentName 组件名称
 * @param {string} relativePath 相对路径
 */
function collectTest(filePath, componentName, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // 添加文件标识头
  const header = `组件: ${componentName}\n文件: ${relativePath}\n${'='.repeat(40)}`;

  // 将测试内容添加到集合中
  allTests.push(`${header}\n\n${content}`);
}

/**
 *
 * 递归处理目录下的文件
 * @param {string} directoryPath 目录路径
 */
function processFiles(directoryPath) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是目录，递归处理
      processFiles(filePath);
    } else if (file.endsWith('.test.tsx') && !file.endsWith('.snapshot.test.tsx')) {
      // 获取相对路径，格式如：packages/bui-core/src/Alert/xxx.test.tsx
      const relativePath = path.relative(
        path.join(__dirname, '../..'),
        filePath,
      );

      // 从相对路径中提取组件名
      // 例如从 packages/bui-core/src/Alert/__tests__/xxx.test.tsx 提取 Alert
      const pathParts = relativePath.split(path.sep);
      const componentIndex = pathParts.indexOf('src') + 1;
      const componentName =
        componentIndex < pathParts.length ? pathParts[componentIndex] : '';

      collectTest(filePath, componentName, relativePath);
    }
  });
}

/**
 * 生成测试文档
 * @param {string} directoryPath 源代码目录路径
 */
function extractTests(directoryPath) {
  console.log('开始提取测试文件...');
  processFiles(directoryPath);

  if (allTests.length > 0) {
    saveToFile();
    console.log(`成功提取了 ${allTests.length} 个测试文件的内容`);
  } else {
    console.log('未找到任何测试文件');
  }
}

// 开始处理文件
extractTests(inputDirectory);