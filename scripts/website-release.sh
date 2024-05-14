#!/bin/bash

# 读取提交信息
COMMIT_MSG=$1

# 仓库
REPO_URL="http://gitlab.alibaba-inc.com/alipay-movie-client/bifrostui.git"
# 资源文件夹
SOURCE_FOLDER="docs-dist"
# 目标分支
TARGET_BRANCH="gitlab_pages/prod"

# 临时目录
TEMP_DEST="../bui_temporary_location"

# 将构建结果移到临时目录中存储起来
rm -rf $TEMP_DEST
mkdir -p $TEMP_DEST
cp -f "$SOURCE_FOLDER"/* $TEMP_DEST

if [ -z "$(ls -A $TEMP_DEST)" ]; then
   echo "💔文件拷贝失败，请检查是否执行存在 $SOURCE_FOLDER 目录，若没有，请尝试执行 yarn docs:build"
   exit 1
else
   echo "🚀文件拷贝成功"
fi

# cd bifrostui
cd `basename $REPO_URL .git`

# 更新仓库信息
git fetch
git checkout $TARGET_BRANCH
git reset --hard origin/"$TARGET_BRANCH"

# 清除未被TARGET_BRANCH目标仓库追踪的文件、文件夹
git rm -rf --cached .
git clean -fdx

cp -f "$TEMP_DEST"/* .

if [ -z "$(ls -A)" ]; then
   echo "💔当前目录为空，请检查"
   exit 1
else
   echo "🚀资源同步成功，即将为你自动提交"
fi

# # 添加、提交、推送到远程仓库的目标分支
git add .
git commit -m "$COMMIT_MSG"
git push origin $TARGET_BRANCH
echo "🚀资源已提交"

# 清理临时文件
rm -rf $TEMP_DEST
echo "🚀删除临时存储目录 $TEMP_DEST"
echo "✅完成操作"
