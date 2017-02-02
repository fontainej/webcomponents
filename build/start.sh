#!/usr/bin/env bash

set -e

sh ./build/build.sh

parallelshell "sh ./build/tasks/watch.sh" "sh ./build/tasks/serve.sh"
