import type { Metadata } from "next";
import "./contta.css";

const title = "Contta·ai — A IA que opera o seu escritório contábil";
const description =
  "Contta·ai recebe e classifica documentos, cobra o que falta no WhatsApp, atende seus clientes e transforma balancetes em painéis executivos — sobre as ferramentas que o escritório já usa. Um produto B2Content.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://contta-ai.b2content.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://contta-ai.b2content.com",
    siteName: "Contta·ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ConttaLayout({ children }: { children: React.ReactNode }) {
  return <div className="contta">{children}</div>;
}
