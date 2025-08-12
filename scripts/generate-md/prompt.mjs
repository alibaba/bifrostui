export const generateSystemPrompt = function (mdFileName) {
  return `你是一个专业的React组件库文档编写专家。你需要遵循以下规则：
1. 文档结构应包含：组件介绍、代码演示、API文档、样式变量说明
2. 文档语言应专业、准确、简洁
3. 所有示例代码必须是可运行的完整代码
4. 表格必须严格遵循Markdown语法规范
5. 参考${mdFileName}组件的文档格式和风格`;
};

export const generateUserPrompt = function ({
  componentName,
  referenceDoc: {
    fileName,
    code: {
      component: referenceComponent,
      types: referenceTypes,
      styles: referenceStyles,
    },
    format: referenceFormat,
  },
  targetDoc: {
    code: {
      component: targetComponent,
      types: targetTypes,
      styles: targetStyles,
      layout: targetLayout,
    },
  },
}) {
  return `请基于以下信息生成${componentName}组件的markdown文档：

### 参考资料
- 参考组件(${fileName})信息：
  - 组件代码：${referenceComponent}
  - 类型定义：${referenceTypes}
  - 样式代码：${referenceStyles}
  - 文档示例：${referenceFormat}

### 目标组件信息
- 组件代码：${targetComponent}
- 类型定义：${targetTypes}
- 样式代码：${targetStyles}
- 布局组件：${targetLayout}

### 文档要求
1. 文档顶部结构内容参考：
---
group:
  title: 基本输入
  order: -1
order: -1
nav: 组件
name: Button 按钮
---

2. 代码演示
   - 使用Stack组件进行布局
   - 优先使用组件库内置组件（如Button）
   - 仅可使用@bifrostui/icons中的SettingsOutlinedIcon和HomeOutlinedIcon图标组件
   - 示例代码应该简单且具有代表性

3. API表格
   - 完整展示类型定义文件中所有被export的类型定义
   - 表格列：属性、说明、类型、默认值
   - 类型和默认值列使用\`代码块\`格式
   - 包含|符号需要转义为\\|
   - 属性说明应清晰明确

4. 样式变量表格（如果存在）
   - 表格列：属性、说明、默认值、全局变量
   - 默认值和全局变量列使用\`代码块\`格式
   - 完整展示在@{root-selector}中定义的所有CSS变量，如--bui-tab-bar-width

请确保生成的文档结构清晰、内容准确、格式规范。`;
};
