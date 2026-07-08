import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "필로틱 PHILOTIC | 고전의 깊이를, 오늘의 언어로",
  description:
    "필로틱은 인문·심리·자기계발의 경계에서 책을 만드는 출판 브랜드입니다. 역행자, 완벽한 원시인, 프로이트의 감정수업 등 오래 곁에 두는 책을 출간합니다.",
  openGraph: {
    title: "필로틱 PHILOTIC",
    description: "고전의 깊이를, 오늘의 언어로 — 출판 브랜드 필로틱",
    url: "https://www.philotic.co.kr",
    siteName: "필로틱",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${notoSerifKr.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
