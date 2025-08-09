"use client";

import React, { useState } from "react";

/**
 * 博客搜索框组件
 * 提供博客文章的搜索功能
 */
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 处理搜索提交
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // 这里可以添加实际的搜索逻辑
      console.log("搜索关键词:", searchTerm);
      // 可以跳转到搜索结果页面或过滤当前页面内容
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="搜索文章..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-body-color transition-all duration-300 hover:text-primary dark:text-body-color-dark"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 17.5L13.875 13.875"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;