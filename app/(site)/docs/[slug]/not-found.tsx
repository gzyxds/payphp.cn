import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[518px] text-center">
          <div className="animate_top">
            <h1 className="mb-4 text-6xl font-bold text-black dark:text-white">
              404
            </h1>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              📄 文档未找到
            </h2>
            <p className="text-body-color dark:text-body-color-dark mb-8 text-lg">
              抱歉，您访问的文档页面不存在或已被移动。
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
              >
                📚 返回文档首页
              </Link>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-stroke px-6 py-3 text-center text-base font-medium text-black hover:bg-gray-50 dark:border-strokedark dark:text-white dark:hover:bg-gray-800"
              >
                🏠 返回首页
              </Link>
            </div>
            
            <div className="mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                💡 建议
              </h3>
              <ul className="text-body-color dark:text-body-color-dark text-left space-y-2">
                <li>• 检查 URL 是否正确</li>
                <li>• 从文档首页重新导航</li>
                <li>• 使用搜索功能查找相关内容</li>
                <li>• 联系技术支持获取帮助</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}