#!/bin/bash

# PaYphp.cn 部署脚本
echo "🚀 开始部署 PaYphp.cn..."

# 检查 git 状态
echo "📋 检查 Git 状态..."
git status

# 添加所有更改
echo "📦 添加文件到 Git..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "Fix Vercel deployment issues

- Remove Windows-specific postbuild script
- Simplify build process
- Add Vercel configuration
- Fix function runtime configuration
- Fix output directory configuration
- Add npm configuration for legacy peer deps"

# 推送到远程仓库
echo "🚀 推送到 GitHub..."
git push origin main

echo "✅ 部署脚本完成！"
echo "📝 请检查 Vercel 部署状态..." 