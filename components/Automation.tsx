"use client";

const pillars = [
  {
    number: "01",
    title: "Mapeie antes de construir",
    desc: "Identificamos processos repetitivos, exceções previsíveis, dados disponíveis e ROI esperado antes de escrever uma linha de código ou prompt.",
  },
  {
    number: "02",
    title: "Conecte IA aos seus sistemas",
    desc: "Integramos modelos de linguagem a APIs internas, documentos, CRM, ERP e filas de trabalho — com escopo controlado e sem surpresas.",
  },
  {
    number: "03",
    title: "Opere com governança real",
    desc: "Logs, métricas de qualidade, aprovações humanas em pontos críticos e rollback automático. IA que vai do piloto à produção sem riscos operacionais.",
  },
];

const segments = [
  {
    label: "Serviços Financeiros",
    sub: "Precisão, conformidade e rastreabilidade",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 10v1M9 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Saúde e Life Sciences",
    sub: "Coordenação, cuidado e conformidade",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    label: "Varejo e E-commerce",
    sub: "Planejamento, inventário e execução",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 2h2l2.4 7.4a1 1 0 00.96.6H13a1 1 0 00.96-.72l1.44-5.28H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7.5" cy="15.5" r="1" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="12.5" cy="15.5" r="1" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    label: "Indústria e Manufatura",
    sub: "Qualidade, rastreabilidade e eficiência",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 14V8l4-4v4l4-4v4l4-4v10H2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Telecomunicações",
    sub: "Escala, velocidade e continuidade",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 14a8 8 0 010-10M7 11a4 4 0 010-4M10 9h.01M14 14a8 8 0 000-10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Mídia e Conteúdo",
    sub: "Criação, distribuição e mensuração",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 7l5 2.5L7 12V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M6 15h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Automation() {
  return (
    <section
      id="automação"
      style={{
        padding: "120px 24px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        position: "relative",
        overflow: "hidden",
        background: "var(--surface)",
      }}
    >
      {/* Detalhe de fundo */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 480,
          height: 480,
          background: "radial-gradient(ellipse at top right, rgba(0,230,118,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        {/* Cabeçalho */}
        <div style={{ maxWidth: 720, marginBottom: 80 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00e676", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Automação com IA
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(0,230,118,0.3)" }} />
            <span style={{ fontSize: 11, color: "#555", letterSpacing: "0.04em" }}>
              em parceria com Quick Solutions AI
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#f5f5f5",
              marginBottom: 24,
            }}
          >
            Processos e workflows
            <br />
            <span style={{ color: "#888" }}>que se operam sozinhos.</span>
          </h2>

          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, maxWidth: 560 }}>
            Combinamos estratégia de conteúdo com automação inteligente de processos. O resultado é uma operação de marketing que gera, distribui e qualifica conteúdo sem depender de trabalho manual repetitivo.
          </p>
        </div>

        {/* Pilares — layout assimétrico */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 0,
            marginBottom: 96,
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.number}
              style={{
                padding: "40px 36px 40px 0",
                borderRight: i < pillars.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft: i === 0 ? 0 : 36,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#00e676",
                  letterSpacing: "0.12em",
                  marginBottom: 20,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {p.number}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#e8e8e8",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  marginBottom: 14,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Segmentos atendidos */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32 }}>
            Segmentos atendidos
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {segments.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#111",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  transition: "background 0.15s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#161616")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#111")}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(0,230,118,0.07)",
                    border: "1px solid rgba(0,230,118,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00e676",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#d8d8d8", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 3 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.3 }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota de parceria */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12, color: "#444" }}>Segmentos e metodologia em parceria com</span>
            <a
              href="https://quicksolutions-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#00e676",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                opacity: 0.8,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
            >
              Quick Solutions AI
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #automação .pillars { grid-template-columns: 1fr !important; }
          #automação .segments { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          #automação .segments { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
