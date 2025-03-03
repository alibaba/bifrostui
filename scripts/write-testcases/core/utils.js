const fs = require('fs');
const path = require('path');
const OpenAI = require("openai");
const dotenv = require('dotenv');
const chalk = require('chalk');
dotenv.config(); // 加载环境变量 如何配置请参考文档：https://yuque.alibaba-inc.com/tppwd/tech/zmlkl8g7bdggo6rg

const openai = new OpenAI(
    {
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
)


const getTestsOldFiles = (dirPath) => {
  let filesArr = [];
  // 判断dirPath是否是有效的目录路径
  if (!fs.existsSync(dirPath)) {
    throw new Error("无效的目录路径");
  };
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      filesArr.push(filePath);
    };
  });
  return filesArr;
}

const getOldTestCasesFile = (filesPathArr = [], comName = '') => {
  if (filesPathArr.length === 0 || !comName) return null;
  // 获取global.testsOldFiles中是否有comName.test.tsx文件
  const oldTestCasesFile = filesPathArr.find(file => file.indexOf(`${comName}.test.tsx`) !== -1);
  return oldTestCasesFile;
}

// 已有的测试用例的文件夹名称
let testsOldFileNames = ['__tests__old', '__test__old'];
// 已有的测试用例的文件夹中的文件
global.testsOldFiles = [];

const getfilesContent = (targetDirPath, ignoreDir = [], storeOldTestCases = false) => {
    // 判断targetDirPath是否存在
    if (!fs.existsSync(targetDirPath)) {
        throw new Error("该目录不存在");
    };
    if (storeOldTestCases) {
      global.testsOldFiles = [];
    }
    let filesArr = [];
    // 遍历目录，将文件存到filesArr中去
    function traverseDir(dirPath) {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                // 如果是testsOldFileNames中的文件夹，则将文件夹中的文件名路径存到testsOldFiles中去
                if (testsOldFileNames.includes(file) && storeOldTestCases) {
                  global.testsOldFiles = getTestsOldFiles(filePath);
                  // console.log('testsOldFiles==>', global.testsOldFiles);
                  return;
                };
                // 排除ignoreDir中有的文件夹
                if (ignoreDir.includes(file)) return;
                traverseDir(filePath);
            } else if (stat.isFile()) {
                // 排除ignoreDir中有的文件或后缀文件
                if (ignoreDir.includes(file)) return;
                if (ignoreDir.some(item => file.endsWith(item))) return;
                // 排除隐藏文件
                if (file.startsWith('.')) return;
                filesArr.push(filePath);
            }
        });
    }
    traverseDir(targetDirPath);
    console.log(filesArr);
    if (filesArr.length === 0) {
        throw new Error("该目录下没有文件");
    };
    let allStrRes = '';
    // 遍历filesArr所有文件，将文件内容存到allStrRes中去，注意格式如下：<----文件名1----->\n文件内容1\n<----文件名2----->\n文件内容2\n...
    filesArr.forEach(file => {
        const fileContent = fs.readFileSync(file, 'utf-8');
        allStrRes += `<----${file}----->\n${fileContent}\n`;
    });
    return allStrRes;
}

// 在给定的目录中找到特定的文件
 const getTargetFile = (targetDirPath, targetFileName) => {
    // 判断targetDirPath是否存在
    if (!fs.existsSync(targetDirPath)) {
        console.log('getTargetFile targetDirPath 不存在:', targetDirPath, targetFileName);
        throw new Error("该目录不存在");
    };
    // 遍历目录，找到目标文件
    const files = fs.readdirSync(targetDirPath);
    for (const file of files) {
        const filePath = path.join(targetDirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            const result = getTargetFile(filePath, targetFileName);
            if (result) {
                return result;
            };
        } else if (stat.isFile() && file.indexOf(targetFileName) !== -1) {
            // console.log('targetFileName===>', file);
            return filePath;
        }
    }
    return null;
}

function consoleTip(msg = '提示信息', type = 'err') { 
  switch (type) {
    case 'err':
      // 红色提示
      console.log(chalk.red('\n[执行失败提示]：' + msg));
      break;
    case 'success':
      console.log(chalk.green('\n[执行成功提示]：' + msg))
      break;
    case 'info':
      console.log(chalk.blue('\n[执行信息提示]：' + msg))
      break;
    case 'warn':
      console.log(chalk.yellow('\n[温馨提示]：' + msg))
      break;
    default:
      break;
  }
  return false;
 }

function findProjectRoot(currentDir) {
  const rootIndicator = 'package.json'; // 通常使用 package.json 作为项目根目录的标识符
  let currentPath = currentDir;
  while (!fs.existsSync(path.join(currentPath, rootIndicator))) {
    const parentPath = path.resolve(currentPath, '..');
    // 如果已经到了根路径仍然没有找到，退出循环
    if (parentPath === currentPath) {
      return null;
    }
    currentPath = parentPath;
  }
  return currentPath;
}

function getProjectTreeIgnore(rootDir, ignoreDirs = ['node_modules', 'scripts',]) {
  function buildTree(currentPath) {
    let stats;
    try {
      stats = fs.statSync(currentPath);
    } catch (err) {
      // 如果文件不存在或者不能读取，返回 null
      if (err.code === 'ENOENT') {
        return null;
      }
      throw err;
    }
    const tree = {
      name: path.basename(currentPath),
      path: currentPath,
      type: stats.isDirectory() ? 'directory' : 'file',
    };
    if (stats.isDirectory()) {
      const directoryName = path.basename(currentPath);
      // 如果目录在忽略列表中，直接返回 null
      if (ignoreDirs.includes(directoryName)) {
        return null;
      }
      const children = fs.readdirSync(currentPath).map(child =>
        buildTree(path.join(currentPath, child))
      );
      // 过滤掉 null 的项（即无法读取的项）
      tree.children = children.filter(child => child !== null);
    }
    return tree;
  }
  return buildTree(rootDir);
}


function getFilteredProjectTree(rootDir, includeDirs = ['packages']) {
  function buildTree(currentPath) {
    let stats;
    try {
      stats = fs.statSync(currentPath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return null;
      }
      throw err;
    }
    const tree = {
      name: path.basename(currentPath),
      path: currentPath,
      type: stats.isDirectory() ? 'directory' : 'file',
    };
    if (stats.isDirectory()) {
      let children = fs.readdirSync(currentPath).map(child =>
        buildTree(path.join(currentPath, child))
      );
      // 过滤掉 null、隐藏文件和目录，以及 node_modules
      children = children.filter(child => child !== null && !child.name.startsWith('.') && child.name !== 'node_modules');
      tree.children = children;
    }
    return tree;
  }

  const result = { name: path.basename(rootDir), type: 'directory', children: [] };
  includeDirs.forEach(dir => {
    const dirPath = path.join(rootDir, dir);
    const subTree = buildTree(dirPath);
    if (subTree) {
      result.children.push(subTree);
    }
  });
  return result;
}


function getCompressedTreeString(tree) {
  function buildString(node, depth = 0) {
    const indent = '  '.repeat(depth);
    let result = `${indent}${node.type}: ${node.name}\n`;
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        result += buildString(child, depth + 1);
      });
    }
    return result;
  }
  return buildString(tree);
}

const getCurrProjectTree = () => {
  const currentDir = __dirname; // 你可以从你的特定代码位置开始
  const projectRoot = findProjectRoot(currentDir);
  if (projectRoot) {
    console.log('项目根目录:', projectRoot);
    const tree = getFilteredProjectTree(projectRoot);
    // console.log(JSON.stringify(tree, null, 2));
    // console.log(getCompressedTreeString(tree));
    return getCompressedTreeString(tree);
  } else {
    console.log('未能找到项目根目录');
    return null;
  }
}


module.exports = { getTargetFile, getfilesContent, openai, consoleTip, getOldTestCasesFile, getCurrProjectTree };
