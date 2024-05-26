import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../app/navbar/page";
import Footer from "../app/footer/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saim Amjad",
  description: "Develop By Saim Amjad",
  icons: {
  icon: ['/favicon.ico?v=4'],
  apple: ['/apple-touch-icon.png?v=4'],
  shortcut : ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}