"use client";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Auditoria completa do seu funil de marketing: tráfego, conversão, pipeline e atribuição. Identificamos gaps e oportunidades em 5 dias.",
    duration: "Semana 1",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Plano 90 dias com prioridades, canais, clusters de conteúdo e metas de pipeline. Alinhado com seu ICP e ciclo de vendas.",
    duration: "Semanas 2–3",
  },
  {
    num: "03",
    title: "Execução",
    desc: "Squad dedicado produzindo conteúdo, otimizando SEO, configurando automações e rodando campanhas com cadência semanal.",
    duration: "Contínuo",
  },
  {
    num: "04",
    title: "Medição",
    desc: "Dashboard de resultados com métricas de pipeline, MQLs, CAC e ROI. Reunião mensal de attribution e ajuste de rota.",
    duration: "Mensal",
  },
];

export default function Process() {
  return (
    <section id="processo" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
            PROCESSO
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
              maxWidth: 520,
            }}
          >
            Como transformamos conteúdo em receita.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr auto",
                gap: 40,
                alignItems: "center",
                padding: "48px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: "var(--accent)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--foreground)",
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: 560 }}>
                  {step.desc}
                </p>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--muted)",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  padding: "6px 14px",
                  borderRadius: 100,
                  whiteSpace: "nowrap",
                }}
              >
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
