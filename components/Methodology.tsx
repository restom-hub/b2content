"use client";

const steps = [
  {
    num: "1",
    title: "Entendimento do negócio, processos e gargalos",
    desc: "Mapear o workflow real e documentar todos detalhes, identificar volume, gargalos, pontos de decisão, exceções e onde está a dor.",
    side: "left",
  },
  {
    num: "2",
    title: "Decomposição e triagem (agente vs. não-agente)",
    desc: "Quebrar o processo em tarefas específicas e classificar cada uma entre determinística, candidatas a agente ou que devem permanecer humano.",
    side: "right",
  },
  {
    num: "3",
    title: "Desenho da arquitetura de agentes e suas interações",
    desc: "Definir a squad sob o princípio de responsabilidade única: que agentes existem, o que cada um faz, e o padrão de orquestração.",
    side: "left",
  },
  {
    num: "4",
    title: "Camada de ferramentas, dados e integrações",
    desc: "Os agentes só são úteis pelo que conseguem fazer e acessar: APIs, bancos, RAG/retrieval, ações em sistemas externos. Definir contratos de I/O.",
    side: "right",
  },
  {
    num: "5",
    title: "Arquitetura de prompts e calibração",
    desc: "System prompts, definição de papel, guardrails e critérios de calibração/rigor.",
    side: "left",
  },
  {
    num: "6",
    title: "Human-in-the-loop e governança",
    desc: "Decidir onde entram aprovações, escalonamento e fallback.",
    side: "right",
  },
  {
    num: "7",
    title: "Protótipo / PoC vertical",
    desc: "Construir exemplo ponta a ponta com casos reais.",
    side: "left",
  },
  {
    num: "8",
    title: "Deploy e integração na operação",
    desc: "Embutir o sistema na operação real da organização. A agentização é um produto vivo, não um entregável único.",
    side: "right",
  },
];

export default function Methodology() {
  return (
    <section
      style={{
        padding: "120px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
            METODOLOGIA
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 16,
            }}
          >
            Nossa Metodologia
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Processo estruturado para garantir máxima precisão e resultados mensuráveis.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, transparent, var(--border) 5%, var(--border) 95%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 48px 1fr",
                  alignItems: "center",
                  minHeight: 160,
                  paddingBottom: i < steps.length - 1 ? 0 : 0,
                }}
              >
                {/* Left side */}
                <div style={{ padding: "20px 32px 20px 0", textAlign: "right" }}>
                  {step.side === "left" ? (
                    <StepCard title={step.title} desc={step.desc} align="right" />
                  ) : null}
                </div>

                {/* Center node */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--ink)",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--accent)",
                      flexShrink: 0,
                      boxShadow: "0 0 16px var(--accent-glow)",
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Right side */}
                <div style={{ padding: "20px 0 20px 32px" }}>
                  {step.side === "right" ? (
                    <StepCard title={step.title} desc={step.desc} align="left" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ title, desc, align }: { title: string; desc: string; align: "left" | "right" }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "24px 28px",
        textAlign: align,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.25)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
    >
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "var(--accent)",
          marginBottom: 8,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
