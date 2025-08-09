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
      <div className="dark:bg-black">
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
