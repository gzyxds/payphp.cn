"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ as FaqData } from "@/types/faq";

interface FAQItemProps {
  faq: FaqData;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

/**
 * FAQ 手风琴条目
 * 点击问题展开/收起答案，带平滑高度过渡动画
 */
const FAQItem = ({ faq, isOpen, onToggle }: FAQItemProps) => {
  const { id, quest, ans } = faq;

  return (
    <div className="border-b border-gray-100 last:border-none dark:border-gray-800">
      {/* 问题按钮 */}
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between gap-4 px-0 py-5 text-left transition-colors hover:text-primary dark:hover:text-blue-400"
      >
        <span className="text-base font-semibold text-gray-900 dark:text-white">
          {quest}
        </span>
        <span className="flex-shrink-0 text-gray-400 transition-colors dark:text-gray-500">
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </span>
      </button>

      {/* 答案区域 —— 带高度动画 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {ans}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;