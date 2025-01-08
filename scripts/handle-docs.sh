
#!/bin/bash

DOC_VERSION=$1

if [ -z "$DOC_VERSION" ]; then
  echo "not exist doc version!!"
  exit 1
fi

echo "🚀Currently built documentation version is: $DOC_VERSION"

CNAME_FILE="CNAME"
SOURCE_FOLDER="dist"
DESTINATION_FOLDER="docs-dist/$DOC_VERSION"

# 将站点静态资源产物（dist）移动到 docs-dist/[beta|v*] 目录下
if [ -d "$SOURCE_FOLDER" ]; then
    mkdir -p "$DESTINATION_FOLDER"

    # move docs result
    mv "$SOURCE_FOLDER"/* "$DESTINATION_FOLDER"

    rmdir "$SOURCE_FOLDER"
else
    echo "Source directory $SOURCE_FOLDER does not exist."
fi


if [ ! -d "$DESTINATION_FOLDER" ]; then
    mkdir -p "$DESTINATION_FOLDER"
fi

# add CNAME file
cp "$CNAME_FILE" "$DESTINATION_FOLDER"
