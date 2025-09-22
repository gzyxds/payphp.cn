import { Metadata } from "next";
import { notFound } from "next/navigation";
import SidebarLink from "@/components/Docs/SidebarLink";
import { getDocData, getAllDocs, docExists } from "@/lib/mdx";
import MDXContent from "@/components/Docs/MDXContent";

// 生成静态参数
export async function generateStaticParams() {
  // 获取 MDX 文档
  const mdxDocs = getAllDocs();
  
  // 确保包含必要的静态路径
  const staticSlugs = [
    'system', 'installation', 'features', 'configuration', 
    'dashboard', 'payment', 'api', 'plugins',
    // 添加分类路径
    'getting-started', 'user-guide',
    // 添加子分类路径
    'introduction', 'setup', 'basic', 'advanced'
  ];
  
  // 从 mdxDocs 中提取 slug
  const mdxSlugs = mdxDocs.map(doc => doc.slug);
  
  // 合并所有 slug 并去重
  const slugMap: {[key: string]: boolean} = {};
  const allSlugs: string[] = [];
  
  // 添加 mdxSlugs
  for (let i = 0; i < mdxSlugs.length; i++) {
    const slug = mdxSlugs[i];
    if (!slugMap[slug]) {
      slugMap[slug] = true;
      allSlugs.push(slug);
    }
  }
  
  // 添加 staticSlugs
  for (let i = 0; i < staticSlugs.length; i++) {
    const slug = staticSlugs[i];
    if (!slugMap[slug]) {
      slugMap[slug] = true;
      allSlugs.push(slug);
    }
  }
  
  return allSlugs.map((slug) => ({ slug }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // 从 MDX 获取文档数据
  const mdxDocData = await getDocData(slug);
  
  if (!mdxDocData) {
    return {
      title: "文档未找到 -",
      description: "请求的文档页面不存在"
    };
  }

  return {
    title: `${mdxDocData.title}教程文档`,
    description: mdxDocData.description || `${mdxDocData.title} 文档页面`,
  };
}



interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  
  // 检查文档是否存在
  if (!docExists(slug)) {
    notFound();
  }

  const docData = await getDocData(slug);
  
  if (!docData) {
    notFound();
  }

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* 侧边栏导航 */}
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            {/* 主内容区域 */}
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                {/* 文档标题和元信息 */}
                <div className="mb-8 border-b border-stroke pb-8 dark:border-strokedark">
                  <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    {docData.title}
                  </h1>
                  {docData.description && (
                    <p className="text-body-color dark:text-body-color-dark mb-4 text-lg">
                      {docData.description}
                    </p>
                  )}
                  {docData.date && (
                    <div className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                      <span>发布日期: {typeof docData.date === 'string' ? docData.date : new Date(docData.date).toLocaleDateString('zh-CN')}</span>
                    </div>
                  )}
                </div>

                {/* MDX 内容渲染 */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <MDXContent content={docData.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}