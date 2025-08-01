import mdastFromMarkdown from 'mdast-util-from-markdown';
import pinyin from 'pinyin';
import fse from 'fs-extra';
import path from 'path';

const coreDir = path.resolve(
  import.meta.dirname,
  '../../packages/bui-core/src',
);
const iconsDir = path.resolve(
  import.meta.dirname,
  '../../packages/bui-icons/src',
);

const flatten = (arr) => {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
};

/** 解析markdown代码模块 */
const parseCodeModules = (modules, theme, index) => {
  // if (theme.enName === 'Tabs') {
  //   debugger;
  // }
  const codeItem = modules.find((moduleItem) => moduleItem.type === 'code');

  let code = '';
  if (codeItem) {
    code = codeItem.value;
  } else {
    let childrenItem;
    // 处理<code src="xxx">
    const isCodeFlagModule = modules.some((module) =>
      (module.children || []).find((it) => {
        childrenItem = it;
        return (it?.value || '')?.includes('<code');
      }),
    );
    if (isCodeFlagModule && childrenItem) {
      const reg = /(?<=src=(['|"])).*?(?=(['|"]))/gi;
      const relativePath = `${childrenItem.value}`.match(reg)?.[0];
      const isSvgIcons = theme.enName === 'Icons';
      const rootDir = isSvgIcons ? iconsDir : coreDir;
      const realPath = path.join(
        rootDir,
        isSvgIcons ? './' : theme.enName,
        relativePath,
      );
      code = fse.readFileSync(realPath, 'utf-8');
      if (isSvgIcons) {
        // TODO 暂时对SVG demo/index.tsx中的import相对路径做特殊处理
        code = code
          .replace('../components', `${iconsDir}/components`)
          .replace('./index.less', `${iconsDir}/demo/index.less`);
      }
    }
  }
  const codeModule = {
    no: index + 1,
    descriptions: [],
    componentName: `${theme?.enName}Demo${index + 1}`,
    code,
  };

  modules.forEach((item) => {
    const { type, depth, children } = item;
    const childs = children ? getChildrenValues(children) : [];
    if (
      type !== 'code' &&
      !childs.some((it) => `${it?.value}`?.includes('<code'))
    ) {
      if (type === 'list') {
        childs.forEach((child) => {
          codeModule.descriptions.push({
            type,
            depth,
            value: child.value,
          });
        });
      } else {
        codeModule.descriptions.push({
          type,
          depth,
          value: (childs || []).reduce(
            (prev, child) => prev.concat(child?.value || ''),
            '',
          ),
        });
      }
    }
  });

  return codeModule;
};

const getChildrenValues = (nodeList = [], result = []) => {
  nodeList.forEach((node) => {
    if (node.children) {
      getChildrenValues(node.children, result);
    } else {
      const { type, depth, value } = node;
      result.push({ type, depth, value });
    }
  });
  return result;
};

/** 解析markdown主题 */
const parseTheme = (theme) => {
  if (!theme) return;
  // 截取group:和name:之间的字符串
  const groupReg = /(?<=group([:|：]))(.|\n|\r)*?(?=name([:|：]))/gi;
  const groupStr = theme?.match(groupReg)?.[0];
  let groupName = groupStr?.replace(/\s/g, ''),
    order = 0;
  if (/title/.test(groupStr)) {
    // 截取title:和\n之间的字符串
    const titleReg = /(?<=title([:|：]\s*))\S*?(?=\n)/gi;
    groupName = groupStr?.match(titleReg)?.[0]?.replace(/\s/g, '');
  }
  if (/order/.test(groupStr)) {
    // 截取order:和\n之间的字符串
    const orderReg = /(?<=order([:|：]\s*))\S*?(?=\n)/gi;
    order = groupStr?.match(orderReg)?.[0].replace(/\s/g, '');
    order = order ? +order : 0;
  }
  const groupEnName = flatten(
    pinyin(groupName, { style: pinyin.STYLE_NORMAL }),
  ).join('');
  const componentTitle = theme?.split(/name[:|：]/)?.[1]?.trim();
  const componentInfo = componentTitle?.split(/\s/)?.filter((item) => !!item);

  return {
    order,
    groupName,
    groupEnName,
    componentTitle: componentTitle?.replace(/\s/, ''),
    enName: componentInfo?.[0],
    zhName: componentInfo?.[1],
  };
};
const formatMarkdown = (mdPath) => {
  const content = fse.readFileSync(mdPath, 'utf-8');
  // if (mdPath.includes('Tabs')) {
  //   debugger;
  // }
  const mdAst = mdastFromMarkdown(content)?.children || [];
  const contentAst = mdAst.filter(
    (item) =>
      ['heading', 'paragraph', 'list'].includes(item.type) ||
      (item.type === 'code' && /^[j|t]sx$/g.test(item?.lang)),
  );
  // contentAst第1项为分组信息，剔除
  const themeStr = (contentAst.splice(0, 1)?.[0]?.children || []).find((item) =>
    (item?.value || '')?.includes('group:'),
  ).value;
  const theme = parseTheme(themeStr);

  const codeAstList = [];
  let inx = 0;
  contentAst.forEach((child, index) => {
    const isCodeFlag = (child.children || []).some((it) =>
      it.value?.includes('<code'),
    );
    if (child?.type === 'code' || isCodeFlag) {
      codeAstList.push(contentAst.slice(inx, index + 1));
      inx = index + 1;
    }
  });

  // if (mdPath.includes('Tabs')) {
  //   codeAstList;
  //   debugger;
  // }

  // markdown文件信息
  const mdFile = {
    theme,
    codeModules: [],
  };
  codeAstList.forEach((modules, index) => {
    const codeModule = parseCodeModules(modules, theme, index);
    mdFile.codeModules.push(codeModule);
  });

  return mdFile;
};

export { flatten, formatMarkdown };
