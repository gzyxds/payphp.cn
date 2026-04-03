import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/Docs/MDXComponents";

interface MDXContentProps {
  content: string;
}

function MDXContent({ content }: MDXContentProps) {
  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">暂无内容</p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={content} components={mdxComponents} />
    </div>
  );
}

export default MDXContent;
