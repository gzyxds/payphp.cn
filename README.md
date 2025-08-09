# Solid - 免费的Next.js网页模板和SaaS启动套件

Solid是一个专为初创公司、SaaS和软件网站精心设计的免费Next.js模板。它提供了构建任何SaaS、软件或初创公司网站所需的大量必要部分、元素和页面。配备了所有前沿的React和Next.js功能 - **基于Next.js 13、React 18和TypeScript构建**。

这个Next.js模板的主页包含了一个很棒的hero区域、关联品牌的标志、功能部分、关于部分、另一个带标签的功能部分、计数器和星级评分、集成选项、清晰的行动号召、带手风琴的FAQ部分、推荐部分、价格表、联系页面、博客和独特的页脚。

**Solid Next.js模板包含所有必要的外部页面** - 如登录、注册、博客网格和单个博客页面等。这个广泛的页面集合提供了创建功能丰富、全面且视觉吸引人的软件、Web应用程序或SaaS网站或登录页面所需的所有工具。

### [🔥 获取Solid Pro - Next.js SaaS样板和启动套件](https://nextjstemplates.com/templates/solid)

### [🚀 Solid PRO现场演示](https://solid.nextjstemplates.com/)

### [🚀 Solid FREE现场演示](https://solid-free.nextjstemplates.com/)

### Solid PRO vs Solid FREE比较 📊

#### [Solid PRO](https://solid.nextjstemplates.com/)
- 带有基本集成和功能的SaaS样板+启动套件
- 基本集成：认证、数据库、Stripe、MDX等...
- 功能齐全、即用型Sanity博客支持
- 高级电子邮件支持
- 功能性外部页面
- 免费终身未来更新
___
#### [Solid FREE](https://solid-free.nextjstemplates.com/)
- 仅UI - 为Next.js编码
- 无集成
- 无功能性博客系统
- 无功能/集成的外部页面
- 社区支持
- 免费终身未来更新
___

### [📦 下载](https://nextjstemplates.com/templates/solid)

### [🔥 获取专业版](https://nextjstemplates.com/templates/solid)

### [🔌 文档](https://nextjstemplates.com/docs)

### ⚡ 立即部署

[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fsolid-nextjs)

[![使用Netlify部署](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NextJSTemplates/solid-nextjs)


## 安装

以下是安装依赖项需要遵循的步骤。

1.从**Next.js模板**下载并解压模板。

2.**cd**进入模板目录，然后运行以下命令安装所有依赖项
    
```bash
    npm install --legacy-peer-deps
```
**注意：** 目前React 19与某些包存在对等依赖问题，因此需要`legacy-peer-deps`标志。

您可以在本地服务器上启动项目
    
```bash
    npm run dev
 ```

它将在[localhost:3000](http://localhost:3000)上启动模板。

文档包含了集成所需的所有指南。


### 在PaaS上部署

如果您使用GitHub仓库，那么您可以选择免费且易于使用的选项，如[Vercel](https://vercel.com/)或[Netlify](https://netlify.com/)，它们为Next.js托管提供了不错的免费套餐。

### 📄 许可证
Solid Free是100%免费和开源的，可用于您的个人和商业项目。

### 💜 支持
如果您喜欢这个模板，请给这个仓库点星，以激励团队创建更多这样的内容，并吸引更多像您这样的用户！

### ✨ 浏览和下载 - 最佳免费[Next.js模板](https://nextjstemplates.com/templates)

### 更新日志

**2025年4月10日**
- 将eslint更新到v9.24.0以解决安装期间的对等依赖警告。
- 迁移到tailwind v4

**2025年1月29日**
- 升级到Next.js 15
- 将framer-motion更新到v12.0.6以支持React 19。



## ✅ 已成功添加本地启动脚本到 package.json
我为您的 `package.json` 添加了多个有用的本地启动和开发脚本：

### 🚀 本地启动脚本
基础启动 :

- npm run dev - 默认启动开发服务器
- npm run local - 在3000端口启动本地服务器
- npm run serve - 启动开发服务器（别名）
指定端口启动 :

- npm run dev:3000 - 在3000端口启动
- npm run dev:3001 - 在3001端口启动
- npm run dev:3002 - 在3002端口启动
高级启动选项 :

- npm run dev:turbo - 使用Turbo模式启动（更快的热重载）
- npm run dev:debug - 启动调试模式（支持Node.js调试器）
### 🔧 构建和生产脚本
构建相关 :

- npm run build - 构建生产版本
- npm run build:analyze - 构建并分析包大小
- npm run preview - 构建并预览生产版本
生产启动 :

- npm run start - 启动生产服务器
- npm run start:prod - 在3000端口启动生产服务器
### 🛠️ 开发工具脚本
代码质量 :

- npm run lint - 运行ESLint检查
- npm run lint:fix - 自动修复ESLint错误
- npm run type-check - 运行TypeScript类型检查
清理工具 :

- npm run clean - 清理构建缓存和输出文件
### 💡 使用建议
日常开发推荐 :

```
npm run local        # 快速启动本地开
发
npm run dev:turbo    # 更快的开发体验
```
多端口开发 :

```
npm run dev:3000     # 主项目
npm run dev:3001     # 测试环境
npm run dev:3002     # 演示环境
```
部署前检查 :

```
npm run type-check   # 检查类型错误
npm run lint:fix     # 修复代码规范
npm run preview      # 预览生产版本
```
现在您可以使用这些新添加的脚本来更灵活地管理您的 PayPHP Next.js 项目的本地开发环境！