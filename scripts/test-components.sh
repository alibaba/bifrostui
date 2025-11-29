#!/bin/bash
# Test multiple components at once
# Usage: ./scripts/test-components.sh Alert Button Slide

if [ $# -eq 0 ]; then
  echo "Usage: $0 <component1> [component2] [component3] ..."
  echo "Example: $0 Alert Button Slide"
  exit 1
fi

# Build the --project flags
PROJECTS=""
for component in "$@"; do
  PROJECTS="$PROJECTS --project $component"
done

# Run vitest with all projects
pnpm vitest run $PROJECTS

