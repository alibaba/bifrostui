#!/bin/bash
# Run vitest and cache results
set -e

# Run vitest and capture exit code
vitest run --reporter=verbose 2>&1 | \
  # Remove timestamps and variable durations to make output deterministic
  sed 's/Start at [0-9:]\+/Start at XX:XX:XX/g' | \
  sed 's/Duration [0-9.]\+s/Duration XXs/g' | \
  sed 's/([0-9.]\+ms)/(<duration>)/g' | \
  sed 's/[0-9]\+ms/<duration>/g'

exit ${PIPESTATUS[0]}

