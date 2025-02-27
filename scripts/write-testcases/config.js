const config = {
    // AI参考并学习的组件目录
    referenceDirPath: '../../packages/bui-core/src/CollapsePanel',
    // AI参考并学习的组件目录下的参考测试用文件名称
    referenceTestFileName: 'CollapsePanel.test.tsx',
    // AI参考并学习的组件目录需要过滤掉的文件后缀（或文件夹）
    referenceIgnoreDir: ['.md', '.less', '__tests__', '__test__'],
    // 使用模型的配置
    modelCfg: {
      // 翻译MD使用的模型
      translateModel: 'qwen-coder-plus',
      // 写单元测试使用的模型（测试效果较好的模型qwen-coder-plus、deepseek-v3），更多可用模型参考：https://bailian.console.aliyun.com/?spm=5176.12818093_47.resourceCenter.6.57ea16d0lfCepy#/model-market
      writeModel: 'qwen-coder-plus'
    },
    // ！！！注意：正常使用下面的配置即可，不需要修改；除非你非常清楚你自己在做什么
    // ！！！注意：正常使用下面的配置即可，不需要修改；除非你非常清楚你自己在做什么
    // ！！！注意：正常使用下面的配置即可，不需要修改；除非你非常清楚你自己在做什么
    // 需要自定义给AI加上“自动化生成测试用例”的提示词配置
    customPromptCfg: {
      // 是否完全替换默认提示词（true：完全替换，false：在默认提示词基础上追加）
      replaceDefaultPrompt: false,
      // 自定义提示词(注意：如果默认就够满足需求，就不填)
      prompt: ''
    },
}

module.exports = config;
