import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const BASE_URL = "https://sayenglish.com"; // TODO: 실제 도메인으로 교체

export const metadata: Metadata = {
  title: {
    default: "세이잉글리쉬어학원 | 울산 영어교육의 새로운 기준",
    template: "%s | 세이잉글리쉬어학원",
  },
  description:
    "울산 남구 세이잉글리쉬어학원은 원어민 수업, 초·중·고 내신 대비, 성인 영어회화, TOEIC/TOEFL, AI 시대 영어 활용 교육을 제공합니다.",
  keywords: [
    "울산 영어학원",
    "울산 남구 영어학원",
    "세이잉글리쉬",
    "SAY ENGLISH",
    "원어민 영어수업",
    "초등 영어학원",
    "중등 영어학원",
    "고등 영어학원",
    "성인 영어회화",
    "TOEIC 울산",
    "울산 영어",
  ],
  authors: [{ name: "세이잉글리쉬어학원" }],
  creator: "세이잉글리쉬어학원",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "세이잉글리쉬어학원",
    title: "세이잉글리쉬어학원 | 울산 영어교육의 새로운 기준",
    description:
      "울산 남구 세이잉글리쉬어학원은 원어민 수업, 초·중·고 내신 대비, 성인 영어회화, TOEIC/TOEFL, AI 시대 영어 활용 교육을 제공합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "세이잉글리쉬어학원",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "세이잉글리쉬어학원 | 울산 영어교육의 새로운 기준",
    description:
      "울산 남구 세이잉글리쉬어학원. 원어민 수업, 초·중·고 내신, 성인 영어, AI 시대 영어교육.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#111827] antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
