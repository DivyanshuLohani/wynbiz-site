import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WynbizNavbar from "@/components/Navbar";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wynbiz",
  description: "Wynbiz - Your Gateway to Digital Marketing Excellence",
  icons: {
    icon: "/logo_black.png",
    shortcut: "/logo_black.png",
    apple: "/logo_black.png",
  },
  openGraph: {
    title: "Wynbiz",
    description: "Wynbiz - Your Gateway to Digital Marketing Excellence",
    url: "https://wynbiz.in",
    siteName: "Wynbiz",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
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
        <WynbizNavbar />
        {children}
        <ChatAssistant />
        <Footer />
      </body>
    </html>
  );
}
