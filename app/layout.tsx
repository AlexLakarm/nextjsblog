import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { inter } from '@/app/ui/fonts';

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
        <main className="flex-grow pt-16 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
