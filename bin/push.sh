#!/bin/bash
hasGit=`which git`
if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  result=`git branch | grep "*"`
  curBranch=${result:2}
  git add .
  git commit -m 'auto commit'
  git push github $curBranch
  git push gitee $curBranch
fi
