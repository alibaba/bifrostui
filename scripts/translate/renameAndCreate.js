const fs = require('fs');
const path = require('path');

// 定义src目录的路径
const srcDir = path.join(__dirname);

/**
 * 遍历目录并处理每个子文件夹
 * @param {string} dir - 当前遍历的目录路径
 */
function traverseDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`读取目录失败: ${dir}`, err);
      return;
    }

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // 处理子文件夹
        handleDirectory(fullPath);
        // 递归遍历子文件夹
        traverseDirectory(fullPath);
      }
    });
  });
}

/**
 * 处理单个目录：重命名index.md并创建index.en-US.md
 * @param {string} dir - 需要处理的目录路径
 */
function handleDirectory(dir) {
  const indexPath = path.join(dir, 'index.md');
  const zhCNPath = path.join(dir, 'index.zh-CN.md');
  const enUSPath = path.join(dir, 'index.en-US.md');

  // 检查index.md是否存在
  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      // index.md 不存在，跳过
      return;
    }

    // 重命名index.md为index.zh-CN.md
    fs.rename(indexPath, zhCNPath, (renameErr) => {
      if (renameErr) {
        console.error(`重命名文件失败: ${indexPath}`, renameErr);
        return;
      }
      console.log(`已重命名: ${indexPath} -> ${zhCNPath}`);

      // 创建index.en-US.md文件
      fs.writeFile(enUSPath, '', { flag: 'w' }, (writeErr) => {
        if (writeErr) {
          console.error(`创建文件失败: ${enUSPath}`, writeErr);
          return;
        }
        console.log(`已创建: ${enUSPath}`);
      });
    });
  });
}

// 开始遍历src目录
traverseDirectory(srcDir);
