import DashboardMock from "./mockups/DashboardMock";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", paddingTop: 118, paddingBottom: 64, overflow: "hidden" }}>
      <div className="c-grid-bg" />
      <div
        className="c-glow"
        aria-hidden
        style={{
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 720,
          height: 460,
          background: "radial-gradient(ellipse, var(--em-glow) 0%, transparent 70%)",
        }}
      />
      {/* toque dourado (produto) atrás do mockup */}
      <div
        className="c-glow"
        aria-hidden
        style={{
          top: 420,
          left: "50%",
          transform: "translateX(-50%)",
          width: 820,
          height: 300,
          background: "radial-gradient(ellipse, rgba(201,162,39,0.14) 0%, transparent 72%)",
        }}
      />

      <div className="c-wrap" style={{ position: "relative", textAlign: "center" }}>
        <div data-anim style={{ ["--d" as string]: "60ms" }}>
          <span className="c-eyebrow gold">
            <span className="dot" />
            IA CONTÁBIL · UM PRODUTO B2CONTENT
          </span>
        </div>

        <h1
          data-anim
          style={{
            ["--d" as string]: "140ms",
            fontSize: "clamp(38px, 6.4vw, 78px)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.02,
            margin: "26px auto 0",
            maxWidth: 900,
            textWrap: "balance",
          }}
        >
          A IA que <span style={{ color: "var(--em)" }}>opera</span> o seu
          <br />escritório contábil.
        </h1>

        <p
          data-anim
          className="c-lead"
          style={{ ["--d" as string]: "230ms", margin: "24px auto 0", maxWidth: 640, fontSize: "clamp(16px,1.7vw,20px)", textAlign: "center" }}
        >
          Recebe e classifica documentos, cobra o que falta no WhatsApp, atende
          seus clientes e transforma balancetes em painéis executivos — sobre as
          ferramentas que você já usa.
        </p>

        <div
          data-anim
          style={{ ["--d" as string]: "320ms", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 34 }}
        >
          <a href="#demo" className="c-btn c-btn-primary">
            Agendar demonstração
            <svg className="arr" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#recursos" className="c-btn c-btn-ghost">Ver recursos</a>
        </div>

        <p data-anim style={{ ["--d" as string]: "400ms", marginTop: 20, fontSize: 13, color: "var(--muted)" }}>
          Uma camada sobre o Domínio, o SIEG e o que o escritório já usa —{" "}
          <span style={{ color: "var(--secondary)" }}>não substitui.</span>
        </p>
      </div>

      {/* Mockup do produto */}
      <div
        data-anim
        style={{ ["--d" as string]: "480ms", position: "relative", maxWidth: 1040, margin: "56px auto 0", padding: "0 24px" }}
      >
        <div style={{ perspective: 1600 }}>
          <div className="c-hero-tilt">
            <DashboardMock />
          </div>
        </div>
        {/* reflexo/fade na base */}
        <div
          aria-hidden
          style={{
            position: "absolute", left: 0, right: 0, bottom: -1, height: 120,
            background: "linear-gradient(180deg, transparent, var(--ink))",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>{`
        .c-hero-tilt { transform: rotateX(6deg); transform-origin: center top; transition: transform .6s cubic-bezier(.16,1,.3,1); }
        @media (min-width: 861px){ .c-hero-tilt:hover { transform: rotateX(0deg); } }
        @media (prefers-reduced-motion: reduce){ .c-hero-tilt { transform: none; } }
      `}</style>
    </section>
  );
}
