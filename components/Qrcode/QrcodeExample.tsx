"use client";

import React from "react";
import Qrcode from "./index";

const QrcodeExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold">二维码组件示例</h2>
      
      {/* 基本用法 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">基本用法</h3>
        <Qrcode 
          qrcodeUrl="/images/about/weixin.png" 
          title="扫码联系客服"
          description="扫描上方二维码，获取最新资讯"
          buttonClassName="px-6 py-3 text-lg font-medium"
        />
      </div>
      
      {/* 自定义按钮样式 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">自定义按钮</h3>
        <Qrcode 
          qrcodeUrl="/images/about/weixin.png"
          title="自定义按钮样式"
          buttonText="查看二维码"
          buttonVariant="outline"
          buttonClassName="bg-blue-50 hover:bg-blue-100 px-6 py-3 text-lg font-medium"
        />
      </div>
      
      {/* 自定义二维码尺寸 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">自定义二维码尺寸</h3>
        <Qrcode 
          qrcodeUrl="/images/about/weixin.png"
          title="大尺寸二维码"
          qrcodeSize={240}
          buttonVariant="secondary"
          buttonClassName="px-6 py-3 text-lg font-medium"
        />
      </div>
    </div>
  );
};

export default QrcodeExample;