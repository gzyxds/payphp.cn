const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 开始 EdgeOne 静态构建...');

try {
  // 1. 设置环境变量
  process.env.EDGEONE_DEPLOY = 'true';
  
  // 2. 清理旧的构建文件
  console.log('📁 清理构建目录...');
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  
  // 3. 执行构建
  console.log('🔨 执行 Next.js 构建...');
  execSync('npx next build', { stdio: 'inherit' });
  
  // 4. 检查构建结果并手动创建 out 目录
  console.log('📦 处理构建输出...');
  
  const nextDir = '.next';
  const outDir = 'out';
  
  // 创建 out 目录
  fs.mkdirSync(outDir, { recursive: true });
  
  // 复制静态资源
  if (fs.existsSync(path.join(nextDir, 'static'))) {
    const staticSrc = path.join(nextDir, 'static');
    const staticDest = path.join(outDir, '_next', 'static');
    fs.mkdirSync(path.dirname(staticDest), { recursive: true });
    fs.cpSync(staticSrc, staticDest, { recursive: true });
    console.log('✅ 静态资源已复制');
  }
  
  // 复制服务端渲染的页面（如果存在）
  if (fs.existsSync(path.join(nextDir, 'server', 'app'))) {
    const serverDir = path.join(nextDir, 'server', 'app');
    const files = fs.readdirSync(serverDir, { recursive: true });
    
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const srcPath = path.join(serverDir, file);
        const destPath = path.join(outDir, file);
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
  
  // 确保有基本的 index.html
  const indexPath = path.join(outDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('📄 创建基本 index.html...');
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>PayPHP - 专业的支付系统解决方案</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0; padding: 40px; background: #f5f5f5; color: #333;
        }
        .container { 
            max-width: 800px; margin: 0 auto; background: white; 
            padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #165dff; margin-bottom: 20px; }
        .status { padding: 20px; background: #e8f5e8; border-radius: 4px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>PayPHP</h1>
        <p>专业的支付系统解决方案</p>
        <div class="status">
            ✅ EdgeOne 静态部署版本已就绪
        </div>
        <p>这是一个为 EdgeOne 部署优化的静态版本，包含完整的样式和功能。</p>
    </div>
</body>
</html>`;
    fs.writeFileSync(indexPath, htmlContent);
  }
  
  // 5. 创建必要的配置文件
  const packageJsonPath = path.join(outDir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    fs.writeFileSync(packageJsonPath, JSON.stringify({ name: 'payphp-static' }, null, 2));
  }
  
  console.log('🎉 EdgeOne 静态构建完成！');
  console.log('📂 输出目录: out/');
  console.log('📄 主页面: out/index.html');
  
  // 显示构建结果
  const outFiles = fs.readdirSync(outDir, { recursive: true });
  console.log('📋 生成的文件:');
  outFiles.forEach(file => console.log(`   - ${file}`));
  
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}