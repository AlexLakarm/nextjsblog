import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { inter } from '@/app/ui/fonts';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AK's Blog",
  description: "A Next.js blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16 pb-8"> {/* Ajout de flex-grow et pb-8 */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
