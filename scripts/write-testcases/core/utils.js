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

const getfilesContent = (targetDirPath, ignoreDir = []) => {
    // 判断targetDirPath是否存在
    if (!fs.existsSync(targetDirPath)) {
        throw new Error("该目录不存在");
    };
    let filesArr = [];
    // 遍历目录，将文件存到filesArr中去
    function traverseDir(dirPath) {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
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
    default:
      break;
  }
  return false;
 }


module.exports = { getTargetFile, getfilesContent, openai, consoleTip };
