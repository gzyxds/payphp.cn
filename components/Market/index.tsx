/**
 * Market 组件 - 应用商店页面
 * 提供支付插件、应用主题等扩展功能的展示和管理
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gray-50 pt-20">
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

      <section className="py-8 px-4">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900">{plugin.name}</CardTitle>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <span>作者: {plugin.author}</span>
                    <span className="text-gray-300">•</span>
                    <span>{plugin.category}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-sm text-gray-600 mb-3">{plugin.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">版本:</span>
                      <span className="font-medium">{plugin.version}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">更新:</span>
                      <span>{plugin.updateTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">价格:</span>
                      <span className="font-medium text-green-600">{plugin.price}</span>
                    </div>
                  </div>

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