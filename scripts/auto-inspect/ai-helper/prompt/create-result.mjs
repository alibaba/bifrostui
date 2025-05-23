export const systemPrompt = () =>
  '你是一位前端专家，擅长使用jQuery和DataTables库生成可视化数据报表，现在需要你根据输入的数据生成一个可视化数据报表。';

export const userPrompt = (params) => `
下面要求中，会有一些打标的标签，标签里的内容方便你来识别，标签对应关系如下：

<important></important>标签中的内容代表你需要注意的重要事项，需要仔细研读，important标签中出现<significant></significant>标签时，是特别特别要注意的点，一定要认真分析！！！

<teach></teach>标签中的内容会教你一些识别组件属性的规则和方法，teach标签中出现<notice></notice>标签时，是特别特别要注意学习的点，一定要认真理解分析！！！

<teach>
提供给你的数据数据结构如下，注意这只是部分数据，并非所有数据。
[
  {
    "taskException": false,
    "pass": false,
    "data": {
      "notReachCoverages": [
        {
          "File": "bui-core/src/Countdown/Countdown.tsx",
          "Stmts": 89.74,
          "Branch": 95,
          "Funcs": 88.88,
          "Lines": 89.74,
          "Uncovered_Line": "44-47",
          "message": "行覆盖率不足90%。"
        }
      ]
    }
  },
  {
    "taskException": false,
    "pass": false,
    "aiWarning": "AI审查结果，请谨慎参考",
    "data": {
      "Tabs": [
        {
          "suggestions": [
            {
              "message": "在.bui-tab-miniapp-active类中，line-height: 1.5应替换为line-height: var(--bui-line-height)，使用全局定义的行高变量。"
            }
          ],
          "componentName": "Tabs",
          "componentPath": "/Users/zhuchengkang/gitgub/bifrostui/packages/bui-core/src/Tabs",
          "lessPath": "/Users/zhuchengkang/gitgub/bifrostui/packages/bui-core/src/Tabs/Tab.less"
        }
      ]
    }
  }
]

<notice>
  所提供数据的数组长度为多少，就应该生产几个报表，比如，上面示例数据长度为2，则应该生成两个报表。每个报表的标题可以是所提供数据的desc字段内容拼接上“-审查结果”。
</notice>
<notice>
  notReachCoverages字段的内容是关于单元测试覆盖率的信息。
</notice>
<notice>
  带有aiWarning字段，且该字段有值的内容是AI审查的结果，在生成报表时，需要将该字段作为提示输出到对应的表格下面。
</notice>
<notice>
  taskException为true，说明任务执行有异常。
</notice>
</teach>

现在提供以下数据生成一个可直接执行的可视化数据报表：
${JSON.stringify(params, null, 2)}

要求如下：
1. 你输出的内容必须生成一个可直接执行的HTML文件，并无任何报错，注意：一定是直接可执行的html文件，不要输出额外说明或解释内容，不要生成markdown格式的内容，是直接可执行的html文件！！
2. 使用DataTables库处理数据，并生成一个可视化数据报表。
3. 生成的内容必须为HTML代码，并包含完整的HTML、head、style、body、scripts等标签。
4. 页面标题为"巡检报表"，页面中出现的文案必须为中文。
5. 在生成过程中以可用为前提，在考虑让样式尽可能好看一点，交互体验尽可能好一点，尽量不要在生成时就报错。

重点注意：
<important>
1. 不要生成markdown格式的内容，是直接可执行的、以.html为后缀名的标准html文件！！不要出现\`\`\`html \`\`\`代码块！！！

2. 提供给你的数据是一个数组，数组中的每一项，你要输出一个单独的表格，而不是把所有项放在一个表格中显示。

3. 输入的数据结构中包含aiWarning字段，且该字段有内容，则需要将该字段作为提示输出到对应的表格下面。

<significant>
4. 生成的报表中，要以展示message字段的内容为主，不要将message中的内容压缩的很紧凑。
</significant>

<significant>
5. 一定要保证提供给你的所有数据都在报表中有体现，不要漏掉data字段中的任何一项！！
</significant>
</important>

你一定要认真去看teach标签中的每一条

你一定要认真去看important标签中的每一条

最后，请你根据上面的要求，特别是<important></important>中的要求，一步一步思考，开发出一个可执行的html报表文件。
`;
