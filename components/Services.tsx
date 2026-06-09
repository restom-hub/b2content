"use client";

const services = [
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M10 2v12M3 6l7 4 7-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "SEO & Conteúdo",
    desc: "Estratégia editorial orientada a intenção de busca. Artigos, landing pages e clusters de conteúdo que dominam o ranking e convertem.",
    tags: ["Auditoria técnica", "Cluster de tópicos", "Link building", "CRO"],
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17 12a7 7 0 10-14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M10 5v2M5.5 6.5l1.4 1.4M14.5 6.5l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M6 18h8M10 12v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Inbound Marketing",
    desc: "Funil completo de atração, nutrição e conversão. Automações, fluxos de e-mail e lead scoring integrados ao seu CRM.",
    tags: ["HubSpot", "RD Station", "Automação", "Lead scoring"],
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M5 5.5C6.5 7 8.5 8 10 8s3.5-1 5-2.5M5 14.5C6.5 13 8.5 12 10 12s3.5 1 5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Demand Generation",
    desc: "Campanhas multicanal que geram demanda previsível. LinkedIn Ads, Google Ads e conteúdo pago com atribuição clara de receita.",
    tags: ["LinkedIn Ads", "Google Ads", "ABM", "Retargeting"],
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="9" width="10" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="14" width="13" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Content Operations",
    desc: "Estrutura editorial escalável: calendário, briefings, produção, revisão e distribuição com métricas de impacto real.",
    tags: ["Calendário editorial", "Briefings", "Distribuição", "Analytics"],
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 16l4-8 3 5 2-3 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="5" r="2" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Revenue Marketing",
    desc: "Alinhamento entre marketing e vendas para transformar conteúdo em pipeline mensurável. OKRs, dashboards e reuniões de attribution.",
    tags: ["Pipeline marketing", "SLA mkt/vendas", "Attribution", "OKRs"],
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 4.8 5.3.8-3.85 3.75.91 5.3L10 14.1l-4.76 2.55.91-5.3L2.3 7.6l5.3-.8L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Estratégia de Marca",
    desc: "Posicionamento, narrativa e mensagem que diferencia sua empresa em mercados competitivos e reduz o ciclo de vendas.",
    tags: ["Positioning", "Narrativa", "ICP", "Messaging framework"],
  },
];

export default function Services() {
  return (
    <section id="serviços" style={{ padding: "128px 24px 112px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header — assimétrico intencionalmente */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 72, alignItems: "end" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00e676", letterSpacing: "0.12em", marginBottom: 20, textTransform: "uppercase" }}>
              O que fazemos
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.8vw, 46px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.08,
                color: "#f5f5f5",
              }}
            >
              Tudo que você precisa
              <br />
              <span style={{ color: "#888" }}>para crescer com</span>
              <br />
              consistência.
            </h2>
          </div>
          <div style={{ paddingBottom: 4 }}>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, maxWidth: 380 }}>
              Não vendemos pacotes. Construímos uma operação de marketing que funciona enquanto você dorme — com processo, cadência e dados para provar cada centavo investido.
            </p>
          </div>
        </div>

        {/* Grid de serviços */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                padding: "36px 32px",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                transition: "background 0.2s",
                cursor: "default",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {/* Número de ordem — detalhe humano */}
              <div style={{ position: "absolute", top: 16, right: 20, fontSize: 11, color: "rgba(255,255,255,0.12)", fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(0,230,118,0.08)",
                  border: "1px solid rgba(0,230,118,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00e676",
                  marginBottom: 20,
                  flexShrink: 0,
                }}
              >
                {s.svg}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f0f0", marginBottom: 10, letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65, marginBottom: 20 }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#555",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "3px 9px",
                      borderRadius: 4,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #serviços .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #serviços .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
