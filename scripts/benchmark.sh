#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide component name as parameter, for example: pnpm benchmark Button"
  exit 1
fi

COMPONENT=$1
SUBPACKAGE="packages/bui-core"

pnpm --filter @bifrostui/styles build
pnpm --filter @bifrostui/react build:umd
if [ $? -ne 0 ]; then
  echo "Building UMD failed."
  exit 1
fi

LATEST_HTML="${SUBPACKAGE}/benchmarks/latest.html"
MAIN_HTML="${SUBPACKAGE}/benchmarks/main.html"
CONFIG_JSON="${SUBPACKAGE}/benchmarks/${COMPONENT}.json"

if [ ! -f "$CONFIG_JSON" ]; then
  echo "Config file does not exist: $CONFIG_JSON"
  exit 1
fi

echo "Start Benchmark..."
npx tach "$LATEST_HTML" "$MAIN_HTML" --config "$CONFIG_JSON"

if [ $? -eq 0 ]; then
  echo "Performance testing completed."
else
  echo "Performance test failed."
fi
