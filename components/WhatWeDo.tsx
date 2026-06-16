export default function WhatWeDo() {
  return (
    <section style={{ padding: "96px 24px 64px", marginTop: "48px", borderTop: "1px solid var(--border)", background: "#0a0f18" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#34d399", letterSpacing: "0.12em", marginBottom: 28, textTransform: "uppercase" }}>
          Nosso Modelo de Arquitetura
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 3.8vw, 46px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            color: "#f5f5f5",
            marginBottom: 32,
          }}
        >
          Tudo que você precisa
          <br />
          <span style={{ color: "#888" }}>para crescer com</span>
          <br />
          consistência.
        </h2>

        <div style={{ maxWidth: 800, marginBottom: 48 }}>
          <p
            style={{
              fontSize: 15,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Nossas soluções são customizadas para as necessidades e processos de cada empresa. Totalmente personalizados. Os agentes são adaptados ao seu negócio, fluxos de trabalho, integrações e dados para garantir que operem no seu modelo.
          </p>
        </div>

        {/* Imagem da arquitetura — centralizada */}
        <div style={{ marginTop: 48, maxWidth: 800, margin: "48px auto 0" }}>
          <img
            src="/images/architecture.png"
            alt="Modelo de Arquitetura em Camadas"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 16,
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
