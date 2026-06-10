import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B2Content — IA que opera. Processos que escalam.",
  description:
    "Automatizamos qualquer processo com IA — de workflows internos a agentes integrados aos seus sistemas. Qualquer segmento, qualquer operação.",
  openGraph: {
    title: "B2Content — IA que opera. Processos que escalam.",
    description:
      "Automatizamos qualquer processo com IA — de workflows internos a agentes integrados aos seus sistemas.",
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
