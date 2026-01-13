# PaYphp.cn 项目规范文档

## 1. 项目概述

PaYphp.cn 是一个基于 Next.js 15 构建的现代化支付解决方案展示网站，专为支付服务提供商、金融科技公司和需要集成支付功能的企业设计。该项目采用最新的 React 19、TypeScript 和 Tailwind CSS 技术栈，提供完整的企业级网站解决方案。

### 1.1 技术栈

- **前端框架**: Next.js 15, React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS 4.x, Radix UI 组件
- **内容管理**: MDX 支持
- **包管理器**: pnpm

## 2. 目录结构规范

```
PaYphp.cn/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 (site)/            # 站点主要页面组
│   │   ├── 📁 about/         # 关于我们页面
│   │   ├── 📁 auth/          # 用户认证页面
│   │   ├── 📁 blog/          # 博客页面
│   │   ├── 📁 docs/          # 文档页面
│   │   ├── 📁 industry/      # 行业解决方案
│   │   ├── 📁 products/      # 产品介绍
│   │   ├── 📁 support/       # 技术支持
│   │   ├── layout.tsx        # 站点布局组件
│   │   └── page.tsx          # 首页
│   ├── 📁 context/           # React Context
│   ├── globals.css           # 全局样式
│   └── layout.tsx            # 根布局
├── 📁 components/            # React 组件库
│   ├── 📁 [功能模块]/        # 按功能模块组织的组件
│   └── 📁 ui/                # 通用UI组件
├── 📁 lib/                   # 工具函数和服务
├── 📁 markdown/              # MDX内容
│   ├── 📁 blog/              # 博客内容
│   └── 📁 docs/              # 文档内容
├── 📁 public/                # 静态资源
│   └── 📁 images/            # 图片资源
└── 📁 types/                 # TypeScript类型定义
```

## 3. 编码规范

### 3.1 TypeScript

- 使用 TypeScript 进行类型检查和代码提示
- 为所有组件、函数和变量定义明确的类型
- 使用接口（Interface）定义组件 Props
- 避免使用 `any` 类型，优先使用 `unknown` 或具体类型

```typescript
// 推荐的组件 Props 定义方式
interface ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  onClick?: () => void;
}
```

### 3.2 React 组件

- 使用函数组件和 React Hooks
- 组件文件使用 PascalCase 命名（如 `Button.tsx`）
- 组件目录使用 PascalCase 命名（如 `Header/`）
- 每个组件目录使用 `index.tsx` 作为主入口
- 为复杂组件添加 JSDoc 注释，说明组件用途和参数

```typescript
/**
 * 主导航组件
 * 负责网站顶部导航栏的渲染和交互
 */
const Header = () => {
  // 组件实现
};

export default Header;
```

### 3.3 样式规范

- 使用 Tailwind CSS 进行样式开发
- 遵循移动优先（Mobile First）的响应式设计原则
- 使用 Tailwind 的主题配置进行颜色、间距等定制
- 复杂组件可使用 CSS Modules 或 styled-components
- 使用 Radix UI 组件库作为基础 UI 组件

```tsx
// 使用 Tailwind 类名的示例
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
  按钮文本
</button>
```

### 3.4 文件命名规范

- React 组件文件：PascalCase（如 `Button.tsx`）
- 工具函数文件：camelCase（如 `formatDate.ts`）
- 常量文件：kebab-case（如 `api-endpoints.ts`）
- 类型定义文件：camelCase（如 `userTypes.ts`）

## 4. 状态管理

- 使用 React Context API 进行全局状态管理
- 简单状态使用 `useState` 和 `useReducer`
- 复杂状态考虑使用 Zustand 或 Jotai

## 5. 路由规范

- 使用 Next.js App Router 进行路由管理
- 页面组件放置在对应的路由目录下
- 使用 `layout.tsx` 定义共享布局
- 使用 `page.tsx` 作为路由页面组件
- 使用 `loading.tsx` 定义加载状态
- 使用 `error.tsx` 定义错误处理

## 6. API 和数据获取

- 使用 Next.js API Routes 创建后端 API
- 使用 React Query 或 SWR 进行数据获取和缓存
- API 请求函数统一放在 `lib/api` 目录下

## 7. SEO 最佳实践

- 使用 Next.js 的 Metadata API 配置 SEO 元数据
- 为每个页面提供唯一的标题和描述
- 实现结构化数据（Schema.org）
- 配置 `robots.txt` 和 `sitemap.xml`

```typescript
// 页面元数据配置示例
export const metadata: Metadata = {
  title: "产品介绍 | PaYphp.cn",
  description: "PaYphp.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
  keywords: ["支付", "PaYphp", "支付解决方案"],
};
```

## 8. 性能优化

- 使用 Next.js 的静态生成（SSG）和增量静态再生成（ISR）
- 实现组件懒加载和代码分割
- 优化图片使用 Next.js Image 组件
- 实现适当的缓存策略
- 减少不必要的客户端 JavaScript

## 9. 无障碍（A11y）规范

- 遵循 WCAG 2.1 AA 级标准
- 使用语义化 HTML 元素
- 提供适当的 ARIA 属性
- 确保键盘导航支持
- 维持足够的颜色对比度

## 10. 测试规范

- 使用 Jest 进行单元测试
- 使用 React Testing Library 进行组件测试
- 使用 Cypress 进行端到端测试
- 测试文件使用 `.test.ts` 或 `.spec.ts` 后缀

## 11. 文档规范

- 使用 JSDoc 注释记录组件和函数
- 为复杂逻辑添加行内注释
- 维护 README.md 文件，包含项目概述、安装和使用说明
- 使用 Markdown 编写技术文档

## 12. Git 工作流

- 使用 Git Flow 或 GitHub Flow 工作流
- 分支命名：`feature/`, `bugfix/`, `hotfix/`, `release/`
- 提交信息遵循 Conventional Commits 规范
- 使用 Pull Request 进行代码审查

## 13. 部署流程

- 使用 Vercel 或其他平台进行自动部署
- 配置持续集成和持续部署（CI/CD）
- 使用环境变量管理不同环境的配置
- 实施预发布环境测试

## 14. 安全最佳实践

- 实施内容安全策略（CSP）
- 使用 HTTPS 加密
- 防止 XSS 和 CSRF 攻击
- 安全处理用户输入和数据
- 定期更新依赖包

## 15. 国际化和本地化

- 使用 next-intl 或 react-i18next 进行国际化
- 文本内容使用翻译键而非硬编码
- 支持多语言切换
- 考虑日期、货币和数字的本地化格式

---

本文档旨在规范 PaYphp.cn 项目的开发流程和代码质量，所有团队成员应遵循上述规范进行开发。规范可根据项目需求和团队反馈进行调整和完善。
