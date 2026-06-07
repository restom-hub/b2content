"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 24px",
        background: "var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo size={28} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              <span style={{ color: "var(--accent)" }}>b2</span><span style={{ color: "var(--foreground)" }}>content</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.02em" }}>
              Growth Marketing B2B
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {["Serviços", "Resultados", "Processo", "Cases", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ fontSize: 12, color: "var(--muted)" }}>
          © 2025 B2Content. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
