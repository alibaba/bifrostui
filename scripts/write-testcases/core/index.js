const path = require('path');
const fs = require('fs');
const {getfilesContent, openai, consoleTip} = require('./utils.js');
const userPropmt = require('./userPropmt.js');

let haveZhCNmdPath = false;

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
    let allStrResult = getfilesContent(targetDirPath, ignoreDir);
    const completion = await openai.chat.completions.create({
        model: userPropmt.aiWriteTestCases.model,
        messages: [
            {"role": "system", "content": userPropmt.aiWriteTestCases.promptCfg.getSystem()},
            {"role": "user", "content": userPropmt.aiWriteTestCases.promptCfg.getUserPrompt({
                originCode: allStrResult 
            })}
        ],
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
              let _testCaseResult = testCaseResult.match(/```[a-z]*\n*([\s\S]*?)```/i)?.[1]?.trim();
              if (_testCaseResult) {
                  testCaseResult = _testCaseResult;
              };
            } catch (error) {
              console.log('正则提取代码块失败error：', error);
              testCaseResult = testCaseResult.replace(/```\w*\s*\n*/, '').replace(/```/, '');
            };
            fs.writeFileSync(path.join(targetDirPath, '__tests__', componentName + '.test.tsx'), testCaseResult);
            consoleTip('测试用例生成完成！', 'success');
        }
    }
}

// aiWriteTestCases('./SwipeAction', 'SwipeAction');

// export default {
//     aiWriteTestCases,
//     aiTranslateMd,
// }

module.exports = { aiWriteTestCases, aiTranslateMd};
