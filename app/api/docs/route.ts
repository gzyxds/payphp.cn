import { NextResponse } from 'next/server';
import { getAllDocs, getDocsByCategory } from '@/lib/mdx';

/**
 * GET /api/docs - 获取所有文档的元数据列表
 * 支持查询参数：
 * - grouped=true: 返回按分类组织的文档结构
 * - grouped=false 或不传: 返回扁平的文档列表
 * @returns 返回文档列表的 JSON 响应
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const grouped = searchParams.get('grouped') === 'true';
    
    if (grouped) {
      // 返回按分类组织的文档结构
      const categories = getDocsByCategory();
      
      return NextResponse.json({
        success: true,
        data: categories,
        type: 'categorized',
        count: categories.length
      });
    } else {
      // 返回扁平的文档列表
      const docs = getAllDocs();
      
      return NextResponse.json({
        success: true,
        data: docs,
        type: 'flat',
        count: docs.length
      });
    }
  } catch (error) {
    console.error('获取文档列表失败:', error);
    
    // 返回错误响应
    return NextResponse.json(
      {
        success: false,
        error: '获取文档列表失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    );
  }
}