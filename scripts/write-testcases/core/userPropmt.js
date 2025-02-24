const fs = require('fs');
const config = require('../config.js');
const {getfilesContent, getTargetFile} = require('./utils.js');

const aiTaskPrompts = {
    aiTranslateMd: {
        name: 'AI翻译markdown',
        model: 'qwen-coder-plus',
        description: '将指定目录下的markdown文件翻译成英文',
        promptCfg: {
            system: '你是一个专业的翻译专家，请将以下提供的markdown翻译成英文，注意保持原文格式不变仅翻译内容，直接输出翻译后的markdown内容：',
            getUserPrompt: function (args) {
                return `请将以下markdown翻译成英文：${args.zhMdContent}`
            }
        },
    },
    aiWriteTestCases: {
        name: 'AI生成测试用例',
        model: 'qwen-coder-plus',
        // model: 'deepseek-v3',
        description: '根据指定组件代码生成对应的测试用例',
        promptCfg: {
            getSystem: function () {
                // 参考语雀https://yuque.alibaba-inc.com/tppwd/inygww/qy3dtl5ef6uwgm8q
                // 先在目录下找到测试用例文件（***.test.tsx），如果没有则报错“提供的参考组件没有可用的测试用例”
                const testFile = getTargetFile(config.referenceDirPath, config.referenceTestFileName);
                if (!testFile) {
                    throw new Error('提供的参考组件没有可用的测试用例')
                }
               console.log('testFile===>', testFile);
               const testCode = `<----${ config.referenceTestFileName}----->\n${fs.readFileSync(testFile, 'utf-8')}\n`;
               let allStrResult = getfilesContent(config.referenceDirPath, config.referenceIgnoreDir);
                const returnStr = `你是一个专业的测试用例编写专家，请你先参考提供的参考组件的代码和对应已经完成的测试用例，模仿参考组件的测试用例规范和风格[参考组件的组件代码如下【${allStrResult}】,参考组件的组件测试用例代码如下【${testCode}】].为以下提供的组件代码生成对应的测试用例，保证单测覆盖率至少90%以上.你只需要直接输出测试用例代码，无需解释或说明：`;
                return returnStr;
            },
            getUserPrompt: function (args) {
                const userStr = `请为下面提供的组件代生成对应的测试用例：${args.originCode}`;
                return userStr
            },
            getSnapshotTest: function (yourComponentName='yourComponentName') {
                return `import { snapshotTest } from 'testing';

describe('${yourComponentName} demo snapshot', () => {
  snapshotTest('${yourComponentName}');
});
`
            }
        },
    }
}


module.exports = aiTaskPrompts;
