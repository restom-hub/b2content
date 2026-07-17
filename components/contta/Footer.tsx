import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "#080808" }}>
      <div className="c-wrap-wide" style={{ padding: "56px 24px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 320 }}>
            <Wordmark size={22} />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
              A camada de IA que opera o escritório contábil — dos documentos ao
              painel do cliente.
            </p>
            <a
              href="https://b2content.com"
              style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none" }}
            >
              <span style={{ fontSize: 12, color: "#555" }}>um produto</span>
              <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.03em" }}>
                <span style={{ color: "#34d399" }}>b2</span>
                <span style={{ color: "#f5f5f5" }}>content</span>
              </span>
            </a>
          </div>

          <nav style={{ display: "flex", gap: "clamp(32px,6vw,72px)", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#666", marginBottom: 14 }}>Produto</div>
              {[["Recursos", "#recursos"], ["Como funciona", "#como-funciona"], ["Resultados", "#resultados"], ["Agendar demo", "#demo"]].map(([l, h]) => (
                <a key={l} href={h} style={{ display: "block", fontSize: 14, color: "var(--secondary)", textDecoration: "none", padding: "5px 0" }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#666", marginBottom: 14 }}>Contato</div>
              {[["WhatsApp", "https://wa.me/5511936193035"], ["contato@b2content.com", "mailto:contato@b2content.com"], ["b2content.com", "https://b2content.com"]].map(([l, h]) => (
                <a key={l} href={h} style={{ display: "block", fontSize: 14, color: "var(--secondary)", textDecoration: "none", padding: "5px 0" }}>{l}</a>
              ))}
            </div>
          </nav>
        </div>

        <div style={{ marginTop: 44, paddingTop: 22, borderTop: "1px solid var(--line-soft)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12.5, color: "#555" }}>
            © {new Date().getFullYear()} B2Content. Contta·ai é uma marca da B2Content.
          </span>
          <span style={{ fontSize: 12.5, color: "#555" }}>Feito no Brasil 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}
