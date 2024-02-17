#!/bin/bash

DOCKERFILE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

gh repo sync

docker build -t notbyte-website "$DOCKERFILE_DIR"

docker run -dp 127.0.0.1:3000:3000 notbyte-website