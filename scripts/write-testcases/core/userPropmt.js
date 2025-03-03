const fs = require('fs');
const config = require('../config.js');
const {getfilesContent, getTargetFile, getCurrProjectTree, getProjectName} = require('./utils.js');
const path = require('path');

let enableTree = false;
// if (config.modelCfg.writeModel == 'qwen-long') {
//   console.log('当前使用qwen-long模型，将生成项目树');
//   enableTree = true;
// }
const treeStr = getCurrProjectTree();
const treeTipsText = () => {
  const treeTipsPrompt = enableTree && treeStr ? `\n- 项目树形结构图（供参考）：\n${treeStr}.\n${getStoreTestCasesPathPrompt()}` : '';
  return treeTipsPrompt;
}
const getStoreTestCasesPathPrompt = () => {
  if (!global.storeTestCasesPath) return '';
  let realPath = path.resolve(global.storeTestCasesPath);
  const project = getProjectName();
  let tempPath = '';
  if (realPath && project && realPath.indexOf(project) !== -1) {
    tempPath = project + '' + realPath.split(project)[1];
  }
  const returnPrompt = `- 当前测试用例代码文件所在的目录是：${tempPath}\n`;
  return returnPrompt;
}

const aiTaskPrompts = {
    aiTranslateMd: {
        name: 'AI翻译markdown',
        model: config.modelCfg.translateModel || 'qwen-coder-plus',
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
        model: config.modelCfg.writeModel || 'qwen-coder-plus',
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
                // const returnStr = `你是一个专业的测试用例编写专家，请你先参考提供的参考组件的代码和对应已经完成的测试用例，模仿参考组件的测试用例规范和风格[参考组件的组件代码如下【${allStrResult}】,参考组件的组件测试用例代码如下【${testCode}】].为以下提供的组件代码生成对应的测试用例，保证该组件单测覆盖率至少90%以上(保证API、函数、属性等的全面覆盖).你只需要直接输出测试用例代码，无需解释或说明：`;
                const returnStr = `您是一位专业的测试用例编写专家。请参考提供的参考组件代码及其对应的已完成测试用例，按照相同的规范和风格为新提供的组件编写测试用例。 
                \n参考信息： 
                    \n- 参考组件的代码：${allStrResult} 
                    \n- 参考组件的测试用例代码：${testCode} 
                \n要求： 1. 保证所编写的测试用例能够覆盖目标组件至少90%的功能。 2. 确保API、函数、属性等关键部分得到全面覆盖。 3. 测试用例应遵循与参考案例相同的编码风格和结构。 
                \n输出格式：直接提供完整的测试用例代码，无需额外解释或说明。 
                \n注意事项： 
                     \n- 保持测试用例简洁明了，易于理解和维护。 
                     \n- 使用与参考测试用例一致的命名约定和技术栈。 
                     \n- 如果可能，请考虑边界条件和异常情况以增强测试的健壮性。`;
                return returnStr;
            },
            getUserPrompt: function (args) {
                // const userStr = `请为下面提供的组件代生成对应的测试用例：${args.originCode}`;
                // const defaultPrompt = '请为下面提供的组件代生成对应的测试用例（注意请确保你生成的测试用例的实现（API、方法、属性等）与该组件的实现对应且正确，不允许增加与组件实现中无关的属性或API等）';
                // let userStr = `${defaultPrompt}：\n${args.originCode}`;
                let userStr = `请根据以下提供的组件代码生成对应的测试用例。确保生成的测试用例（包括API、方法、属性等）与该组件的实际实现完全对应且准确，不得添加任何与组件实现无关的属性或API。
                \n- 组件代码：${args.originCode} 
                ${treeTipsText()}
                \n### 测试用例要求： 
                      \n1. **准确性**：每个测试用例必须精确反映组件的功能和行为。 
                      \n2. **全面性**：覆盖组件的所有主要功能点，包括但不限于各种输入情况下的表现。 
                      \n3. **独立性**：每个测试用例应尽可能独立运行，减少对其他测试用例结果的依赖。 
                      \n4. **可读性**：测试用例应当易于理解和维护，适当添加注释以提高代码可读性。 
                \n输出格式：直接提供完整的测试用例代码，无需额外解释或说明。 
                \n请严格按照上述要求编写测试用例${treeTipsText() ? '，并在必要时参考提供的项目树形结构图来理解组件在整个项目中的位置及其与其他部分的关系' : ''}。`
                if (config?.customPromptCfg?.prompt) {
                  if (config.customPromptCfg.replaceDefaultPrompt) {
                    userStr = `${config.customPromptCfg.prompt}：\n${args.originCode}`;
                  };
                  // else {
                  //   userStr = `${defaultPrompt},\n${config.customPromptCfg.prompt}：\n${args.originCode}`;
                  // };
                };
                // console.log('userStr===>', userStr);
                return userStr;
            },
            getOptimizePrompt: function (args) {
              const {testCaseCode, storeStdoutInfo, allmyFilesCodes} = args;
              // return `下面我将提供已完成测试并验证正确的测试用例代码如下：\n${testCaseCode}，以及该单测代码运行输出的信息如下：\n${storeStdoutInfo}，
              // \n请阅读并分析我以下提供的对应组件代码并进一步对该测试用例代码进行优化或补充，保证该组件的单元测试覆盖率达到90%以上(确保组件API、函数、属性等的全面覆盖)，对应组件代码如下：\n${allmyFilesCodes}，
              // \n请输出优化并补充后的测试用例代码，无需解释或说明：`;
              return `请基于我提供的信息，对现有的测试用例代码进行优化补充，确保组件的单元测试覆盖率至少达到90%，覆盖所有API、函数和属性等关键部分。
              \n以下是需要的信息： 
                  \n- 已完成测试并验证正确的测试用例代码: ${testCaseCode}
                  \n- 该单测代码运行输出的信息: ${storeStdoutInfo}
                  \n- 对应组件的源代码: ${allmyFilesCodes}
              \n输出格式：直接提供优化补充后且完整的测试用例代码，无需额外解释或说明。 `;
            },
            getTestCoverageInfoPrompt: function (args) {
              const {infoMsg, comName} = args;
              // return `下面我将提供测试用例运行信息如下：\n${infoMsg}，
              // \n请根据我提供的测试用例运行信息，提取并总结该测试用例对应${comName}组件的单元测试覆盖率信息，并输出该信息：`;
              return `根据提供的测试用例运行信息，提取并总结指定组件的单元测试覆盖率信息。 
              \n输入信息： 
                  \n- 测试用例运行信息: ${infoMsg} 
                  \n- 组件名称: ${comName} 输出要求： 
                  \n- 请从${infoMsg}中提取与${comName}组件相关的单元测试覆盖率数据。 
                  \n- 对提取的数据进行整理和总结。 - 清晰地呈现${comName}组件的单元测试覆盖率结果。 
              \n注意事项： 1. 确保准确识别${comName}组件的相关信息。 2. 提供的信息应当直接反映该组件的测试覆盖情况，包括但不限于代码行覆盖率、分支覆盖率等关键指标。 3. 输出格式应简洁明了，便于理解。`;
            },
            getAiOptimizeTaskPrompt: function (args) {
              const {errorMsg} = args;
              // return `运行你给出的测试用例失败并报错，请根据以下错误信息继续优化并修正你给出的测试用例（注意正确的测试用例部分的代码请勿再变更）：\n${errorMsg}，${treeTipsText()}
              // \n请输出优化并修正后的测试用例代码，无需解释或说明：`;
              return `根据提供的错误信息优化并修正你给出的测试用例代码。
              \n请注意，仅需修改测试用例文件中出错的代码部分，保持正确的测试用例部分和其他文件代码不变。
              \n 输入信息： 
                  \n- 错误信息: ${errorMsg} 
                  ${(treeTipsText())} 
              \n输出格式：直接提供优化修正后且完整的测试用例代码，无需额外解释或说明。`;
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
