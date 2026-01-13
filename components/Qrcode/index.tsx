"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QrcodeProps {
  qrcodeUrl?: string;
  qrcodeUrl2?: string;
  title?: string;
  title2?: string;
  description?: string;
  description2?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "outline-primary" | "outline-gray";
  qrcodeSize?: number;
  buttonClassName?: string;
  modalClassName?: string;
  announcementText?: string;
  subtitle?: string;
  showAnnouncement?: boolean;
  preset?: "customer-service" | "default";
}

const Qrcode: React.FC<QrcodeProps> = ({
  qrcodeUrl,
  qrcodeUrl2,
  title,
  title2,
  description,
  description2,
  buttonText = "联系客服",
  buttonIcon,
  buttonVariant = "default",
  qrcodeSize = 180,
  buttonClassName = "",
  modalClassName = "",
  announcementText,
  subtitle,
  showAnnouncement = true,
  preset = "default",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const presetConfig = preset === "customer-service" ? {
    qrcodeUrl: qrcodeUrl || "/images/about/qq.png",
    qrcodeUrl2: qrcodeUrl2 || "/images/about/gzh.jpg",
    title: title || "添加客服微信",
    title2: title2 || "关注公众号",
    description: description || "产品咨询 / 产品授权",
    description2: description2 || "优惠活动 / 产品更新",
    announcementText: announcementText || "联系客服购买授权，关注公众号了解优惠活动和产品更新",
    subtitle: subtitle || "扫码添加客服   关注公众号了解最新优惠活动和产品更新",
    buttonText: buttonText || "联系客服",
    buttonVariant: (buttonVariant || "default") as "default" | "outline" | "secondary" | "ghost" | "link" | "outline-primary" | "outline-gray",
    buttonClassName: buttonClassName || "bg-[#0055ff] text-white shadow-lg hover:bg-[#0055ff]/90",
    buttonIcon: buttonIcon || (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
      </svg>
    ),
  } : {
    qrcodeUrl: qrcodeUrl || "",
    qrcodeUrl2,
    title: title || "扫描二维码",
    title2,
    description,
    description2,
    announcementText: announcementText || "扫码获取更多信息",
    subtitle,
    buttonText: buttonText || "显示二维码",
    buttonVariant: (buttonVariant || "default") as "default" | "outline" | "secondary" | "ghost" | "link" | "outline-primary" | "outline-gray",
    buttonClassName: buttonClassName || "",
    buttonIcon,
  };

  const isDoubleQrcode = presetConfig.qrcodeUrl2 && presetConfig.title2;

  return (
    <>
      <Button
        variant={presetConfig.buttonVariant}
        size="lg"
        onClick={openModal}
        className={presetConfig.buttonClassName}
      >
        {presetConfig.buttonIcon && <span className="mr-2">{presetConfig.buttonIcon}</span>}
        {presetConfig.buttonText}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={handleOverlayClick}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white rounded-lg shadow-2xl w-full max-w-[600px] overflow-hidden ${modalClassName}`}
              onClick={handleContentClick}
            >
              {showAnnouncement && (
                <div className="bg-primary/10 px-4 sm:px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center text-sm flex-wrap gap-1">
                    <span className="flex items-center mr-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                      <span className="text-gray-600">公告：</span>
                    </span>
                    <span className="text-primary font-medium">{presetConfig.announcementText}</span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-xl leading-none ml-2 flex-shrink-0"
                    aria-label="关闭"
                  >
                    ×
                  </button>
                </div>
              )}

              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="w-6 h-[2px] bg-primary mr-3"></span>
                    <span className="text-xs tracking-widest text-primary font-medium">SCAN QR CODE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{presetConfig.title}</h3>
                  {presetConfig.subtitle && (
                    <p className="text-sm text-gray-500">{presetConfig.subtitle}</p>
                  )}
                </div>
                
                <div className={`${isDoubleQrcode ? 'grid grid-cols-2 gap-4 sm:gap-8' : 'flex justify-center'}`}>
                  {isDoubleQrcode ? (
                    <>
                      <div className="text-center">
                        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-6 mb-3 sm:mb-4">
                          <Image
                            src={presetConfig.qrcodeUrl}
                            alt="二维码"
                            width={qrcodeSize}
                            height={qrcodeSize}
                            className="mx-auto"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{presetConfig.title}</h4>
                        {presetConfig.description && (
                          <p className="text-xs text-gray-500">{presetConfig.description}</p>
                        )}
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-6 mb-3 sm:mb-4">
                          <Image
                            src={presetConfig.qrcodeUrl2!}
                            alt="二维码"
                            width={qrcodeSize}
                            height={qrcodeSize}
                            className="mx-auto"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{presetConfig.title2}</h4>
                        {presetConfig.description2 && (
                          <p className="text-xs text-gray-500">{presetConfig.description2}</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-6 mb-3 sm:mb-4">
                        <Image
                          src={presetConfig.qrcodeUrl}
                          alt="二维码"
                          width={qrcodeSize}
                          height={qrcodeSize}
                          className="mx-auto"
                          loading="lazy"
                        />
                      </div>
                      {presetConfig.description && (
                        <p className="text-xs text-gray-500">{presetConfig.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Qrcode;