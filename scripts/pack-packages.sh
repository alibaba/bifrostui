#!/bin/bash

# 设置 packages 目录路径
PACKAGES_DIR="packages"

if [ ! -d "$PACKAGES_DIR" ]; then
  echo "$PACKAGES_DIR 目录不存在"
  exit 1
fi

# 遍历每个包
for package in "$PACKAGES_DIR"/*; do
  if [ -d "$package" ]; then
    package_name=$(basename "$package")
    echo "🚀正在压缩: $package"

    # 检查特定包的构建产物
    case "$package_name" in
      "bui-core"|"bui-icons"|"bui-utils")
        [[ -d "$package/dist" && -d "$package/es" ]] || {
          echo ">>>💔 $package 缺少构建产物dist或es目录，请确认是否执行构建命令: yarn build"
          exit 1
        }
        ;;
      "bui-styles")
        [[ -d "$package/dist" ]] || {
          echo ">>>💔 $package 缺少构建产物dist目录，请确认是否执行构建命令: yarn build"
          exit 1
        }
        ;;
      "bui-types")
        # 不需要检查构建产物
        ;;
      *)
        continue
        ;;
    esac

    # 压缩包
    cd "$package" || continue
    npm pack
    # 返回上级目录
    cd - > /dev/null
  fi
done

echo "✅所有子包压缩完成！！"
