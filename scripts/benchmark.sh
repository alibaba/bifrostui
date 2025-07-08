#!/bin/bash

if [ -z "$1" ]; then
  pnpm --filter @bifrostui/react build:benchmark
  echo "🚀 The main branch control package has been generated, please go to the target branch for benchmark testing."
  exit 0
fi

COMPONENT=$1
SUBPACKAGE="packages/bui-core"
UMD_DIR="${SUBPACKAGE}/benchmarks/umd"
UMD_MAIN_DIR="${SUBPACKAGE}/benchmarks/umd-main"

if [ ! -d "$UMD_DIR" ]; then
  echo "❌ Error: $UMD_DIR The directory does not exist. Please build the UMD product first."
  exit 1
fi

if [ ! -d "$UMD_MAIN_DIR" ]; then
  echo "❌ Error: $UMD_MAIN_DIR The directory does not exist. Please ensure that the main branch control package has been generated. you can use the following commands to generate it:"
  echo "git checkout main"
  echo "pnpm --filter @bifrostui/react build:benchmark"
  exit 1
fi

pnpm --filter @bifrostui/styles build
pnpm --filter @bifrostui/react build:benchmark
if [ $? -ne 0 ]; then
  echo "Building UMD failed."
  exit 1
fi

LATEST_HTML="${SUBPACKAGE}/benchmarks/templates/latest.html"
MAIN_HTML="${SUBPACKAGE}/benchmarks/templates/main.html"
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
