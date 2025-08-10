"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QrcodeProps {
  /**
   * 二维码图片URL或Base64字符串
   */
  qrcodeUrl: string;
  
  /**
   * 二维码标题
   */
  title?: string;
  
  /**
   * 二维码描述文本
   */
  description?: string;
  
  /**
   * 按钮文本
   */
  buttonText?: string;
  
  /**
   * 按钮图标
   */
  buttonIcon?: React.ReactNode;
  
  /**
   * 按钮样式变体
   */
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  
  /**
   * 二维码图片尺寸
   */
  qrcodeSize?: number;
  
  /**
   * 自定义按钮类名
   */
  buttonClassName?: string;
  
  /**
   * 自定义弹窗类名
   */
  modalClassName?: string;
}

const Qrcode: React.FC<QrcodeProps> = ({
  qrcodeUrl,
  title = "扫描二维码",
  description,
  buttonText = "显示二维码",
  buttonIcon,
  buttonVariant = "default",
  qrcodeSize = 180,
  buttonClassName = "",
  modalClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // 处理点击遮罩层关闭
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        onClick={openModal}
        className={buttonClassName}
      >
        {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
        {buttonText}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={handleOverlayClick}
        >
          <Card className={`relative max-w-sm w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${modalClassName}`}>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="关闭"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {title}
              </h3>
              
              <div className="relative bg-white p-2 rounded-md mb-4">
                <Image
                  src={qrcodeUrl}
                  alt="二维码"
                  width={qrcodeSize}
                  height={qrcodeSize}
                  className="mx-auto"
                />
              </div>
              
              {description && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Qrcode;