const fse = require('fs-extra');
const { FILE_COMMENT } = require('./utils/constants');

/**
 * 生成每个组件的index.[tsx|less]入口文件
 */
const generateComponentIndex = ({ theme, codeModules }, indexPath) => {
  const demoName = `${theme.enName}Demo`;

  const importBlock = codeModules.reduce(
    (res, { componentName }) =>
      res.concat(`import ${componentName} from './${componentName}';\n`),
    `import './index.less';\nimport Taro from '@tarojs/taro';\n`,
  );

  // if (theme.enName === 'Button') {
  // debugger;
  // }

  const componentsRender = codeModules.reduce(
    (res, { componentName, descriptions }, index) =>
      res.concat(
        `<div className="demo-component">
        ${renderDesc(descriptions)}
        <${componentName} />
      </div>\n\n\t\t\t`,
      ),
    '',
  );

  const contentBlock = `\n\nconst ${demoName} = () => {
  return (
    <div className="demo-wrapper bui-default-light">
      ${componentsRender}
    </div>
  );
};

export default ${demoName};`;

  const demoFile = `${FILE_COMMENT}${importBlock}${contentBlock}`;
  const lessFile = `@import '~@bifrostui/styles/index.less';\n
.demo-wrapper {
  padding: 12px;
}
.demo-component {
  padding: 6px 0;
  border-bottom: 1px solid rgba(233,235,239,0.5);
  &:first-child {
    padding: 0 0 6px;
  }
  &:last-child {
    border-bottom: none;
  }
}
.demo-description {
  margin-bottom: 9px;
}
.heading {
  margin-bottom: 6px;
}
.paragraph {
  font-size: 15px;
  color: #484f58;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.heading-1 {
  font-size: 20px;
  font-weight: 700;
}
.heading-2 {
  font-size: 18px;
  font-weight: 500;
}
.heading-3 {
  font-size: 16px;
  font-weight: 500;
}
.heading-4 {
  font-size: 14px;
  font-weight: 400;
}
`;

  fse.writeFileSync(`${indexPath}.tsx`, demoFile);
  fse.writeFileSync(`${indexPath}.less`, lessFile);
};

const renderDesc = (descriptions) => {
  const descStr = (descriptions || []).reduce(
    (prev, desc, index) =>
      prev.concat(
        `${index === 0 ? '' : '\n\t\t\t\t\t'}<div className="${desc.type} ${
          desc?.depth ? `${desc.type}-${desc?.depth}` : ''
        }">
            ${desc.value}
          </div>`,
      ),
    '',
  );

  return `<div className="demo-description">
          ${descStr}
        </div>
    `;
};

exports.generateComponentIndex = generateComponentIndex;
