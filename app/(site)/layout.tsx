"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import ToasterContext from "../context/ToastContext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-99999 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        跳转到主要内容
      </a>
      <div className="dark:bg-background">
        <Lines />
        <Header />
        <ToasterContext />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
