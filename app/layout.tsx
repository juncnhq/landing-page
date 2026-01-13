import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
  description: "Vả Riverside Retreat - Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương. Hồ bơi ngoài trời, hoạt động SUP, gần lăng Khải Định. Đánh giá 9.8/10. Giá từ 250,000đ.",
  keywords: ["Vả Riverside Retreat", "homestay Huế", "homestay sông Hương", "du lịch Huế", "lăng Khải Định", "SUP Huế", "homestay view núi", "Hương Thủy"],
  authors: [{ name: "Vả Riverside Retreat" }],
  openGraph: {
    title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
    description: "Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương. Hồ bơi ngoài trời, hoạt động SUP, gần lăng Khải Định. Đánh giá 9.8/10.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
    description: "Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương tuyệt đẹp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
