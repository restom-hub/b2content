const testimonials = [
  {
    text: "A B2Content não é uma agência de conteúdo. É um parceiro de crescimento. Eles entendem de pipeline, de vendas, de ciclo de compra B2B. O resultado aparece no número de deals, não em vaidade de pageviews.",
    name: "Fernanda Costa",
    role: "CMO · SaaS B2B",
    initials: "FC",
  },
  {
    text: "Em 6 meses chegamos ao top 1 nas principais palavras-chave do nosso segmento. Nosso time de vendas recebe leads que já sabem quem somos. O ciclo de vendas reduziu 40%.",
    name: "Ricardo Mendes",
    role: "CEO · Fintech",
    initials: "RM",
  },
  {
    text: "Já tentei 3 agências antes. Nenhuma entendia a diferença entre conteúdo bonito e conteúdo que converte. A B2Content entende. São os únicos que falam a língua do meu CFO.",
    name: "Ana Luiza Prado",
    role: "VP Growth · ERP",
    initials: "AL",
  },
  {
    text: "O dashboard deles é o único relatório de marketing que meu board quer ver. ROI claro, pipeline rastreado, atribuição honesta. Nada de métricas de vaidade.",
    name: "Carlos Bastos",
    role: "Head of Marketing · Logtech",
    initials: "CB",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
            DEPOIMENTOS
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
            O que nossos clientes dizem.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "var(--accent)", fontSize: 14 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "var(--secondary)", lineHeight: 1.7, flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(52,211,153,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
