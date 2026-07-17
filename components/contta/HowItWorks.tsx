const steps = [
  {
    k: "01",
    t: "Recebe e entende",
    d: "Documentos e mensagens chegam de todas as fontes. A IA lê, interpreta e organiza — por cliente, tipo e competência.",
    ic: "M3 8h10M9 4l4 4-4 4",
  },
  {
    k: "02",
    t: "A IA propõe",
    d: "Classificação, cobrança e resposta ao cliente vêm prontas, com nível de confiança. Nada é enviado às cegas.",
    ic: "M8 2l1.8 3.9L14 6.3l-3 3 .8 4.2L8 11.6 4.2 13.5 5 9.3 2 6.3l4.2-.4z",
  },
  {
    k: "03",
    t: "O humano confirma",
    d: "Você revisa e aprova com um clique. A equipe decide; a IA executa o trabalho repetitivo em volta da decisão.",
    ic: "M4 8.5l2.6 2.6L12.5 5",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="c-section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="c-grid-bg" style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 90%)" }} />
      <div className="c-wrap" style={{ position: "relative" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 680, margin: "0 auto clamp(48px,6vw,72px)" }}>
          <span className="c-eyebrow gold"><span className="dot" />HUMAN-IN-THE-LOOP</span>
          <h2 className="c-h2" style={{ margin: "20px auto 0" }}>
            A IA faz o trabalho.<br />Você mantém o controle.
          </h2>
          <p className="c-lead" style={{ margin: "18px auto 0", textAlign: "center" }}>
            Cada ação automática passa por um ponto de aprovação humano. O
            escritório ganha velocidade sem abrir mão da responsabilidade técnica.
          </p>
        </div>

        <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.k} style={{ position: "relative", padding: "28px 26px", borderRadius: 16, background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: 11, background: "var(--gold-dim)", border: "1px solid var(--gold-line)", color: "var(--gold)" }}>
                  <svg width="19" height="19" viewBox="0 0 16 16" fill="none"><path d={s.ic} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "var(--muted)", fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em" }}>{s.k}</span>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 9 }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", textWrap: "pretty" }}>{s.d}</p>
              {i < steps.length - 1 && (
                <svg className="c-step-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden style={{ position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>
                  <path d="M6 12h12M13 7l5 5-5 5" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 780px){ .c-step-arrow { display: none; } }`}</style>
    </section>
  );
}
