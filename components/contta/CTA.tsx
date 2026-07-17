export default function CTA() {
  return (
    <section id="demo" className="c-section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="c-wrap">
        <div
          data-reveal
          style={{
            position: "relative",
            borderRadius: 24,
            border: "1px solid var(--em-line)",
            background: "linear-gradient(180deg, rgba(52,211,153,0.06), rgba(255,255,255,0.01))",
            padding: "clamp(44px,7vw,84px) 24px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div className="c-grid-bg" style={{ maskImage: "radial-gradient(ellipse 60% 80% at 50% 30%, black 10%, transparent 80%)" }} />
          <div className="c-glow" aria-hidden style={{ top: -120, left: "50%", transform: "translateX(-50%)", width: 560, height: 360, background: "radial-gradient(ellipse, var(--em-glow) 0%, transparent 70%)" }} />

          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
            <h2 className="c-h2" style={{ fontSize: "clamp(30px,4.4vw,52px)", margin: "0 auto" }}>
              Veja o Contta·ai rodando<br />no seu escritório.
            </h2>
            <p className="c-lead" style={{ margin: "20px auto 0", textAlign: "center", fontSize: 17 }}>
              Uma demonstração de 30 minutos com um dos seus clientes reais. Sem
              compromisso — você sai sabendo exatamente quanto tempo a operação
              devolve para a equipe.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 34 }}>
              <a href="https://wa.me/5511936193035?text=Ol%C3%A1!%20Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Contta%C2%B7ai." target="_blank" rel="noopener" className="c-btn c-btn-primary" style={{ padding: "16px 30px", fontSize: 16 }}>
                Agendar demonstração
                <svg className="arr" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="mailto:contato@b2content.com?subject=Contta·ai" className="c-btn c-btn-ghost" style={{ padding: "16px 26px", fontSize: 16 }}>
                Falar com a equipe
              </a>
            </div>

            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 30, fontSize: 13, color: "var(--muted)" }}>
              {["Setup guiado", "Seus dados protegidos", "Condições de fundador"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l2.6 2.6L12.5 5" stroke="var(--em)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
