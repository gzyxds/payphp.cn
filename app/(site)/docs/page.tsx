import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "码支付_码支付文档_高效稳定的聚合免签约即时到账支付系统",
  keywords: ['码支付,码支付官网,爱客码支付,扫码支付,聚合支付,三方支付,四方支付,支付宝免签约,微信免签约,QQ钱包免签约,即时到账支付,leave码支付'],
  description: "码支付,聚合免签约支付系统专为个人、企业收款而生的支付系统。为支付宝、微信支付、QQ钱包等的个人账户、企业账号，提供即时到账收款接口。高效安全可靠，费率低。"
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
                  📚 欢迎来到PaYphp支付系统文档中心
                </h1>

                <p className="text-body-color dark:text-body-color-dark mb-6 text-lg">
                  这里是PaYphp支付系统的完整文档中心。您可以在这里找到关于系统安装、配置、使用和开发的详细指南。
                </p>

                <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    🚀 快速开始
                  </h2>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    请从左侧导航栏选择您需要的文档主题：
                  </p>
                  <ul className="text-body-color dark:text-body-color-dark ml-6 list-disc space-y-2">
                    <li><strong>系统介绍</strong> - 了解PaYphp 码支付系统的核心功能和特性</li>
                    <li><strong>安装指南</strong> - 学习如何安装和部署系统</li>
                    <li><strong>系统配置</strong> - 掌握系统的配置方法和最佳实践</li>
                    <li><strong>使用指南</strong> - 了解系统的日常使用方法</li>
                    <li><strong>API 接口</strong> - 学习如何使用系统提供的 API 接口</li>
                    <li><strong>插件系统</strong> - 了解如何使用和管理系统插件</li>
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
