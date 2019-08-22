#!/bin/bash
hasGit=`which git`
if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  git add .
  git commit -m 'auto commit'
  git push origin master
  if [ $? -eq 0 ];then
    echo 'push成功'
  else
    git push github master
    git push gitee master
    echo 'push成功'
  fi
fi
