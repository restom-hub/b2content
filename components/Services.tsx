"use client";

const services = [
  {
    icon: "◈",
    title: "SEO & Conteúdo",
    desc: "Estratégia editorial orientada a intenção de busca. Artigos, landing pages e clusters de conteúdo que dominam o ranking e convertem.",
    tags: ["Auditoria técnica", "Cluster de tópicos", "Link building", "CRO"],
  },
  {
    icon: "◉",
    title: "Inbound Marketing",
    desc: "Funil completo de atração, nutrição e conversão. Automações, fluxos de e-mail e lead scoring integrados ao seu CRM.",
    tags: ["HubSpot", "RD Station", "Automação", "Lead scoring"],
  },
  {
    icon: "▣",
    title: "Demand Generation",
    desc: "Campanhas multicanal que geram demanda previsível. LinkedIn Ads, Google Ads e conteúdo pago com atribuição clara de receita.",
    tags: ["LinkedIn Ads", "Google Ads", "ABM", "Retargeting"],
  },
  {
    icon: "◫",
    title: "Content Operations",
    desc: "Estrutura editorial escalável: calendário, briefings, produção, revisão e distribuição com métricas de impacto real.",
    tags: ["Calendário editorial", "Briefings", "Distribuição", "Analytics"],
  },
  {
    icon: "◬",
    title: "Revenue Marketing",
    desc: "Alinhamento entre marketing e vendas para transformar conteúdo em pipeline mensurável. OKRs, dashboards e reuniões de attribution.",
    tags: ["Pipeline marketing", "SLA marketing/vendas", "Attribution", "OKRs"],
  },
  {
    icon: "◭",
    title: "Estratégia de Marca",
    desc: "Posicionamento, narrativa e mensagem que diferencia sua empresa em mercados competitivos e reduz o ciclo de vendas.",
    tags: ["Positioning", "Narrativa", "ICP", "Messaging framework"],
  },
];

export default function Services() {
  return (
    <section id="serviços" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
            SERVIÇOS
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
              maxWidth: 600,
            }}
          >
            Tudo que você precisa para crescer com consistência.
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 2,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--surface)",
                padding: "32px",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.2)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 20, color: "var(--accent)" }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--foreground)", marginBottom: 12, letterSpacing: "-0.02em" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "var(--muted)",
                      background: "var(--surface-3)",
                      border: "1px solid var(--border)",
                      padding: "3px 10px",
                      borderRadius: 100,
                      letterSpacing: "0.02em",
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
    </section>
  );
}
