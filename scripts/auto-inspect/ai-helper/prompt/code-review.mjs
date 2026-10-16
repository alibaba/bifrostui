import fse from 'fs-extra';

export const systemPrompt = () => `
你是一位前端开发专家，精通前端流行框架，尤其擅长使用React（版本是react17和react18）、typescript、less等前端技术，你熟练掌握React的各种最佳实践，现在我提供给你一系列使用React或js实现的代码，请你对代码进行审查，将不合理的实现梳理出来。你在审查代码时，需要遵守以下几点要求：
1. 给出的审查建议必须有详细说明，包括原因和修改建议。
2. 当你不确定时，不要随意给出审查建议。
3. 我提供给你审查的代码中包含小程序的实现，可能有些逻辑需要特殊处理，你可以根据代码中的注释、isMini、isMiniapp和以.miniapp.ts/.miniapp.tsx结尾的文件来辅助判断是否为小程序兼容处理逻辑，这部分代码的审查严格性可适当放宽。
`;

const getCodeContent = (paths, fileType) => {
  let codeContent = '';
  for (const file of paths) {
    codeContent += `
路径<path>${file}</path>的代码实现如下：
<${fileType}>
  ${fse.readFileSync(file, 'utf-8')}
</${fileType}>
`;
  }

  return codeContent;
};

export const userPrompt = (options) => {
  const {
    componentName,
    componentPath,
    tsxFiles,
    typesFiles,
    lessFiles,
    extraFiles,
  } = options || {};

  return `
我会先告诉你项目中组件的实现代码，并在规定的标签中告知你React实现的tsx代码、类型定义代码、less样式代码，以及一些额外代码，方便你理解。

下面要求中，会有一些打标的标签，标签里的内容方便你来识别，标签对应关系如下：

<path></path>标签中的内容是每个代码文件的路径，方便你理解文件之间的引用关系，

<tsx></tsx>标签中的代码是组件的主体实现，你要重点关注这部分代码的审查，

<types></types>标签中的代码是组件的ts类型定义，你要重点关注这部分代码的审查，判断ts类型定义是否合理，

<less></less>标签中的代码是组件的less样式代码，你要重点关注这部分代码的审查，深入理解less语法，判断less样式代码是否合理，是否存在重复属性、选择器嵌套超过2层、不必要的!important等问题，

<extrats></extrats>标签中的代码是组件依赖的额外代码，你要重点关注这部分代码的审查，判断是否存在优化空间。

<important></important>标签中的内容代表你需要注意的重要事项，需要仔细研读，important标签中出现<significant></significant>标签时，是特别特别要注意的点，一定要认真分析！！！

下面我将告诉你${componentName}组件代码实现：

${getCodeContent(tsxFiles, 'tsx')}

${getCodeContent(typesFiles, 'types')}

${getCodeContent(lessFiles, 'less')}

${getCodeContent(extraFiles, 'extrats')}

下面我将告诉你在对${componentName}组件进行审查时，需要重点注意的事项：

<important>
1. React18.3版本之后，对于函数组件，defaultProps已被标记为deprecated，你要将使用defaultProps的地方审查出来，未使用defaultProps的组件，不用给出修改建议。

2. 每个组件都会有单元测试，我没有将单元测试提供给你，你不要审查是否有单元测试文件。

3. 每个组件都会有文档，我没有将文档提供给你，你不要审查是否有文档。

4. 你要从以下几个方面来给出审查、修改建议：
  - 性能优化：是否有不必要的重复渲染等代码实现；
  - 类型安全：TypeScript类型定义是否合理、准确等；
  - 可访问性：组件是否添加无障碍属性等；
  - 代码规范：变量命名是否更具描述性、是否使用常量等；
  - 组件结构：是否可抽成独立子组件等

5. <significant>若有修改建议，请以下面的数据结构输出，不要额外额外内容；若没有修改建议，请一定保证下面数据结构中的suggestions字段为空数组，不要输出额外内容。

<answer>
{
  "suggestions": [
    {
      path: "将需要修改的文件路径在此处输出",
      message: "给出你提供的总结性的修改建议，不需要代码片段",
    }
  ],
  "componentName": "${componentName}",
  "componentPath": "${componentPath}",
}
</answer>

</significant>

</important>

告诉我你认真去看important标签中的每一条了吗

请用中文回答

让我们一步步思考，先根据各个标签中的代码理解其实现含义，再根据<important></important>里的重点事项来给出审查、修改建议，Think step by step，把思考过程写在<thinking></thinking>标签中，结论写在<answer></answer>标签中
`;
};
