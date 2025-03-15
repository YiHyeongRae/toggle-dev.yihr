import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./layouts/header";
import TanstackProvider from "./lib/tanstack/provider";

const preRegular = localFont({
  src: "./fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard-regular",
});
const preMedium = localFont({
  src: "./fonts/Pretendard-Medium.woff",
  variable: "--font-pretendard-bold",
});
const preSemiBold = localFont({
  src: "./fonts/Pretendard-SemiBold.woff",
  variable: "--font-pretendard-semibold",
});

export const metadata: Metadata = {
  title: "Toggle",
  description: "원버튼 단기&장기 보험 가입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body
        className={`${preRegular.variable} ${preSemiBold.variable} ${preMedium.variable} h-full`}
      >
        <TanstackProvider>
          <Header />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
