#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'feat:自动化脚本提交'
git branch -M main
# git remote add origin https://github.com/iamdongxu/koa-api.git
git push -u origin main