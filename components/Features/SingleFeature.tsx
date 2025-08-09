import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      {/* <!-- 极简功能卡片 --> */}
      <div className="group relative bg-white p-8 rounded-lg">
        {/* <!-- 标题区域 - 图标和标题在同一行 --> */}
        <div className="flex items-center gap-3 mb-4">
          {/* <!-- 图标容器 --> */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200">
            <Image
              src={icon}
              alt={title}
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>

          {/* <!-- 标题 - 与图标在同一行显示 --> */}
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        {/* <!-- 描述文字 --> */}
        <p className="text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </>
  );
};

export default SingleFeature;
