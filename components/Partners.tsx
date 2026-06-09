"use client";

const partnerProjects = [
  {
    area: "Inteligência Artificial Aplicada",
    desc: "Agentes de linguagem e automação cognitiva integrados à estratégia de conteúdo B2B — gerando personalização em escala sem perder a voz da marca.",
    tag: "IA & Conteúdo",
  },
  {
    area: "Arquitetura de Dados",
    desc: "Pipelines de dados de marketing integrados às plataformas de analytics — atribuição real de receita do primeiro clique ao fechamento.",
    tag: "Data & Attribution",
  },
  {
    area: "Estratégia Tecnológica",
    desc: "Avaliação de maturidade digital e seleção de stack para operações de marketing B2B — do CRM ao CDP, sem over-engineering.",
    tag: "MarTech Strategy",
  },
  {
    area: "Transformação Digital",
    desc: "Modernização de processos comerciais com conteúdo como ativo estratégico. Da planilha ao playbook automatizado.",
    tag: "Digital Ops",
  },
];

export default function Partners() {
  return (
    <section
      id="parceiros"
      style={{
        padding: "112px 24px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fundo sutil */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,230,118,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.015) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 80% at 80% 50%, black 20%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Layout editorial — texto à esquerda, conteúdo à direita */}
        <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 80, alignItems: "start" }}>

          {/* Coluna esquerda — sticky editorial */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00e676", letterSpacing: "0.12em", marginBottom: 20, textTransform: "uppercase" }}>
              Parceria estratégica
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                color: "#f5f5f5",
                marginBottom: 24,
              }}
            >
              Juntos com
              <br />
              <a
                href="https://quicksolutions-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00e676",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,230,118,0.3)",
                  paddingBottom: 2,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#00e676")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.3)")}
              >
                Quick Solutions AI
              </a>
            </h2>

            <p style={{ fontSize: 14.5, color: "#666", lineHeight: 1.75, marginBottom: 32 }}>
              Unimos a profundidade técnica em IA e arquitetura de dados da Quick Solutions AI à nossa expertise em conteúdo B2B. O resultado: estratégias que combinam inteligência artificial e narrativa humana para gerar demanda real.
            </p>

            <div
              style={{
                background: "rgba(0,230,118,0.06)",
                border: "1px solid rgba(0,230,118,0.15)",
                borderRadius: 10,
                padding: "16px 20px",
                marginBottom: 32,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#00e676", letterSpacing: "0.08em", marginBottom: 8 }}>
                SOBRE A PARCERIA
              </div>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                35+ anos de experiência combinada em tecnologia, dados e estratégia digital — ao serviço das empresas B2B que querem crescer com consistência.
              </p>
            </div>

            <a
              href="https://quicksolutions-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "#00e676",
                textDecoration: "none",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "12px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "8px")}
            >
              Conhecer a Quick Solutions AI
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Coluna direita — projetos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {partnerProjects.map((p, i) => (
              <div
                key={p.area}
                style={{
                  padding: "28px 0",
                  borderBottom: i < partnerProjects.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  alignItems: "start",
                  transition: "padding-left 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "12px")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0px")}
              >
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.025em", marginBottom: 8, lineHeight: 1.2 }}>
                    {p.area}
                  </div>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#888",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    padding: "4px 10px",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    marginTop: 3,
                  }}
                >
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #parceiros > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #parceiros > div > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
