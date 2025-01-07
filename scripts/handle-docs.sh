
#!/bin/bash

DOC_VERSION=$1

if [ -z "$DOC_VERSION" ]; then
  echo "🚀Currently built documentation version is: latest"
else
  echo "🚀Currently built documentation version is: $DOC_VERSION"
fi

SOURCE_FILE="CNAME"
SOURCE_FOLDER="docs-dist"
DESTINATION_FOLDER="doc/$DOC_VERSION"

if [ -d "$SOURCE_FOLDER" ]; then
    mkdir -p "$DESTINATION_FOLDER"

    # move docs result
    mv "$SOURCE_FOLDER"/* "$DESTINATION_FOLDER"
    # add CNAME file
    cp "$SOURCE_FILE" "$DESTINATION_FOLDER"

    rmdir "$SOURCE_FOLDER"
else
    echo "Source directory $SOURCE_FOLDER does not exist."
fi
