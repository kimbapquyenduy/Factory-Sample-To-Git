#!/bin/bash
declare repo_name=$1

repo_list=("factory-mes-domain" "factory-bff")

if printf '%s\n' "${repo_list[@]}" | grep -q "^$repo_name$"; then
    echo "The value '$repo_name' exists in the repo list."
else
    echo "The value '$repo_name' does not exist in the list. Please enter the right value"
    exit 1;
fi

cp -r ./src/app ./dist/app 
cp -r ./dist ../$repo_name/node_modules/@clv-factory/protobuf