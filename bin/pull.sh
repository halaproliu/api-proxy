#!/bin/bash

git pull gitee master
if [ $? -eq 0 ];then
  echo 'pull成功'
else
  git pull origin master
fi
