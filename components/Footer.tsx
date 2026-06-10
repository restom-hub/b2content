"use client";

import Logo from "./Logo";

const footerNav = [
  {
    title: "Soluções",
    links: [
      { label: "SEO & Conteúdo", href: "#serviços" },
      { label: "Inbound Marketing", href: "#serviços" },
      { label: "Demand Generation", href: "#serviços" },
      { label: "Content Operations", href: "#serviços" },
      { label: "Revenue Marketing", href: "#serviços" },
      { label: "Estratégia de Marca", href: "#serviços" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Processo", href: "#processo" },
      { label: "Resultados", href: "#resultados" },
      { label: "Cases", href: "#cases" },
      { label: "Parceiros", href: "#parceiros" },
      { label: "Automação com IA", href: "#automação" },
    ],
  },
  {
    title: "Parceiros",
    links: [
      { label: "Quick Solutions AI", href: "https://quicksolutions-ai.com", external: true },
      { label: "IA Aplicada", href: "https://quicksolutions-ai.com", external: true },
      { label: "Arquitetura de Dados", href: "https://quicksolutions-ai.com", external: true },
      { label: "Transformação Digital", href: "https://quicksolutions-ai.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "#080808",
      }}
    >
      {/* Corpo principal */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 24px 48px",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 80,
        }}
      >
        {/* Identidade */}
        <div>
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <Logo size={28} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                <span style={{ color: "#00e676" }}>b2</span>
                <span style={{ color: "#f5f5f5" }}>content</span>
              </div>
              <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.05em" }}>
                IA que opera. Processos que escalam.
              </div>
            </div>
          </a>
          <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.7, maxWidth: 240, marginBottom: 28 }}>
            Aceleramos empresas B2B com estratégia de conteúdo orientada a dados. Mais pipeline, mais receita.
          </p>

          {/* Parceria badge */}
          <a
            href="https://quicksolutions-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,230,118,0.06)",
              border: "1px solid rgba(0,230,118,0.14)",
              borderRadius: 8,
              padding: "10px 14px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,230,118,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,230,118,0.06)")}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1 3.4 12l.7-4L1.2 5.2l4-.6L7 1z" stroke="#00e676" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#00e676", letterSpacing: "0.06em" }}>PARCEIRO OFICIAL</div>
              <div style={{ fontSize: 11, color: "#888" }}>Quick Solutions AI</div>
            </div>
          </a>
        </div>

        {/* Nav colunas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {footerNav.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: 13.5,
                        color: "#555",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ccc")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
                          <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Barra inferior */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "20px 24px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 12, color: "#333" }}>
          © 2025 B2Content. Todos os direitos reservados.
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 12, color: "#333" }}>
          <span>contato@b2content.com.br</span>
          <span style={{ color: "#222" }}>·</span>
          <a
            href="https://quicksolutions-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00e676")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#333")}
          >
            Parceiro: Quick Solutions AI
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          footer > div:first-child > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div:first-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
