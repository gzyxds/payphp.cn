/**
 * 静态导出脚本
 * 该脚本负责将Next.js构建产物复制到out目录，以便静态部署
 */

const fs = require('fs');
const path = require('path');

// 定义源目录和目标目录
const sourceHtmlDir = path.join(process.cwd(), '.next', 'server', 'app');
const sourceStaticDir = path.join(process.cwd(), '.next', 'static');
const targetDir = path.join(process.cwd(), 'out');
const targetStaticDir = path.join(targetDir, '_next', 'static');

// 确保目标目录存在
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`创建目录: ${dir}`);
  }
}

// 递归复制目录
function copyDirectory(source, target) {
  ensureDirectoryExists(target);
  
  const files = fs.readdirSync(source, { withFileTypes: true });
  
  for (const file of files) {
    const sourcePath = path.join(source, file.name);
    const targetPath = path.join(target, file.name);
    
    if (file.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`复制文件: ${sourcePath} -> ${targetPath}`);
    }
  }
}

// 清理目标目录
function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    console.log(`清理目录: ${dir}`);
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// 主函数
function exportStatic() {
  try {
    // 清理并创建输出目录
    cleanDirectory(targetDir);
    ensureDirectoryExists(targetDir);
    ensureDirectoryExists(path.join(targetDir, '_next'));
    
    // 复制HTML文件
    console.log('复制HTML文件...');
    copyDirectory(sourceHtmlDir, targetDir);
    
    // 复制静态资源
    console.log('复制静态资源...');
    copyDirectory(sourceStaticDir, targetStaticDir);
    
    console.log('静态导出完成!');
  } catch (error) {
    console.error('静态导出失败:', error);
    process.exit(1);
  }
}

// 执行导出
exportStatic();