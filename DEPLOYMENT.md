# PayPHP.cn 部署指南

## 🚀 Vercel 部署

### 问题修复

我们已经修复了导致 Vercel 部署失败的问题：

1. **移除了 Windows 特定的 postbuild 脚本**
2. **简化了构建流程**
3. **添加了 Vercel 配置文件**
4. **配置了 npm 依赖安装选项**

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

**2. 依赖安装失败**
- 检查 `.npmrc` 文件是否包含正确的配置
- 确保使用 `--legacy-peer-deps` 标志

**3. TypeScript 错误**
- 运行 `npm run type-check` 检查类型错误
- 确保所有类型定义正确

**4. MDX 相关错误**
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

## 📞 技术支持

如果遇到部署问题：

1. 检查构建日志中的具体错误信息
2. 确认所有配置文件正确
3. 验证环境变量设置
4. 联系技术支持团队

---

**🎉 恭喜！您的 PayPHP.cn 网站应该已经成功部署到 Vercel 了！** 