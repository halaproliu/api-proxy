#!/bin/bash
hasGit=`which git`
msg=$1
if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  result=`git branch | grep "*"`
  curBranch=${result:2}
  if [ ! $msg ];then
    msg='auto commit'
  fi
  git add .
  git commit -m $msg
  git push github $curBranch
  git push gitee $curBranch
fi
