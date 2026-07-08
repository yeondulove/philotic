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
  title: "필로틱 PHILOTIC | 좋은 책을 베스트셀러로 만드는 출판사",
  description:
    "필로틱은 『역행자』의 저자 자청이 세운 출판 브랜드입니다. 완벽한 원시인, 프로이트의 감정수업 등 내는 책마다 베스트셀러에 올린, ‘만들면 띄우는’ 출판사입니다.",
  openGraph: {
    title: "필로틱 PHILOTIC",
    description: "좋은 책을 만들고, 베스트셀러로 만듭니다 — 출판 브랜드 필로틱",
    url: "https://www.philotic.co.kr",
    siteName: "필로틱",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "677ec71cca516132d16516335684735c8ee4a44f",
    },
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
