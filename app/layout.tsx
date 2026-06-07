import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B2Content — Growth Marketing que gera resultado",
  description:
    "Aceleramos o crescimento de empresas B2B com estratégia de conteúdo, SEO e inbound marketing orientado a dados. Mais pipeline, mais receita.",
  openGraph: {
    title: "B2Content — Growth Marketing que gera resultado",
    description:
      "Aceleramos o crescimento de empresas B2B com estratégia de conteúdo, SEO e inbound marketing orientado a dados.",
    url: "https://b2content.com",
    siteName: "B2Content",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
