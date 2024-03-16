import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/containers/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library",
  description: "Сайт для поиска книги в библиотеке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="mx-auto max-w-5xl gap-2 mb-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
