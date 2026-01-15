import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadata: Record<string, Metadata> = {
    vi: {
      metadataBase: new URL("https://variversideretreat.com"),
      title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
      description: "Vả Riverside Retreat - Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương. Hồ bơi ngoài trời, hoạt động SUP, gần lăng Khải Định. Đánh giá 9.8/10. Giá từ 250,000đ.",
      keywords: ["Vả Riverside Retreat", "homestay Huế", "homestay sông Hương", "du lịch Huế", "lăng Khải Định", "SUP Huế", "homestay view núi", "Hương Thủy"],
      authors: [{ name: "Vả Riverside Retreat" }],
      icons: {
        icon: "/images/Logo.jpg",
        shortcut: "/images/Logo.jpg",
        apple: "/images/Logo.jpg",
      },
      openGraph: {
        title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
        description: "Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương. Hồ bơi ngoài trời, hoạt động SUP, gần lăng Khải Định. Đánh giá 9.8/10.",
        type: "website",
        locale: "vi_VN",
        images: ["/images/Logo.jpg"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Vả Riverside Retreat Huế - Homestay Bên Sông Hương",
        description: "Homestay cao cấp tại Huế với view núi Kim Phụng và sông Hương tuyệt đẹp",
        images: ["/images/Logo.jpg"],
      },
    },
    en: {
      metadataBase: new URL("https://variversideretreat.com"),
      title: "Va Riverside Retreat Hue - Riverside Homestay",
      description: "Va Riverside Retreat - Premium homestay in Hue with Kim Phung mountain and Perfume River views. Outdoor pool, SUP activities, near Khai Dinh Tomb. Rated 9.8/10.",
      keywords: ["Va Riverside Retreat", "Hue homestay", "Perfume River homestay", "Hue tourism", "Khai Dinh Tomb", "SUP Hue", "mountain view homestay"],
      authors: [{ name: "Va Riverside Retreat" }],
      icons: {
        icon: "/images/Logo.jpg",
        shortcut: "/images/Logo.jpg",
        apple: "/images/Logo.jpg",
      },
      openGraph: {
        title: "Va Riverside Retreat Hue - Riverside Homestay",
        description: "Premium homestay in Hue with Kim Phung mountain and Perfume River views. Outdoor pool, SUP activities, near Khai Dinh Tomb. Rated 9.8/10.",
        type: "website",
        locale: "en_US",
        images: ["/images/Logo.jpg"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Va Riverside Retreat Hue - Riverside Homestay",
        description: "Premium homestay in Hue with stunning Kim Phung mountain and Perfume River views",
        images: ["/images/Logo.jpg"],
      },
    }
  };

  return metadata[locale] || metadata.vi;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
