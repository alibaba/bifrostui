const fs = require('fs');
const Task = require('./core/index.js');
const { input } = require('@inquirer/prompts');
const { consoleTip } = require('./core/utils');
const path = require('path');

// 详细的使用文档：https://alidocs.dingtalk.com/i/nodes/gvNG4YZ7Jnxop15OCnenxLlqW2LD0oRE?utm_scene=team_space

(async function () {
  let taskType = await input({ message: '请输入(1 or 2)任务类型[1.为组件写测试用例；2.为组件翻译中文MD]：' });
  // 如果选择“为组件写测试用例”任务输出提示信息
  if (taskType === '1') {
    consoleTip(`为了提高生成单测的准确率，你可以做以下事情：\n
      1.您可以根据实际需求在配置文件中（config.js）选择配置更合适的模型\n
      2.您可以在配置文件中（config.js）配置更合适(与你的组件更相似)的组件作为AI的学习模板\n
      3.更多使用细节请参考文档：https://alidocs.dingtalk.com/i/nodes/gvNG4YZ7Jnxop15OCnenxLlqW2LD0oRE?utm_scene=team_space
      `, 'warn');
  };
  let comName = await input({ message: '请输入你的组件文件目录名称(组件名称)' });
  if (!taskType) {
    return consoleTip('请输入任务类型（1.为组件写测试用例；2.为组件翻译中文MD）：1 or 2')
  }
  if (!comName) {
    return consoleTip('请输入你的组件文件目录名称(组件名称)');
  };
  const comPath = `../../packages/bui-core/src/${comName}`;
  //检查路径是否存在
  if (!fs.existsSync(comPath)) {
    return consoleTip(`您输入的组件无对应目录(${comPath})，请检查目录名是否正确`)
  };
  switch (taskType) {
    case '1':
      Task.aiWriteTestCases(comPath, comName);
      break;
    case '2':
      Task.aiTranslateMd(comPath);
      break;
    default:
      consoleTip('请输入正确的任务类型')
      break;
  }
  
})()
