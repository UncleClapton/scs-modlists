#!/usr/bin/env bash

#build wasm module
wasm-pack build --all-features
# create yarn link.
cd ./pkg || exit
yarn link
cd ../web || exit
yarn link sii-decode-rs
yarn install
cd ..
