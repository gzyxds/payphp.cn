import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "文档中心 - 易支付",
  description: "易支付系统完整文档，涵盖安装配置、使用指南、API接口和插件系统",
};

/**
 * 文档中心首页
 * 左侧导航 + 右侧欢迎区域，展示文档分类快速入口
 */
export default function DocsPage() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题区域 ===== */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            文档中心
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            欢迎来到
            <span className="text-primary dark:text-blue-400">文档中心</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            这里提供易支付系统的完整文档，涵盖安装配置、使用指南、API 接口和插件系统
          </p>
        </div>

        {/* ===== 内容区域：侧边栏 + 主体 ===== */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* 左侧导航 */}
          <aside className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
              <SidebarLink />
            </div>
          </aside>

          {/* 右侧主体 */}
          <div className="min-w-0 flex-1">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800/60 sm:p-10">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                快速开始
              </h2>
              <p className="mb-6 leading-relaxed text-gray-500 dark:text-gray-400">
                请从左侧导航栏选择您需要的文档主题，或通过下方快速入口跳转：
              </p>

              {/* 快速入口卡片 */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "系统介绍", desc: "了解核心功能和特性", slug: "system" },
                  { title: "安装指南", desc: "安装和部署系统", slug: "installation" },
                  { title: "系统配置", desc: "配置方法和最佳实践", slug: "configuration" },
                  { title: "控制面板", desc: "日常使用与管理", slug: "dashboard" },
                  { title: "API 接口", desc: "API 文档与调用示例", slug: "api" },
                  { title: "插件系统", desc: "插件的使用与管理", slug: "plugins" },
                ].map((item) => (
                  <a
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 dark:border-gray-700 dark:bg-gray-800/40 dark:hover:border-blue-800 dark:hover:bg-blue-900/20"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-blue-400">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary dark:text-gray-600 dark:group-hover:text-blue-400" />
                  </a>
                ))}
              </div>

              {/* 提示 */}
              <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/30 dark:bg-blue-900/10">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  提示：所有文档页面都支持浏览器搜索（Ctrl+F / Cmd+F），如需帮助请联系技术支持团队。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}