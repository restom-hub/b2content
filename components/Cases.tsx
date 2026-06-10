"use client";

const cases = [
  {
    color: "#7C3AED",
    colorDim: "rgba(124,58,237,0.12)",
    colorBorder: "rgba(124,58,237,0.25)",
    badge: "Ativo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11 14v5M8 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    name: "IdeiaEstruturada",
    tagline: "Transforme ideias em projetos de software",
    desc: "Plataforma que usa Inteligência Artificial para conduzir um discovery inteligente e transformar ideias de software em escopos técnicos estruturados, prontos para desenvolvimento. Em vez de semanas de reuniões, você obtém clareza em poucas horas.",
    features: [
      "Discovery guiado por IA",
      "Escopo técnico automático",
      "Identificação de módulos, regras e fluxos",
    ],
    cta: { label: "Saiba mais", href: "https://quicksolutions-ai.com" },
    ctaSecondary: { label: "Acessar plataforma", href: "https://quicksolutions-ai.com" },
    partner: "Quick Solutions AI",
  },
  {
    color: "#0EA5E9",
    colorDim: "rgba(14,165,233,0.1)",
    colorBorder: "rgba(14,165,233,0.22)",
    badge: "Ativo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 10h8M7 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    name: "WhatsApp IA",
    tagline: "Chatbots inteligentes para WhatsApp",
    desc: "Crie um assistente virtual que responde automaticamente no WhatsApp, treinado com os documentos da sua empresa. Faça upload dos arquivos, conecte o WhatsApp e tenha atendimento 24/7 com Inteligência Artificial — sem precisar programar.",
    features: [
      "Base de conhecimento com RAG",
      "WhatsApp integrado via QR Code",
      "CRM Kanban + Campanhas em massa",
    ],
    cta: { label: "Saiba mais", href: "https://quicksolutions-ai.com" },
    ctaSecondary: { label: "Acessar plataforma", href: "https://quicksolutions-ai.com" },
    partner: "Quick Solutions AI",
  },
  {
    color: "#D97706",
    colorDim: "rgba(217,119,6,0.1)",
    colorBorder: "rgba(217,119,6,0.22)",
    badge: "Ativo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.93 4.93l2.12 2.12M14.95 14.95l2.12 2.12M4.93 17.07l2.12-2.12M14.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    name: "Engenho IA",
    tagline: "Análise de dados com IA local — seus dados nunca saem do servidor",
    desc: "Plataforma que conecta em bancos de dados e planilhas, extrai dados, e usa modelos de IA locais para gerar análises financeiras, detectar anomalias e prever fluxo de caixa.",
    features: [
      "Conecta em PostgreSQL, MySQL, MSSQL e Excel",
      "6 templates de análise financeira prontos",
      "Dashboard web + CLI + Chat IA sobre dados",
    ],
    cta: { label: "Saiba mais", href: "https://quicksolutions-ai.com" },
    ctaSecondary: { label: "Fale com especialista", href: "https://quicksolutions-ai.com" },
    partner: "Quick Solutions AI",
  },
  {
    color: "#34d399",
    colorDim: "rgba(52,211,153,0.08)",
    colorBorder: "rgba(52,211,153,0.2)",
    badge: "Parceria B2Content",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-8 3 5 2-3 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    name: "HiveGrowth",
    tagline: "Growth marketing orientado a dados para empresas em escala",
    desc: "Operação completa de growth — da estratégia de conteúdo ao pipeline de receita. Com a B2Content, a HiveGrowth estruturou uma máquina de aquisição orgânica que combina SEO técnico, produção editorial e automação de distribuição.",
    features: [
      "Crescimento de 3.8× no tráfego orgânico em 11 meses",
      "Pipeline inbound de R$ 2.1M atribuído ao conteúdo",
      "Redução de 61% no custo por lead qualificado",
    ],
    cta: { label: "Ver case completo", href: "#cases" },
    ctaSecondary: null,
    partner: "B2Content",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#34d399", letterSpacing: "0.12em", marginBottom: 16, textTransform: "uppercase" }}>
            Cases
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "#f5f5f5",
              maxWidth: 560,
            }}
          >
            Resultados reais de clientes reais.
          </h2>
        </div>

        {/* Grid — 2×2 em desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          {cases.map((c) => (
            <div
              key={c.name}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "border-color 0.2s, transform 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = c.colorBorder;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Glow de cor */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: `radial-gradient(ellipse, ${c.colorDim} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Topo: ícone + badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: c.colorDim,
                    border: `1px solid ${c.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.color,
                  }}
                >
                  {c.icon}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: c.colorDim,
                    border: `1px solid ${c.colorBorder}`,
                    borderRadius: 100,
                    padding: "4px 12px",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: c.color,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 11, fontWeight: 700, color: c.color, letterSpacing: "0.04em" }}>
                    {c.badge}
                  </span>
                </div>
              </div>

              {/* Nome + tagline */}
              <div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#f0f0f0",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.15,
                    marginBottom: 8,
                  }}
                >
                  {c.name}
                </h3>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: c.color, lineHeight: 1.4 }}>
                  {c.tagline}
                </p>
              </div>

              {/* Descrição */}
              <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, flexGrow: 1 }}>
                {c.desc}
              </p>

              {/* Features */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {c.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0, color: c.color }}>
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={c.cta.href}
                  target={c.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: c.color,
                    color: c.color === "#34d399" ? "#0a0a0a" : "#fff",
                    padding: "10px 18px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {c.cta.label}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {c.ctaSecondary && (
                  <a
                    href={c.ctaSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.05)",
                      color: "#aaa",
                      padding: "10px 18px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "color 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#aaa";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    {c.ctaSecondary.label}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ opacity: 0.5 }}>
                      <path d="M1.5 9.5L9.5 1.5M9.5 1.5H5M9.5 1.5v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Assinatura parceiro */}
              <div style={{ fontSize: 11, color: "#333", display: "flex", alignItems: "center", gap: 5 }}>
                <span>Por</span>
                <span style={{ color: "#444", fontWeight: 600 }}>{c.partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #cases > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
