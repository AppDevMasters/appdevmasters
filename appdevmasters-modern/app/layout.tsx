import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AppDevMasters - Innovative Mobile Apps for Everyday Life",
  description: "AppDevMasters builds innovative, beautiful, high-quality mobile apps that solve real-world problems. We craft, launch, and support our own products.",
  keywords: "mobile apps, app development, iOS, Android, productivity apps, focus timer, planning app",
  authors: [{ name: "AppDevMasters" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "AppDevMasters - Innovative Mobile Apps for Everyday Life",
    description: "We build innovative, beautiful, high-quality mobile apps that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
