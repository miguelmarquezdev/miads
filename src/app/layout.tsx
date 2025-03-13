import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "MIA Digital Solutions",
  description: "Agencia de Marketing: Páginas Web, Seo, Sem ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
