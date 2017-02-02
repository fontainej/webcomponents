#!/usr/bin/env bash

if [ -d public ]; then
   rm -r public
fi

if [ -d dist ]; then
   rm -r dist
fi
