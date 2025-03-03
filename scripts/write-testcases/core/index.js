const path = require('path');
const fs = require('fs');
const {getfilesContent, openai, consoleTip, getOldTestCasesFile} = require('./utils.js');
const userPropmt = require('./userPropmt.js');
const { exec } = require('child_process');
const { input } = require('@inquirer/prompts');
const config = require('../config.js');
let haveZhCNmdPath = false;

let storeAiPromptArr = [];
let storeAssistantObj = {
  "role": "assistant",
  "content": ''
};
let aiTryConut = 0;
const maxAiTryNum = 10;
let allmyFilesCodes = '';
let currentComName = '';
let storeStdoutInfo = '';
// 记录存储的测试用例的路径
global.storeTestCasesPath = '';

// AI翻译markdwon
/*
* @description: AI为组件中文MarkDown文档生成英文文档
* @param {string} path - 你的需要翻译中文MD组件路径
* */
async function aiTranslateMd(comDirPath = null) {
    // 判断路径是否存在是否有效路径
    if (!comDirPath || !fs.existsSync(comDirPath)) {
        throw new Error("请输入有效路径");
    };
    // 遍历文件夹找到***.zh-CN.md文件
    fs.readdir(comDirPath, (err, files) => {
        if (err) {
            throw err;
        };
        haveZhCNmdPath = false;
        files.forEach(async (file, index) => {
            if (file.endsWith(".zh-CN.md")) {
                const filePath = `${comDirPath}/${file}`;
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                haveZhCNmdPath = true;
                if (fileContent) {
                    const completion = await openai.chat.completions.create({
                        model: userPropmt.aiTranslateMd.model,
                        messages: [
                            {"role": "system", "content": userPropmt.aiTranslateMd.promptCfg.system},
                            {"role": "user", "content": userPropmt.aiTranslateMd.promptCfg.getUserPrompt({
                                zhMdContent: fileContent
                            })}
                        ],
                        stream: true,
                    });
                    let result = '';
                    for await (const chunk of completion) {
                        if (chunk.choices[0].delta.content) {
                            result += chunk.choices[0].delta.content;
                            process.stdout.write(chunk.choices[0].delta.content);
                        }
                        // 在comDirPath目录下创建***.en-US.md文件，如果存在则先删除再创建
                        if (chunk.choices[0].finish_reason === 'stop') {
                            const enFilePath = `${comDirPath}/${file.replace('.zh-CN.md', '.en-US.md')}`;
                            if (fs.existsSync(enFilePath)) {
                                fs.unlinkSync(enFilePath);
                            }
                            fs.writeFileSync(enFilePath, result, 'utf-8');
                            consoleTip('AI翻译完成，已保存到:' + enFilePath, 'success');
                        }
                    }
                }
            };
            if (index === files.length - 1 && !haveZhCNmdPath) {
                console.log('未找到***.zh-CN.md文件');
            };
        })
    })
}
// aiTranslateMd('./SwipeAction')

// AI为组件写测试用例
/*
* @description: AI生成测试用例
* @param {string} path - 你的需要生成测试用例组件路径
* @param {string} name - 你的需要生成测试用例组件名称
* */
async function aiWriteTestCases(targetDirPath = '',
    componentName = 'yourComponentName',
    ignoreDir = ['.md', '.less', '__test__','__tests__']) {
    // 判断路径是否存在是否有效路径
    if (!targetDirPath || !fs.existsSync(targetDirPath)) {
        throw new Error("请输入有效路径");
    };
    currentComName = componentName;
    allmyFilesCodes = '';
    let allStrResult = allmyFilesCodes = getfilesContent(targetDirPath, ignoreDir, true);
    storeAiPromptArr = [
        {"role": "system", "content": userPropmt.aiWriteTestCases.promptCfg.getSystem()},
        {"role": "user", "content": userPropmt.aiWriteTestCases.promptCfg.getUserPrompt({
            originCode: allStrResult 
        })}
    ];
     // 判断是否是为已有的测试用例修正或补充
     if (global.testsOldFiles.length > 0 && getOldTestCasesFile(global.testsOldFiles, componentName)) {
      const oldTestCasesFilePath = getOldTestCasesFile(global.testsOldFiles, componentName);
      global.storeTestCasesPath = oldTestCasesFilePath;
      consoleTip(`已检测到现有的测试用例文件(${oldTestCasesFilePath})，正在处理中...`, 'info');
      // 读取旧的测试用例文件内容
      const oldTestCasesFileContent = fs.readFileSync(oldTestCasesFilePath, 'utf-8');
      storeAssistantObj.content = oldTestCasesFileContent;
      runingTestCases(oldTestCasesFilePath, true);
      return;
    };
    const completion = await openai.chat.completions.create({
        model: userPropmt.aiWriteTestCases.model,
        messages: storeAiPromptArr,
        stream: true,
    });
    let testCaseResult = '';
    for await (const chunk of completion) {
        if (chunk.choices[0].delta.content) {
            testCaseResult += chunk.choices[0].delta.content;
            process.stdout.write(chunk.choices[0].delta.content);
        };
        if (chunk.choices[0].finish_reason === 'stop') {
            // 将testCaseResult写入targetDirPath/__tests___/xxx.test.tsx
            // 如果targetDirPath/__tests___不存在，则创建
            if (!fs.existsSync(path.join(targetDirPath, '__tests__'))) {
                fs.mkdirSync(path.join(targetDirPath, '__tests__'));
            };
            // 如果targetDirPath/__tests___/your.snapshot.test.tsx不已存在，则创建并写入固定内容
            if (!fs.existsSync(path.join(targetDirPath, '__tests__', componentName + '.snapshot.test.tsx'))) {
                fs.writeFileSync(path.join(targetDirPath, '__tests__', componentName + '.snapshot.test.tsx'), userPropmt.aiWriteTestCases.promptCfg.getSnapshotTest(componentName));
            }
            // 如果targetDirPath/__tests___/xxx.test.tsx已存在，则先删除再写入
            if (fs.existsSync(path.join(targetDirPath, '__tests__', componentName + '.test.tsx'))) {
                fs.unlinkSync(path.join(targetDirPath, '__tests__', componentName + '.test.tsx'));
            }
            try {
              // 将testCaseResult存入storeAssistantObj备用
              storeAssistantObj.content = testCaseResult;
              let _testCaseResult = testCaseResult.match(/```[a-z]*\n*([\s\S]*?)```/i)?.[1]?.trim();
              if (_testCaseResult) {
                  testCaseResult = _testCaseResult;
              };
            } catch (error) {
              console.log('正则提取代码块失败error：', error);
              testCaseResult = testCaseResult.replace(/```\w*\s*\n*/, '').replace(/```/, '');
            };
            let testcasePath = path.join(targetDirPath, '__tests__', componentName + '.test.tsx');
            fs.writeFileSync(testcasePath, testCaseResult);
            global.storeTestCasesPath = testcasePath;
            consoleTip('测试用例生成完成！', 'success');
            // 开始尝试运行测试用例
            if (config.enableAutoFix) {
              runingTestCases(testcasePath); 
            } else {
              consoleTip('温馨提示：如有需要您可以在Config中启用【AI自动修复】（enableAutoFix）功能，以自动修复测试用例运行失败的问题^_^', 'warn');
            }
        }
    }
}


const runingTestCases = async (testcasePath, isOld = false, isOptimized = false) => {
    storeStdoutInfo = '';
    // 将相对路径转换为绝对路径
    let testcaseRealPath = path.resolve(testcasePath);
    let statusText;
    if (isOptimized) {
        statusText = '<补充优化后的>';
    } else if (isOld) {
        statusText = '<现有的>';
    } else {
        statusText = '';
    }
    consoleTip(`开始尝试运行${statusText}测试用例,请稍后...(${testcaseRealPath})`, 'info');
    exec('npm run test ' + testcaseRealPath, async (error, stdout, stderr) => {
        if (error) {
            isOld && consoleTip('现有的测试用例文件运行产生错误：', 'warn');
            console.error(`exec error: ${error}`, typeof error);
            // console.error(`exec error message: ${error.message}`);
            // 检测到Test suite failed to run
            if (error?.message?.indexOf('Test suite failed to run') !== -1) {
              consoleTip(`检测到测试用例运行失败，AI正在进行修正，请稍后...`, 'info');
              if (checkMaxOptimizeTimes()) return;
              aiOptimizeTask(testcaseRealPath, testcasePath, error?.message, isOld, isOptimized);
            } else {
              let userselectVal = await input({ message: '检测到部分测试用例运行失败，AI任务将运行并进一步优化，是否继续？(y/n)：' });
              if (userselectVal === 'y') {
                if (checkMaxOptimizeTimes()) return;
                consoleTip('优化任务记数：' + aiTryConut, 'info');
                // 优化任务
                // 持续优化任务
                consoleTip(`AI持续优化任务正在执行，请稍后...`, 'info');
                aiOptimizeTask(testcaseRealPath, testcasePath, error?.message, isOld, isOptimized);
              } else {
                consoleTip('用户选择不继续优化，任务结束！您可以根据错误信息手动继续优化测试用例。', 'success');
              }
            }
            return;
        };
        // 为现有的测试用例文件进一步补充测试用例，提高单元测试覆盖率
        if (isOld && !isOptimized) {
          await getTestCoverageInfo(stdout, currentComName);
          let next = await input({ message: '请阅读以上信息提示，是否需要AI继续补充优化现有的测试用例？(y/n)：' });
          if (next != 'y') return consoleTip('任务取消成功！', 'success');
          storeStdoutInfo = stdout;
          consoleTip('现有的测试用例文件运行成功，AI正在进行补充和优化，请稍后...', 'info');
          optimizeTestCases(testcaseRealPath, testcasePath);
          return;
        } else if (isOptimized && isOld) {
          await getTestCoverageInfo(stdout, currentComName, true);
        };
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
        consoleTip('✅尝试运行测试用例成功，任务结束！您可以根据错误信息手动继续优化测试用例。', 'success');
    });
}

// 补充和优化测试用例，提高单元测试覆盖率
const optimizeTestCases = async (testcaseRealPath, testcasePath) => {
  // testcaseRealPath文件存在
  if (fs.existsSync(testcaseRealPath)) {
    const optimizePromptArr = [
      storeAiPromptArr[0],
      {
        "role": "user",
        "content": userPropmt.aiWriteTestCases.promptCfg.getOptimizePrompt({
          testCaseCode: storeAssistantObj.content,
          storeStdoutInfo,
          allmyFilesCodes,
        })
      }
    ]
    // console.log("optimizeTestCases optimizePromptArr===>", optimizePromptArr);
    const completion = await openai.chat.completions.create({
        model: userPropmt.aiWriteTestCases.model,
        messages: optimizePromptArr,
        stream: true,
    });
    let testCaseResult = '';
    for await (const chunk of completion) {
          if (chunk.choices[0].delta.content) {
              testCaseResult += chunk.choices[0].delta.content;
              process.stdout.write(chunk.choices[0].delta.content);
          };
          if (chunk.choices[0].finish_reason === 'stop') {
              storeAssistantObj.content = testCaseResult;
              if (fs.existsSync(testcaseRealPath)) {
                  fs.unlinkSync(testcaseRealPath);
              }
              try {
                let _testCaseResult = testCaseResult.match(/```[a-z]*\n*([\s\S]*?)```/i)?.[1]?.trim();
                if (_testCaseResult) {
                    testCaseResult = _testCaseResult;
                };
              } catch (error) {
                console.log('正则提取代码块失败error：', error);
                testCaseResult = testCaseResult.replace(/```\w*\s*\n*/, '').replace(/```/, '');
              };
              fs.writeFileSync(testcaseRealPath, testCaseResult);
              global.storeTestCasesPath = testcasePath;
              consoleTip('对现有测试用例优化并补充完成！', 'success');
              // 开始尝试运行测试用例
              runingTestCases(testcasePath, true, true);
          }
    }
  } else {
    consoleTip(`现有的测试用例文件(${testcaseRealPath})不存在，无法进行优化！任务结束！`, 'err');
  }
}

// 通过AI从信息中提取出测试用例对应组件的单元覆盖率信息
const getTestCoverageInfo = async (infoMsg = '', comName = '', isOptimized = false) => {
  try {
    if (!infoMsg || !comName) return;
    const CoverageInfoPromptArr = [
      storeAiPromptArr[0],
      {
        "role": "user",
        "content": userPropmt.aiWriteTestCases.promptCfg.getTestCoverageInfoPrompt({
          infoMsg,
          comName,
        })
      }
    ];
    const completion = await openai.chat.completions.create({
        model: userPropmt.aiWriteTestCases.model,
        messages: CoverageInfoPromptArr,
    });
    const completionResult = completion?.choices[0]?.message?.content || '';
    if (isOptimized) {
      consoleTip(`AI补充优化后的${comName}组件的单元覆盖率信息如下：\n${completionResult}`, 'warn');
    } else {
      consoleTip(`AI提取出的${comName}组件的当前单元覆盖率信息如下：\n${completionResult}`, 'warn'); 
    }
    return completionResult;
  } catch (error) {
    console.log('getTestCoverageInfo error：', error);
    return '';
  }
}

// 判断是否达到最大优化次数
const checkMaxOptimizeTimes = () => {
  if (aiTryConut >= maxAiTryNum) {
    aiTryConut = 0;
    consoleTip(`AI自动任务已达到最大次数(${maxAiTryNum}次)，任务结束！您可以根据错误信息手动继续优化测试用例。`, 'info');
    return true;
  };
  return false;
}

// 持续优化任务
const aiOptimizeTask = async (testcaseRealPath,
  testcasePath, errorMsg = '', isOld = false, isOptimized = false) => {
  // 读取testcaseRealPathh文件内容
  // let testcaseContent = fs.readFileSync(testcaseRealPath, 'utf-8');
  if (errorMsg) {
    aiTryConut++;
    // 构造新一轮的prompt
    const newUserPrompt = {
      role: 'user',
      content: userPropmt.aiWriteTestCases.promptCfg.getAiOptimizeTaskPrompt({
        errorMsg
      }),
    };
    const newPromptArr = [
      ...storeAiPromptArr,
      storeAssistantObj,
      newUserPrompt,
    ]
    console.log("newPromptArr===>", newPromptArr.length);
    const completion = await openai.chat.completions.create({
        model: userPropmt.aiWriteTestCases.model,
        messages: newPromptArr,
        stream: true,
    });
    let testCaseResult = '';
    for await (const chunk of completion) {
        if (chunk.choices[0].delta.content) {
            testCaseResult += chunk.choices[0].delta.content;
            process.stdout.write(chunk.choices[0].delta.content);
        };
        if (chunk.choices[0].finish_reason === 'stop') {
            storeAssistantObj.content = testCaseResult;
            // 如果targetDirPath/__tests___/xxx.test.tsx已存在，则先删除再写入
            if (fs.existsSync(testcaseRealPath)) {
                fs.unlinkSync(testcaseRealPath);
            }
            try {
              let _testCaseResult = testCaseResult.match(/```[a-z]*\n*([\s\S]*?)```/i)?.[1]?.trim();
              if (_testCaseResult) {
                  testCaseResult = _testCaseResult;
              };
            } catch (error) {
              console.log('正则提取代码块失败error：', error);
              testCaseResult = testCaseResult.replace(/```\w*\s*\n*/, '').replace(/```/, '');
            };
            fs.writeFileSync(testcaseRealPath, testCaseResult);
            global.storeTestCasesPath = testcasePath;
            consoleTip('测试用例优化生成完成！', 'success');
            // 开始尝试运行测试用例
            runingTestCases(testcasePath, isOld, isOptimized);
        }
    }
  } else {
    consoleTip('无可用优化的错误信息，AI任务执行结束！', 'success');
  }
};

// runingTestCases('../../../packages/bui-core/src/Alert/__tests__/Alert.test.tsx');

// aiWriteTestCases('./SwipeAction', 'SwipeAction');

// export default {
//     aiWriteTestCases,
//     aiTranslateMd,
// }

module.exports = { aiWriteTestCases, aiTranslateMd};
