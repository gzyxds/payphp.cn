import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        // 统一 logo 容器大小：固定宽高比例，确保所有 logo 显示一致
        className="animate_top mx-auto relative flex h-12 w-24 items-center justify-center"
      >
        <Image
          // 亮色主题下的 logo 样式：统一透明度和悬停效果
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden object-contain"
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 96px, 96px"
        />
        <Image
          // 暗色主题下的 logo 样式：统一透明度和悬停效果
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block object-contain"
          src={imageLight}
          alt={name}
          fill
          sizes="(max-width: 768px) 96px, 96px"
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
