/**
 * Market 组件 - 应用商店页面
 * 提供支付插件、应用主题等扩展功能的展示和管理
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Sparkles, Download, Star, ChevronRight } from "lucide-react";

interface Plugin {
  id: string;
  name: string;
  author: string;
  category: string;
  status: "已安装" | "未安装";
  description: string;
  version: string;
  updateTime: string;
  price: string;
}

const Market = () => {
  const [plugins] = useState<Plugin[]>([
    {
      id: "1",
      name: "支付宝-预授权",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "支付宝-预授权",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:30:25",
      price: "免费"
    },
    {
      id: "2",
      name: "QQ钱包-☁️",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "QQ钱包",
      version: "v1.4.6",
      updateTime: "2025-01-09 23:03:19",
      price: "免费"
    },
    {
      id: "3",
      name: "监控插件 - 京东收银台",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "监控插件",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "4",
      name: "微信-NativeV3",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "微信-NativeV3",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:28:31",
      price: "免费"
    },
    {
      id: "5",
      name: "监控插件 - 支付宝",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "监控插件",
      version: "v1.4.6.8",
      updateTime: "2025-01-17 23:49:36",
      price: "免费"
    },
    {
      id: "6",
      name: "监控插件 - QQ",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "监控插件",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "7",
      name: "靓仔-微信ipad云端2[免输入]",
      author: "叫我靓仔",
      category: "支付插件",
      status: "已安装",
      description: "船新版本的ipad插件，之前的那个弃用了",
      version: "v1.0.0",
      updateTime: "2025-07-05 11:18:30",
      price: "免费"
    },
    {
      id: "8",
      name: "监控插件 - 微信",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "监控插件",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "9",
      name: "微信 - 店员",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "微信 - 店员",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:42:54",
      price: "免费"
    },
    {
      id: "10",
      name: "微信支付-JSAPI",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "微信支付-JSAPI",
      version: "v1.4.6",
      updateTime: "2025-01-20 21:56:25",
      price: "免费"
    },
    {
      id: "11",
      name: "京东收银台",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "京东收银台",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "12",
      name: "支付宝-手机支付",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "支付宝-手机支付",
      version: "v1.4.6",
      updateTime: "2025-01-17 23:48:28",
      price: "免费"
    },
    {
      id: "13",
      name: "靓仔-支付宝云端",
      author: "叫我靓仔",
      category: "支付插件",
      status: "已安装",
      description: "靓仔云端的支付宝通道插件",
      version: "v1.1.5",
      updateTime: "2025-09-04 17:32:08",
      price: "免费"
    },
    {
      id: "14",
      name: "微信收款连接-XD监控端",
      author: "未知作者",
      category: "支付插件",
      status: "未安装",
      description: "微信收款连接-XD监控端",
      version: "v1.4.6",
      updateTime: "2025-01-05 12:47:49",
      price: "免费"
    },
    {
      id: "15",
      name: "靓仔-微信PC自挂",
      author: "叫我靓仔",
      category: "支付插件",
      status: "已安装",
      description: "靓仔PC自挂的微信通道插件",
      version: "v1.0.0",
      updateTime: "2025-04-01 15:37:41",
      price: "免费"
    },
    {
      id: "16",
      name: "支付宝-电脑支付",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "支付宝-电脑支付",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:30:39",
      price: "免费"
    },
    {
      id: "17",
      name: "靓仔-微信云端",
      author: "叫我靓仔",
      category: "支付插件",
      status: "已安装",
      description: "靓仔云端的PC微信通道插件",
      version: "v1.1.0",
      updateTime: "2025-04-01 15:37:41",
      price: "免费"
    },
    {
      id: "18",
      name: "易支付",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "彩虹易支付支付协议",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:31:11",
      price: "免费"
    },
    {
      id: "19",
      name: "微信-XD",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "暂无描述",
      version: "v1.4.6.6",
      updateTime: "2025-05-31 22:31:12",
      price: "免费"
    },
    {
      id: "20",
      name: "支付宝-XD",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "闲蛋",
      version: "v1.4.8.3",
      updateTime: "2025-09-17 13:35:50",
      price: "免费"
    },
    {
      id: "21",
      name: "微信收款单-XD监控端",
      author: "未知作者",
      category: "支付插件",
      status: "未安装",
      description: "微信收款单-XD监控端",
      version: "v1.4.6.5",
      updateTime: "2025-07-02 11:12:57",
      price: "免费"
    },
    {
      id: "22",
      name: "微信-IMAC",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "微信-IMAC",
      version: "v1.4.6.7",
      updateTime: "2025-01-16 17:48:02",
      price: "免费"
    },
    {
      id: "23",
      name: "监控插件 - 微信公众号/小程序",
      author: "未知作者",
      category: "支付插件",
      status: "未安装",
      description: "微信公众号模板消息/小程序消息 目前包含:新生易 拉卡拉 闲蛋插件",
      version: "v1.4.7.3",
      updateTime: "2025-07-04 20:40:24",
      price: "免费"
    },
    {
      id: "24",
      name: "银联前置",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "银联前置",
      version: "v1.4.8",
      updateTime: "2025-07-13 21:42:12",
      price: "免费"
    },
    {
      id: "25",
      name: "V免签",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "V免签",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:29:15",
      price: "免费"
    },
    {
      id: "26",
      name: "支付宝-商家账单",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "使用商家账单进行同步支付状态",
      version: "v1.4.8.1",
      updateTime: "2025-09-17 09:39:17",
      price: "免费"
    },
    {
      id: "27",
      name: "微信-UOS",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "小工具",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "28",
      name: "支付宝-当面付",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "支付宝-当面付",
      version: "v1.4.6",
      updateTime: "2025-01-17 23:48:47",
      price: "免费"
    },
    {
      id: "29",
      name: "靓仔-支付宝PC自挂",
      author: "叫我靓仔",
      category: "支付插件",
      status: "已安装",
      description: "靓仔PC自挂的支付宝通道插件",
      version: "v1.0.0",
      updateTime: "2025-03-27 22:14:07",
      price: "免费"
    },
    {
      id: "30",
      name: "监控插件 - 拉卡拉",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "监控插件",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "31",
      name: "QQ云-XD",
      author: "匿名网友",
      category: "支付插件",
      status: "已安装",
      description: "QQ云",
      version: "v1.4.8.3",
      updateTime: "2025-05-22 16:57:14",
      price: "免费"
    },
    {
      id: "32",
      name: "监控插件 - 银盛支付",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "银盛支付",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "33",
      name: "汇付斗拱",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "汇付斗拱平台-1.4.4+版本可用",
      version: "v1.4.8",
      updateTime: "2025-07-13 21:42:53",
      price: "免费"
    },
    {
      id: "34",
      name: "虎皮椒",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "虎皮椒",
      version: "v1.4.2",
      updateTime: "2024-11-08 17:52:28",
      price: "免费"
    },
    {
      id: "35",
      name: "微信个码动态-XD监控端",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "微信个码动态-XD监控端",
      version: "v1.4.6",
      updateTime: "2025-06-03 13:43:37",
      price: "免费"
    },
    {
      id: "36",
      name: "微信-UOS-XD",
      author: "未知作者",
      category: "支付插件",
      status: "已安装",
      description: "闲蛋",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:04:27",
      price: "免费"
    },
    {
      id: "37",
      name: "微信IPAD",
      author: "匿名网友",
      category: "支付插件",
      status: "已安装",
      description: "微信IPAD",
      version: "v1.4.8.1",
      updateTime: "2025-07-13 21:40:13",
      price: "免费"
    },
    {
      id: "38",
      name: "计全Plus",
      author: "官方",
      category: "支付插件",
      status: "已安装",
      description: "计全Plus",
      version: "v1.4.5",
      updateTime: "2024-11-27 22:26:48",
      price: "免费"
    },
    {
      id: "39",
      name: "首页模板10",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板10",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:50:55",
      price: "免费"
    },
    {
      id: "40",
      name: "首页模板12",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板12",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:39:24",
      price: "免费"
    },
    {
      id: "41",
      name: "首页模板26",
      author: "官方",
      category: "首页主题",
      status: "已安装",
      description: "首页模板26",
      version: "v1.0.0",
      updateTime: "2024-09-25 16:24:43",
      price: "免费"
    },
    {
      id: "42",
      name: "HG_首页2",
      author: "嗨购",
      category: "首页主题",
      status: "未安装",
      description: "HG_首页2",
      version: "v1.0.2",
      updateTime: "2024-11-20 13:15:58",
      price: "免费"
    },
    {
      id: "43",
      name: "首页模板16",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板16",
      version: "v1.0.0",
      updateTime: "2024-09-24 22:40:31",
      price: "免费"
    },
    {
      id: "44",
      name: "首页模板23",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板23",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:28:40",
      price: "免费"
    },
    {
      id: "45",
      name: "HG_首页3",
      author: "嗨购",
      category: "首页主题",
      status: "未安装",
      description: "自定义程度高，有多个配置项被注释自己打开配置即可",
      version: "v1.0.1",
      updateTime: "2025-09-11 15:39:49",
      price: "免费"
    },
    {
      id: "46",
      name: "首页模板2",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板2",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:54:35",
      price: "免费"
    },
    {
      id: "47",
      name: "首页模板15",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板15",
      version: "v1.0.0",
      updateTime: "2024-09-24 22:44:51",
      price: "免费"
    },
    {
      id: "48",
      name: "首页模板22",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板22",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:19:46",
      price: "免费"
    },
    {
      id: "49",
      name: "首页模板-13",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-13",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:33:15",
      price: "免费"
    },
    {
      id: "50",
      name: "橙色科技风",
      author: "包子",
      category: "首页主题",
      status: "未安装",
      description: "橙色科技风首页主题",
      version: "v1.0.0",
      updateTime: "2024-09-20 17:09:22",
      price: "免费"
    },
    {
      id: "51",
      name: "首页模板-17",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-17",
      version: "v1.0.0",
      updateTime: "2024-09-24 22:25:54",
      price: "免费"
    },
    {
      id: "52",
      name: "HG_首页1",
      author: "嗨购",
      category: "首页主题",
      status: "未安装",
      description: "HG_首页1",
      version: "v1.0.0",
      updateTime: "2024-09-19 21:43:30",
      price: "免费"
    },
    {
      id: "53",
      name: "科技风主题",
      author: "包子",
      category: "首页主题",
      status: "未安装",
      description: "科技风的首页主题",
      version: "v1.0.0",
      updateTime: "2024-09-20 16:36:53",
      price: "免费"
    },
    {
      id: "54",
      name: "首页模板-21",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "21号首页主题",
      version: "v1.0.0",
      updateTime: "2024-09-24 21:28:34",
      price: "免费"
    },
    {
      id: "55",
      name: "首页模板7",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板7",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:04:05",
      price: "免费"
    },
    {
      id: "56",
      name: "首页模板4",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板4",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:15:55",
      price: "免费"
    },
    {
      id: "57",
      name: "首页模板-14",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-14",
      version: "v1.0.0",
      updateTime: "2024-09-24 22:57:49",
      price: "免费"
    },
    {
      id: "58",
      name: "首页模板1",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板1",
      version: "v1.0.1",
      updateTime: "2024-09-23 15:48:05",
      price: "免费"
    },
    {
      id: "59",
      name: "首页模板11",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板11",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:47:20",
      price: "免费"
    },
    {
      id: "60",
      name: "首页模板24",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板24",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:35:21",
      price: "免费"
    },
    {
      id: "61",
      name: "首页模板8",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板8",
      version: "v1.0.0",
      updateTime: "2024-09-24 23:58:25",
      price: "免费"
    },
    {
      id: "62",
      name: "首页模板25",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板25",
      version: "v1.0.0",
      updateTime: "2024-09-25 15:49:21",
      price: "免费"
    },
    {
      id: "63",
      name: "首页模板-19",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-19",
      version: "v1.0.0",
      updateTime: "2024-09-24 21:56:59",
      price: "免费"
    },
    {
      id: "64",
      name: "首页模板3",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板3",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:13:07",
      price: "免费"
    },
    {
      id: "65",
      name: "首页模板-20",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-20",
      version: "v1.0.0",
      updateTime: "2024-09-24 21:43:36",
      price: "免费"
    },
    {
      id: "66",
      name: "风格5",
      author: "包子",
      category: "首页主题",
      status: "未安装",
      description: "风格5",
      version: "v1.0.0",
      updateTime: "2024-09-20 17:32:36",
      price: "免费"
    },
    {
      id: "67",
      name: "首页模板-chenlun3",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "田中意提供",
      version: "v1.0.0",
      updateTime: "2024-09-24 18:27:28",
      price: "免费"
    },
    {
      id: "68",
      name: "首页模板-18",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板-18",
      version: "v1.0.0",
      updateTime: "2024-09-24 22:06:37",
      price: "免费"
    },
    {
      id: "69",
      name: "首页模板6",
      author: "官方",
      category: "首页主题",
      status: "未安装",
      description: "首页模板6",
      version: "v1.0.0",
      updateTime: "2024-09-25 00:08:08",
      price: "免费"
    },
    {
      id: "70",
      name: "HG_支付页1",
      author: "嗨购",
      category: "支付主题",
      status: "已安装",
      description: "增加复制金额",
      version: "v1.0.2",
      updateTime: "2025-11-13 16:32:26",
      price: "免费"
    },
    {
      id: "71",
      name: "现代化支付中心",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "使用现代化支付中心模板",
      version: "v1.0.1",
      updateTime: "2025-09-03 23:14:30",
      price: "免费"
    },
    {
      id: "72",
      name: "简约二次元支付页面",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "简约清新的二次元风格支付收款页面，蓝色系配色，现代化UI设计",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:20:01",
      price: "免费"
    },
    {
      id: "73",
      name: "企业收款模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "现代化企业级收款支付页面，采用全新设计风格，支持响应式布局，提供优秀的用户体验和企业专业形象",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:19:50",
      price: "免费"
    },
    {
      id: "74",
      name: "企业级支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "现代化企业支付页面 - 简洁专业，支持响应式布局",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:19:41",
      price: "免费"
    },
    {
      id: "75",
      name: "蓝色大气支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "一款蓝色主题的大气支付界面模板，适合各类商户使用",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:18:45",
      price: "免费"
    },
    {
      id: "76",
      name: "现代浮窗风格支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "现代浮窗风格支付模板",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:18:58",
      price: "免费"
    },
    {
      id: "77",
      name: "HG_支付页2",
      author: "嗨购",
      category: "支付主题",
      status: "已安装",
      description: "有问题请及时反馈；语音接口已写死，确保不会失效。",
      version: "v1.0.3",
      updateTime: "2025-09-07 18:39:49",
      price: "免费"
    },
    {
      id: "78",
      name: "简约风支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "一个极简设计风格的支付页面模板，清爽直观的界面设计",
      version: "v1.0.2",
      updateTime: "2025-09-04 09:19:21",
      price: "免费"
    },
    {
      id: "79",
      name: "小票风格支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "模拟收银小票的支付界面，简洁清晰的订单信息展示，适合各类支付场景",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:19:30",
      price: "免费"
    },
    {
      id: "80",
      name: "企业级商务支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "专为企业商户设计的专业支付界面模板，简洁大方，提升品牌形象",
      version: "v1.0.3",
      updateTime: "2025-09-04 09:18:36",
      price: "免费"
    },
    {
      id: "81",
      name: "（请勿使用）接口测试",
      author: "嗨购",
      category: "支付主题",
      status: "已安装",
      description: "（请勿使用）接口测试（请勿使用）接口测试（请勿使用）接口测试",
      version: "v1.0.1",
      updateTime: "2025-09-07 18:35:04",
      price: "免费"
    },
    {
      id: "82",
      name: "支付主题-3",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "新的支付主题,增加了SDK",
      version: "v1.4.971",
      updateTime: "2025-09-04 09:20:24",
      price: "免费"
    },
    {
      id: "83",
      name: "Kawaii二次元支付模板",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "二次元风格的可爱支付界面模板，采用粉色渐变配色和丰富的动画装饰效果，营造温馨可爱的支付体验",
      version: "v1.0.1",
      updateTime: "2025-09-04 09:18:23",
      price: "免费"
    },
    {
      id: "84",
      name: "支付模板-L2",
      author: "官方",
      category: "支付主题",
      status: "已安装",
      description: "支付模板",
      version: "v1.4.91",
      updateTime: "2025-09-04 09:20:39",
      price: "免费"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("全部应用");

  const categories = ["全部应用", "支付插件", "首页主题", "支付主题"];

  const filteredPlugins = plugins.filter(plugin => {
    return selectedCategory === "全部应用" || plugin.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - 应用商店主视觉区域 */}
      <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40">
          <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm/6 font-semibold text-blue-600 ring-1 ring-blue-600/20 ring-inset dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/25">
                  应用商店
                </span>
                <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                    <span>丰富的扩展生态</span>
                    <ChevronRight aria-hidden="true" className="size-5 text-gray-400 dark:text-gray-500" />
                  </span>
              </a>
            </div>
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
              探索海量
              <br />
              支付插件与主题
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              一键安装，轻松定制您的支付系统。探索丰富的支付插件、主题模板和扩展功能，满足您的各种业务需求。
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
              >
                浏览应用
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                上传应用 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative w-304 rounded-md bg-gray-50 ring-1 ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 p-6">
                {/* 应用商店卡片外框 */}
                <div className="relative mx-auto w-full h-[520px] bg-white rounded-3xl border border-gray-200/60 p-6 dark:bg-gray-800 dark:border-gray-700">
                  {/* 顶部状态栏 */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center dark:bg-gray-700">
                        <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center dark:bg-gray-700">
                        <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* 应用列表区域 */}
                  <div className="space-y-3">
                    {/* 应用卡片1 */}
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl dark:from-blue-900/20 dark:to-indigo-900/20">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm dark:bg-gray-700">
                        <ShoppingCart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">支付宝插件</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">官方 • 已安装</div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs px-2 py-1 dark:border-gray-600 dark:text-gray-300">
                        管理
                      </Button>
                    </div>

                    {/* 应用卡片2 */}
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl dark:from-purple-900/20 dark:to-pink-900/20">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm dark:bg-gray-700">
                        <Sparkles className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">首页主题</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">官方 • 未安装</div>
                      </div>
                      <Button size="sm" className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
                        安装
                      </Button>
                    </div>

                    {/* 应用卡片3 */}
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl dark:from-green-900/20 dark:to-emerald-900/20">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm dark:bg-gray-700">
                        <Download className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">支付主题</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">官方 • 已安装</div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs px-2 py-1 dark:border-gray-600 dark:text-gray-300">
                        管理
                      </Button>
                    </div>

                    {/* 应用卡片4 */}
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl dark:from-orange-900/20 dark:to-amber-900/20">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm dark:bg-gray-700">
                        <Star className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">监控插件</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">未知作者 • 已安装</div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs px-2 py-1 dark:border-gray-600 dark:text-gray-300">
                        管理
                      </Button>
                    </div>
                  </div>

                  {/* 底部导航 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-around bg-white rounded-full px-4 py-2 dark:bg-gray-700">
                      <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-5 h-5 mb-0.5">
                          <svg className="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 11.414l7-7a1 1 0 01-1.414-1.414L10 8.586 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 11.414l7-7a1 1 0 01-1.414-1.414L10 8.586z" />
                          </svg>
                        </div>
                        <span>首页</span>
                      </div>
                      <div className="flex flex-col items-center text-xs text-blue-600 dark:text-blue-400">
                        <div className="w-5 h-5 mb-0.5">
                          <svg className="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-6 4h1m-1 4h1" />
                          </svg>
                        </div>
                        <span>应用</span>
                      </div>
                      <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-5 h-5 mb-0.5">
                          <svg className="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                          </svg>
                        </div>
                        <span>我的</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装饰性元素 */}
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#165dff]/20 to-blue-300/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-4 px-4 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plugin.category === '支付插件' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'}`}>
                        {plugin.category === '支付插件' ? <ShoppingCart className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">{plugin.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{plugin.author}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${plugin.category === '支付插件' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'}`}>
                            {plugin.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${plugin.status === '已安装' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}>
                      {plugin.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{plugin.description}</p>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2.5 text-center">
                      <div className="text-gray-500 dark:text-gray-400 mb-1">版本</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{plugin.version}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2.5 text-center">
                      <div className="text-gray-500 dark:text-gray-400 mb-1">更新</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-xs">{plugin.updateTime.split(' ')[0]}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2.5 text-center">
                      <div className="text-gray-500 dark:text-gray-400 mb-1">价格</div>
                      <div className="font-semibold text-green-600 dark:text-green-400">{plugin.price}</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant={plugin.status === '已安装' ? 'outline' : 'default'}>
                    {plugin.status === '已安装' ? '管理' : '安装'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;