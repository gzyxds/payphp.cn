import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "payphp-文档中心",

  // other metadata
  description: "这是payphp的文档中心，这里有payphp的使用说明、API文档、开发指南等。"
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
                  📚 欢迎来到文档中心
                </h1>

                <p className="text-body-color dark:text-body-color-dark mb-6 text-lg">
                  这里是 Solid SaaS 模板的完整文档中心。您可以在这里找到关于模板使用、自定义和部署的详细指南。
                </p>

                <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    🚀 快速开始
                  </h2>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    请从左侧导航栏选择您需要的文档主题：
                  </p>
                  <ul className="text-body-color dark:text-body-color-dark ml-6 list-disc space-y-2">
                    <li><strong>Bootstrap 模板指南</strong> - 了解如何使用 Bootstrap 模板</li>
                    <li><strong>样式指南</strong> - 掌握项目的样式规范和最佳实践</li>
                    <li><strong>Tailwind 组件</strong> - 学习如何使用和自定义 Tailwind 组件</li>
                    <li><strong>联系表单</strong> - 配置和使用联系表单功能</li>
                    <li><strong>Tailwind 模板</strong> - Tailwind CSS 模板的使用指南</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-primary">
                    💡 提示
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    所有文档都支持搜索功能，您可以使用浏览器的搜索功能（Ctrl+F 或 Cmd+F）来快速找到特定内容。
                    如果您在使用过程中遇到问题，请查看相关文档或联系技术支持。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
