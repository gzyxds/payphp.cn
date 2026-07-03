"use client";

import { Linkedin, Facebook, Twitter } from "lucide-react";

/** 社交分享按钮数据 */
const SHARE_LINKS = [
  { label: "LinkedIn", Icon: Linkedin, href: "#", bg: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]" },
  { label: "Facebook", Icon: Facebook, href: "#", bg: "hover:bg-[#1877F2]/10 hover:text-[#1877F2]" },
  { label: "Twitter", Icon: Twitter, href: "#", bg: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]" },
];

/**
 * 文章分享组件
 * 提供主流社交平台的分享按钮
 */
const SharePost = () => {
  return (
    <div className="mt-10 border-t border-gray-100 pt-6 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">分享文章：</span>
        <div className="flex items-center gap-1">
          {SHARE_LINKS.map(({ label, Icon, href, bg }) => (
            <a
              key={label}
              href={href}
              aria-label={`分享到 ${label}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors ${bg} dark:text-gray-500`}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharePost;