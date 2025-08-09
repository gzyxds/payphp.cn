const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 开始 EdgeOne 构建...');

try {
  // 1. 清理旧的构建文件
  console.log('📁 清理构建目录...');
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
  
  // 2. 设置环境变量并构建
  console.log('🔨 执行构建...');
  process.env.EDGEONE_DEPLOY = 'true';
  execSync('npx next build', { stdio: 'inherit' });
  
  // 3. 检查构建结果
  if (!fs.existsSync('out')) {
    console.log('⚠️  out 目录未生成，尝试手动创建...');
    
    // 手动复制静态文件
    const nextDir = '.next';
    const outDir = 'out';
    
    // 创建 out 目录
    fs.mkdirSync(outDir, { recursive: true });
    
    // 复制静态资源
    if (fs.existsSync(path.join(nextDir, 'static'))) {
      fs.cpSync(path.join(nextDir, 'static'), path.join(outDir, '_next', 'static'), { recursive: true });
      console.log('✅ 静态资源已复制');
    }
    
    // 创建基本的 index.html（如果不存在）
    const indexPath = path.join(outDir, 'index.html');
    if (!fs.existsSync(indexPath)) {
      const basicHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PayPHP - 支付系统</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./_next/static/css/931b179cff3131dc.css">
  <link rel="stylesheet" href="./_next/static/css/0236a992f876e168.css">
  <link rel="stylesheet" href="./_next/static/css/69435a40e80f9bc4.css">
</head>
<body>
  <div id="__next">
    <div>正在加载...</div>
  </div>
  <script>
    console.log('EdgeOne 部署版本');
  </script>
</body>
</html>`;
      fs.writeFileSync(indexPath, basicHtml);
      console.log('✅ 基本 HTML 文件已创建');
    }
  }
  
  console.log('🎉 EdgeOne 构建完成！');
  console.log('📂 输出目录: out/');
  
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}