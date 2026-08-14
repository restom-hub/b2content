import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://b2content.com"),
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
  twitter: {
    card: "summary_large_image",
  },
  // App "Radar B2Content" — atribui os insights de compartilhamento e remove
  // o aviso de propriedade ausente no Sharing Debugger da Meta.
  facebook: {
    appId: "1055042253887897",
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
