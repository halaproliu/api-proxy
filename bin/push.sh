#!/bin/bash
hasGit=`which git`
msg=${1:-'auto commit'}
if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  result=`git branch | grep "*"`
  curBranch=${result:2}]
  git add .
  git commit -m "$msg"
  echo $curBranch
  git push github $curBranch
  git push gitee $curBranch
fi
