#!/usr/bin/env bash

docker run --name ra3 \
-p 3033:3000 \
-v ra3_output:/usr/src/app/server \
react-apollo-3
