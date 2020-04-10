#!/usr/bin/env bash

set -e
set -x

gulp
./get_translations.sh '390627' 'mantle'
