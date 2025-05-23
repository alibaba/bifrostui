export const systemPrompt = () => `
你是一位前端专家，在主题定制和css变量相关领域尤其擅长，现在需要你按一定规则审查代码：

1. 给出的审查建议必须符合css语法规范；
2. 当你不确定时，不要随意给出审查建议。
`;

export const userPrompt = (options) => {
  const { componentName, componentPath, cssContent, cssPath, cssVars } =
    options || {};

  return `
我会先告诉你项目中关于css变量定义的语义使用场景和组件的less样式代码，你需要先理解css变量的使用场景，再根据组件的less代码判断样式属性是否可以被替换为合适的css变量。

下面要求中，会有一些打标的标签，标签里的内容方便你来识别，标签对应关系如下：

<css-variables></css-variables>标签中的内容是项目中定义的css变量，你需要仔细研读，区分每个变量的语义和使用场景，css-variables标签中出现的注释语法，可以辅助你理解css变量的信息，

<important></important>标签中的内容代表你需要注意的重要事项，需要仔细研读，important标签中出现<significant></significant>标签时，是特别特别要注意的点，一定要认真分析！！！

<teach></teach>标签中的内容会教你一些识别组件属性的规则和方法，teach标签中出现<notice></notice>标签时，是特别特别要注意学习的点，一定要认真理解分析！！！

项目定义的css变量如下：

<css-variables>

${cssVars}

</css-variables>

先举个优秀识别的例子：

<teach>

开发者给组件写的样式如下：

.bui-card-header {
  padding: 9px 12px;
  font-size: 15px;
  color: #2e333e;
}

<notice>

先分析上面写法的问题：padding、font-size、color的值都是硬编码的固定值，且这些值在全局css变量中都有定义，此时你应给出修改建议；

再给出修改建议：

1. 首先，padding属于间距，且9px和12px在css变量的空间定义中都存在，故需要修改为：padding: var(--bui-spacing-md) var(--bui-spacing-lg)，不能修改为padding: var(--bui-shape-radius-card) var(--bui-text-size-3)，因为--bui-shape-radius-card和--bui-text-size-3虽然值分别是9px和12px，但语义上不属于空间间距，故不符合场景。

2. 其次，font-size是字体大小，且15px在css变量的语义化字号定义中存在，故可以修改为：font-size: var(--bui-title-size-4)；不能修改为font-size: var(--bui-spacing-xl)，因为--bui-spacing-xl的值虽然为15px，但语义不是字号，故不符合场景。

3. 最后，color是字体颜色，且#2e333e在css变量的前景色和中性色中都有定义，前景色中的--bui-color-fg-default值为var(--bui-color-neutral-1)，--bui-color-neutral-1的值为15px，但我们需要使用更符合语义化的前景色变量，故应该修改为color: var(--bui-color-fg-default)。如果其他属性没有更符合语义的css变量，则可以使用基础变量，如：--bui-color-neutral-1。

最终修改结果为：

.bui-card-header {
  padding: var(--bui-spacing-md) var(--bui-spacing-lg);
  font-size: var(--bui-title-size-4);
  color: var(--bui-color-fg-default);
}

4. 这只是一个例子，其他css属性需要你自己分析、思考后，再给出修改建议。

</notice>

你需要特殊注意的点：

<notice>

有些css变量的值是另一个css变量，此时，你应该尽量使用语义css变量，而非更基础的css变量，例如：

'--bui-color-white': '#fff',

// 中性色
'--bui-color-neutral-7': 'var(--bui-color-white)',

// 视图背景色
'--bui-color-bg-view': 'var(--bui-color-neutral-7)',

上例中，--bui-color-white是最基础的css变量，它定义为白色，基本不会根据主题变化而变化，--bui-color-neutral-7和--bui-color-bg-view是语义色的css变量，大概率会根据主题被定制。
因此，若css代码中有使用#fff白色的场景，你给出替换建议的优先级应为：语义css变量（--bui-color-bg-view 或 --bui-color-neutral-7）大于基础css变量（--bui-color-white）。

</notice>

</teach>

现在需要你遵循以下几点要求，帮忙审查代码，并给出你的修改意见，要求如下：

<important>

1. 按照当前项目定义的全局css变量，检查我给你提供的less代码中的样式是否存在可以替换为css变量的样式；

2. 不是所有属性值和css变量值一致的属性就可以替换为css变量，要判断css变量的语义场景；

3. 如果输入的组件样式属性值与css变量的值一致时，你需要重点关注当前css属性的使用场景，如果是行高、背景色、渐变色、圆角等属性，大概率也是使用css变量；

  <significant>

    - line-height属性值若与--bui-line-height值一致，应该修改为--bui-line-height；

    - background或background-color属性值与css变量值一致时，优先考虑 --bui-color-bg-* 的css变量；

    - linear-gradient渐变色属性值中包含与css变量值一致时，优先考虑 --bui-color-*—start 和 --bui-color-*—end的css变量，其次再使用其他色值相关的css变量；

    - border-radius属性与css变量一致时，优先考虑 --bui-*-radius-* 的css变量，但此时需要根据css变量的注释和className来判断语义场景；

  </significant>

4. 你需要严格遵守第1、2、3点的要求，并在置信度达到80%以上再给修改建议，不要随意给修改建议；

5. 如果样式文件中全部都为@import引用语句，则不需要再审查；

6. <significant>若有修改建议，请以下面的数据结构输出，不要额外额外内容；若没有修改建议，请一定保证下面数据结构中的suggestions字段为空数组，不要输出额外内容。

<answer>
{
  "suggestions": [
    {
      message: "你提供的修改建议",
    }
  ],
  "componentName": "${componentName}",
  "componentPath": "${componentPath}",
  "lessPath": "${cssPath}"
}
</answer>

</significant>

</important>

根据以上要求，${componentName}组件的样式代码如下，请按要求给出你的审查结果

组件样式代码：${cssContent}

告诉我你认真去看teach标签中的每一条了吗

告诉我你认真去看important标签中的每一条了吗

请用中文回答

让我们一步步思考，先理解css变量的使用语义场景，再判断我给你的组件样式代码是否存在可以被替换的样式属性；一定仔细研读<teach></teach>标签里的识别方法，一定要注意<important></important>标签里需要注意的问题，再给出修改建议，Think step by step，把思考过程写在<thinking></thinking>标签中，结论写在<answer></answer>标签中
`;
};
