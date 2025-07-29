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
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "ADmyBRAND AI Suite revolutionizes your marketing with intelligent automation, personalized campaigns, and data-driven insights that scale your business.",
  keywords: ["AI marketing", "marketing automation", "customer insights", "campaign optimization", "SaaS marketing"],
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND AI Suite",
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing with AI-powered insights, automation, and optimization.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing with AI-powered insights, automation, and optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
