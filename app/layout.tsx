import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hays Animal Feed Co. | Quality Hay in Kuwait",
  description:
    "Thoughtfully sourced quality hay for horses, Arabian breeding farms and equestrian communities in Kuwait. Contact Hays Animal Feed Co.",
  metadataBase: new URL("https://hayskuwait.com"),
  openGraph: {
    title: "Hays Animal Feed Co.",
    description: "Quality hay. Thoughtfully sourced.",
    url: "https://hayskuwait.com",
    siteName: "Hays Animal Feed Co.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
