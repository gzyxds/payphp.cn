/**
 * 禁用Next.js遥测脚本
 * 该脚本用于禁用Next.js的遥测数据收集
 */

const { execSync } = require('child_process');

console.log('正在禁用Next.js遥测数据收集...');

try {
  // 执行禁用遥测的命令
  execSync('npx next telemetry disable', { stdio: 'inherit' });
  console.log('✅ 成功禁用Next.js遥测数据收集');
  
  // 显示当前遥测状态
  console.log('\n当前遥测状态:');
  execSync('npx next telemetry status', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ 禁用遥测失败:', error.message);
  process.exit(1);
}