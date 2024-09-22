import { Footer } from "@/view/components/layouts/footer";
import { Header } from "@/view/components/layouts/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Date",
  description:
    "Descubra encontros! Se relacione! Abra seu coração e mostre sua melhor versão!",
  icons: {
    apple: {
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    icon: [
      {
        sizes: "16x16",
        url: "/favicon-16x16.png",
        type: "image/png",
      },
      {
        sizes: "32x32",
        url: "/favicon-32x32.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={interFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
