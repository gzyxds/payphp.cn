#!/bin/bash

# PayPHP.cn 构建验证脚本
echo "🔍 验证 PayPHP.cn 构建输出..."

# 检查 .next 目录是否存在
if [ ! -d ".next" ]; then
    echo "❌ .next 目录不存在，请先运行 npm run build"
    exit 1
fi

echo "✅ .next 目录存在"

# 检查关键文件
required_files=(
    ".next/server/app"
    ".next/static"
    ".next/prerender-manifest.json"
    ".next/routes-manifest.json"
)

for file in "${required_files[@]}"; do
    if [ -e "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 不存在"
        exit 1
    fi
done

# 检查页面数量
page_count=$(find .next/server/app -name "*.html" | wc -l)
echo "📄 生成的页面数量: $page_count"

# 检查静态资源
static_count=$(find .next/static -type f | wc -l)
echo "📦 静态资源文件数量: $static_count"

echo "🎉 构建验证完成！"
echo "📝 所有必要的文件都已正确生成" 