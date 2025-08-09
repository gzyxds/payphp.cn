# PayPHP.cn 部署指南

## 🚀 Vercel 部署

### 问题修复

我们已经修复了导致 Vercel 部署失败的问题：

1. **移除了 Windows 特定的 postbuild 脚本**
2. **简化了构建流程**
3. **添加了 Vercel 配置文件**
4. **配置了 npm 依赖安装选项**
5. **修复了函数运行时配置错误**

### 部署步骤

#### 1. 准备代码
确保您的代码已经推送到 GitHub 仓库，并且包含了以下修复：

- ✅ 更新后的 `package.json`（移除了 Windows 特定的 postbuild 脚本）
- ✅ 新增的 `vercel.json` 配置文件
- ✅ 新增的 `.npmrc` 文件

#### 2. Vercel 部署配置

在 Vercel 项目设置中，确保以下配置：

**构建配置：**
- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install --legacy-peer-deps`

**环境变量：**
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=PayPHP.cn
```

#### 3. 重新部署

1. 在 Vercel 控制台中，点击 "Redeploy" 按钮
2. 或者推送新的代码到 GitHub 触发自动部署

### 故障排除

#### 常见问题

**1. 构建失败：Command "npm run build" exited with 2**
- ✅ **已修复**: 移除了 Windows 特定的 postbuild 脚本
- 确保使用 `npm install --legacy-peer-deps` 安装依赖

**2. 函数运行时错误：Function Runtimes must have a valid version**
- ✅ **已修复**: 移除了不必要的函数运行时配置
- Vercel 会自动检测 Next.js 项目的运行时

**3. 输出目录错误：Output dir out not found**
- ✅ **已修复**: 移除了手动指定的 outputDirectory 配置
- 让 Vercel 自动检测 Next.js 的标准输出目录 (.next)

**4. 依赖安装失败**
- 检查 `.npmrc` 文件是否包含正确的配置
- 确保使用 `--legacy-peer-deps` 标志

**5. TypeScript 错误**
- 运行 `npm run type-check` 检查类型错误
- 确保所有类型定义正确

**6. MDX 相关错误**
- 检查 `markdown/` 目录中的文件格式
- 确保 front matter 格式正确

#### 调试步骤

1. **本地测试构建**
```bash
npm install --legacy-peer-deps
npm run build
```

2. **检查 TypeScript 类型**
```bash
npm run type-check
```

3. **运行代码检查**
```bash
npm run lint
```

4. **清理缓存**
```bash
npm run clean
```

### 部署验证

部署成功后，您应该看到：

- ✅ 构建日志显示 "✓ Compiled successfully"
- ✅ 所有页面都正确生成
- ✅ 静态资源正确加载
- ✅ API 路由正常工作

### 性能优化

#### 构建优化
- 代码分割已自动启用
- 静态页面预渲染
- 图片优化已配置

#### 缓存策略
- 静态资源设置了长期缓存
- API 响应设置了适当的缓存头

### 监控和维护

#### 性能监控
- 使用 Vercel Analytics 监控性能
- 检查 Core Web Vitals 指标
- 监控构建时间和包大小

#### 定期维护
- 定期更新依赖包
- 检查安全漏洞
- 优化构建配置

## 🌐 其他部署选项

### Netlify 部署

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`.next`
4. 环境变量配置同上

### 静态导出部署

如果需要静态导出：

1. 设置环境变量：`NEXT_STATIC_EXPORT=true`
2. 构建命令：`npm run build`
3. 静态文件将生成在 `out/` 目录

### Docker 部署

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## ☁️ EdgeOne 部署

### 概述

EdgeOne 是腾讯云的边缘计算和 CDN 服务，支持静态网站托管。我们已经为 EdgeOne 部署进行了特殊配置。

### 配置说明

#### 1. 静态导出配置

项目已配置为支持静态导出：

- ✅ 添加了 `EDGEONE_DEPLOY` 环境变量支持
- ✅ 配置了静态导出输出目录 (`out/`)
- ✅ 移除了不兼容的 API 路由
- ✅ 创建了静态数据文件替代 API 调用

#### 2. 构建脚本

新增了专门的 EdgeOne 构建脚本：

```bash
npm run build:edgeone
```

这个脚本会：
- 设置 `EDGEONE_DEPLOY=true` 环境变量
- 启用静态导出模式
- 生成 `out/` 目录的静态文件

### 部署步骤

#### 1. 本地构建测试

```bash
# 使用 EdgeOne 构建脚本
npm run build:edgeone

# 或者使用部署脚本
chmod +x scripts/deploy-edgeone.sh
./scripts/deploy-edgeone.sh
```

#### 2. EdgeOne 控制台配置

在腾讯云 EdgeOne 控制台中：

1. **创建静态网站托管**
   - 选择 "静态网站托管"
   - 配置域名和 SSL 证书

2. **上传静态文件**
   - 将 `out/` 目录中的所有文件上传
   - 确保包含所有 HTML、CSS、JS 和静态资源

3. **配置 CDN 设置**
   - 启用缓存优化
   - 配置缓存规则

#### 3. 域名配置

1. **添加域名**
   - 在 EdgeOne 中添加您的域名
   - 配置 DNS 解析

2. **SSL 证书**
   - 启用 HTTPS
   - 配置 SSL 证书

### 故障排除

#### 常见问题

**1. 构建失败：Output dir out not found**
- ✅ **已修复**: 使用 `npm run build:edgeone` 脚本
- 确保 `EDGEONE_DEPLOY=true` 环境变量已设置

**2. API 路由错误**
- ✅ **已修复**: 移除了 `/api/docs` 路由
- 使用静态数据文件 `lib/docs-data.ts`

**3. 静态资源加载失败**
- 检查文件路径是否正确
- 确保所有静态资源都已上传

**4. 页面路由错误**
- 确保启用了 `trailingSlash: true`
- 检查 Next.js 静态导出配置

#### 调试步骤

1. **本地测试静态导出**
```bash
npm run build:edgeone
npx serve out/
```

2. **检查构建输出**
```bash
ls -la out/
```

3. **验证静态文件**
- 检查 HTML 文件是否正确生成
- 验证静态资源路径

### 性能优化

#### EdgeOne 特定优化

- **CDN 加速**: 利用 EdgeOne 的全球 CDN 网络
- **缓存策略**: 配置适当的缓存规则
- **压缩优化**: 启用 Gzip/Brotli 压缩
- **图片优化**: 使用 WebP 格式和响应式图片

#### 构建优化

- 静态页面预渲染
- 代码分割和懒加载
- 资源压缩和优化

### 监控和维护

#### 性能监控

- 使用 EdgeOne 的性能监控
- 检查 CDN 缓存命中率
- 监控页面加载速度

#### 定期维护

- 定期更新静态内容
- 检查 CDN 配置
- 优化缓存策略

## 📞 技术支持

如果遇到部署问题：

1. 检查构建日志中的具体错误信息
2. 确认所有配置文件正确
3. 验证环境变量设置
4. 联系技术支持团队

---

**🎉 恭喜！您的 PayPHP.cn 网站应该已经成功部署到 Vercel 了！** 