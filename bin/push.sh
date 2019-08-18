#!/bin/bash
hasGit=`which git`
if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  git add .
  git commit -m 'auto commit'
  git push github master
  # git push gitee master
fi