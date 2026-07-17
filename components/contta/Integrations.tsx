const sources = [
  { label: "Domínio", d: "M3 4h10v8H3z M3 7h10" },
  { label: "SIEG", d: "M8 2l5 3v6l-5 3-5-3V5z" },
  { label: "WhatsApp", d: "M2 13l1-3a6 6 0 113 3z" },
  { label: "E-mail", d: "M2 4h12v8H2z M2 5l6 4 6-4" },
  { label: "XML / PDF", d: "M4 2h5l3 3v9H4z M9 2v3h3" },
];

export default function Integrations() {
  return (
    <section className="c-section" style={{ paddingTop: 0 }}>
      <div className="c-wrap" data-reveal>
        <div
          style={{
            position: "relative",
            border: "1px solid var(--line)",
            borderRadius: 20,
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
            padding: "clamp(32px,5vw,52px)",
            overflow: "hidden",
          }}
        >
          <div className="c-glow" aria-hidden style={{ top: -80, right: -40, width: 340, height: 260, background: "radial-gradient(ellipse, var(--em-glow) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
            <span className="c-eyebrow"><span className="dot" />NÃO SUBSTITUI. POTENCIALIZA.</span>
            <h2 className="c-h2" style={{ fontSize: "clamp(26px,3.4vw,40px)", margin: "18px auto 14px" }}>
              Uma camada de IA sobre o que<br />o seu escritório já usa.
            </h2>
            <p className="c-lead" style={{ margin: "0 auto", textAlign: "center", fontSize: 16 }}>
              Contta·ai não troca o seu sistema contábil. Ele conecta às suas
              fontes, organiza a operação em volta delas e devolve tempo à equipe.
            </p>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
            {sources.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: "12px 16px" }}>
                <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d={s.d} stroke="var(--muted)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--secondary)" }}>{s.label}</span>
              </div>
            ))}
            <svg width="30" height="16" viewBox="0 0 30 16" fill="none" style={{ margin: "0 4px" }}><path d="M2 8h24M22 3l5 5-5 5" stroke="var(--em)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--em-dim)", border: "1px solid var(--em-line)", borderRadius: 12, padding: "12px 18px" }}>
              <svg width="17" height="17" viewBox="0 0 32 32" fill="none"><path d="M23 8.5A10 10 0 1 0 23 23.5" stroke="#34d399" strokeWidth="3.4" strokeLinecap="round"/><circle cx="24.5" cy="16" r="3.1" fill="#34d399"/></svg>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--em)" }}>Contta·ai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
