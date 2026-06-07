"use client";

const metrics = [
  { value: "3.2×", label: "Crescimento de tráfego orgânico", detail: "Em média nos primeiros 12 meses" },
  { value: "68%", label: "Redução no custo por lead", detail: "Comparado com mídia paga exclusiva" },
  { value: "R$ 80M+", label: "Pipeline gerado", detail: "Em oportunidades rastreadas" },
  { value: "2.4×", label: "Aumento em MQLs", detail: "Leads qualificados pelo marketing" },
  { value: "18+", label: "Empresas B2B", detail: "Aceleradas com nossa metodologia" },
  { value: "94%", label: "Retenção de clientes", detail: "Após o primeiro ano de contrato" },
];

export default function Results() {
  return (
    <section
      id="resultados"
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
              RESULTADOS
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--foreground)",
                maxWidth: 480,
              }}
            >
              Números que falam por si só.
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 320, lineHeight: 1.6 }}>
            Dados consolidados de mais de 5 anos acelerando empresas B2B no Brasil e América Latina.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "var(--surface)",
                padding: "40px 32px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface)")}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: 6, letterSpacing: "-0.01em" }}>
                {m.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
