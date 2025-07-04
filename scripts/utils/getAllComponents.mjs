import fg from 'fast-glob';
import path from 'path';

const coreDir = path.resolve(
  import.meta.dirname,
  '../../packages/bui-core/src',
);
const patterns = [
  // 匹配大驼峰格式的文件夹
  `${coreDir}/[A-Z][a-zA-Z]*`,
  `!${coreDir}/locale`,
];
const options = {
  onlyDirectories: true, // 仅匹配目录
  absolute: true, // 返回绝对路径
  stats: false, // 不返回额外的文件信息
};

const getAllComponents = async () => {
  const componentPaths = await fg(patterns, options);
  const components = componentPaths.map((fullPath) => {
    const componentName = path.basename(fullPath);
    return {
      name: componentName,
      path: fullPath,
    };
  });
  return components;
};

export default getAllComponents;
