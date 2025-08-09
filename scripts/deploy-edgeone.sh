#!/bin/bash

# EdgeOne 部署脚本
# 用于构建和部署到腾讯云 EdgeOne

echo "🚀 开始 EdgeOne 部署..."

# 清理之前的构建
echo "🧹 清理之前的构建文件..."
rm -rf .next out

# 安装依赖
echo "📦 安装依赖..."
npm install --legacy-peer-deps

# 构建静态文件
echo "🔨 构建静态文件..."
npm run build:edgeone

# 检查构建结果
if [ -d "out" ]; then
    echo "✅ 构建成功！静态文件已生成在 out 目录中"
    echo "📁 构建文件列表："
    ls -la out/
    
    echo ""
    echo "🎉 部署准备完成！"
    echo "📋 下一步操作："
    echo "1. 将 out 目录中的所有文件上传到 EdgeOne 的静态网站托管"
    echo "2. 配置域名和 CDN 设置"
    echo "3. 验证网站功能"
else
    echo "❌ 构建失败！未找到 out 目录"
    exit 1
fi 