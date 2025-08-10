# 二维码弹窗组件 (Qrcode)

一个可复用的React组件，包含一个按钮和关联的二维码弹窗。

## 特性

- 使用TypeScript编写，提供完整类型定义
- 通过props接收二维码内容数据
- 点击按钮平滑弹出模态框展示二维码
- 包含关闭按钮和遮罩层
- 提供完整的样式封装
- 响应式设计，适配不同屏幕尺寸
- 支持暗黑模式

## 安装

该组件已集成在项目中，无需额外安装。

## 使用方法

```tsx
import Qrcode from "@/components/Qrcode";

function MyComponent() {
  return (
    <Qrcode 
      qrcodeUrl="/path/to/qrcode.png" 
      title="扫描二维码"
      description="扫描上方二维码，获取更多信息"
    />
  );
}
```

## 属性 (Props)

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| qrcodeUrl | string | - | 二维码图片URL或Base64字符串（必填） |
| title | string | "扫描二维码" | 二维码标题 |
| description | string | undefined | 二维码描述文本 |
| buttonText | string | "显示二维码" | 按钮文本 |
| buttonVariant | "default" \| "outline" \| "secondary" \| "ghost" \| "link" | "default" | 按钮样式变体 |
| qrcodeSize | number | 180 | 二维码图片尺寸（像素） |
| buttonClassName | string | "" | 自定义按钮类名 |
| modalClassName | string | "" | 自定义弹窗类名 |

## 示例

### 基本用法

```tsx
<Qrcode 
  qrcodeUrl="/images/qrcode.png" 
  title="扫码联系客服"
  description="扫描上方二维码，获取最新资讯"
/>
```

### 自定义按钮样式

```tsx
<Qrcode 
  qrcodeUrl="/images/qrcode.png"
  title="自定义按钮样式"
  buttonText="查看二维码"
  buttonVariant="outline"
  buttonClassName="bg-blue-50 hover:bg-blue-100"
/>
```

### 自定义二维码尺寸

```tsx
<Qrcode 
  qrcodeUrl="/images/qrcode.png"
  title="大尺寸二维码"
  qrcodeSize={240}
  buttonVariant="secondary"
/>
```

## 在其他项目中使用

要在其他项目中使用此组件，请确保：

1. 复制 `components/Qrcode/index.tsx` 文件到目标项目
2. 安装必要的依赖：
   - Next.js (用于Image组件)
   - Tailwind CSS
   - 如果使用了UI组件库，确保目标项目有相同的组件或进行适当修改

如果目标项目不使用Next.js，可以将Image组件替换为普通的img标签：

```tsx
<img
  src={qrcodeUrl}
  alt="二维码"
  width={qrcodeSize}
  height={qrcodeSize}
  className="mx-auto"
/>