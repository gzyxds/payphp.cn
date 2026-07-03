"use client";

import { Search } from "lucide-react";
import { useState } from "react";

/**
 * 博客搜索框
 * 带搜索图标的内联搜索输入
 */
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("搜索:", searchTerm);
      // TODO: 跳转搜索结果页
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="搜索文章..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-800 dark:focus:bg-gray-800"
      />
      <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-primary dark:text-gray-500 dark:hover:text-blue-400">
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SearchBox;