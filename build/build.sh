#!/usr/bin/env bash

sh ./build/tasks/clean.sh

sh ./build/tasks/transpile.sh

sh ./build/tasks/copy.sh
