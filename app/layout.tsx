import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buy IPTV Subscription — Instant Activation, 37,000+ Channels | QuickStream",
  description: "Ready to buy your IPTV subscription? QuickStream delivers your login within minutes. 37,000+ live channels, 198,000+ movies and series, 4K quality, and a built-in VPN — all activated instantly after secure checkout.",
  keywords: ["buy iptv subscription", "iptv subscription", "instant iptv activation", "4k iptv", "best iptv service", "quickstream iptv"],
  authors: [{ name: "QuickStream" }],
  openGraph: {
    title: "Buy IPTV Subscription — Instant Activation | QuickStream",
    description: "Instant login delivery, 37,000+ channels, 4K quality. Buy your IPTV subscription today.",
    type: "website",
    url: "https://buy-iptv-subscription.tv",
    siteName: "QuickStream",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV Subscription — Instant Activation | QuickStream",
    description: "Instant login delivery, 37,000+ channels, 4K quality. Buy your IPTV subscription today.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buy-iptv-subscription.tv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${inter.variable} bg-black text-on-surface font-body selection:bg-primary-container selection:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
