// 查找@{root-selector} 的内容
export const rootSelectorContentRegex = /@{root-selector}\s*{([^}]+)}/;

// 将css变量字符串转换为JSON
export const convertToJson = (str) => {
  const cleanedStr = str
    .replace(/\/\*.*?\*\//g, '') // 去除 /* ... */
    .replace(/\/\/.*?(?=\n|$)/g, '') // 去除 // ...
    .replace(/[\r\n]+/g, '') // 去除换行
    .trim(); // 去除首尾空格

  const regex = /(--[\w-]+):\s*([^;]+);/g;
  const results = {};
  let match;

  while ((match = regex.exec(cleanedStr)) !== null) {
    results[match[1]] = match[2].trim();
  }

  return results;
};
