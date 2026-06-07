"use client";

const cases = [
  {
    company: "SaaS de RH",
    category: "Software B2B",
    headline: "De 12k para 89k visitantes orgânicos em 14 meses",
    metrics: [{ label: "Tráfego orgânico", value: "+642%" }, { label: "MQLs/mês", value: "+280%" }, { label: "CAC", value: "−58%" }],
    quote: "A B2Content transformou nosso blog de um projeto de vaidade em nossa principal fonte de pipeline.",
    author: "VP de Marketing",
  },
  {
    company: "Fintech B2B",
    category: "Serviços Financeiros",
    headline: "R$ 4.2M em pipeline atribuído ao inbound em 1 ano",
    metrics: [{ label: "Pipeline inbound", value: "R$ 4.2M" }, { label: "Taxa de conversão", value: "+3.1×" }, { label: "Custo por lead", value: "−71%" }],
    quote: "Finalmente conseguimos mostrar pro CFO que marketing não é custo, é investimento com retorno mensurável.",
    author: "CMO",
  },
  {
    company: "Plataforma de ERP",
    category: "Enterprise Software",
    headline: "Domínio de mercado: top 3 em 87% das keywords estratégicas",
    metrics: [{ label: "Keywords top 3", value: "87%" }, { label: "Sessões orgânicas", value: "+410%" }, { label: "Trials via SEO", value: "+190%" }],
    quote: "Nossa presença orgânica hoje é nosso maior ativo competitivo. Nenhum concorrente consegue nos alcançar.",
    author: "Head de Growth",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
              CASES
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--foreground)",
              }}
            >
              Resultados reais de clientes reais.
            </h2>
          </div>
          <a
            href="#contato"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Ver todos os cases
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
          {cases.map((c) => (
            <div
              key={c.company}
              style={{
                background: "var(--ink)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", marginBottom: 8 }}>
                  {c.category.toUpperCase()}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: 12 }}>
                  {c.company}
                </div>
                <p style={{ fontSize: 15, color: "var(--secondary)", lineHeight: 1.5, fontWeight: 500 }}>
                  {c.headline}
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  background: "var(--surface)",
                  borderRadius: 8,
                  padding: 16,
                }}
              >
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.03em" }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2, lineHeight: 1.3 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, fontStyle: "italic", marginBottom: 10 }}>
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--secondary)" }}>— {c.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
