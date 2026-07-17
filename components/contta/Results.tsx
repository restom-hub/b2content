const outcomes = [
  {
    t: "Mais clientes por colaborador",
    d: "O trabalho repetitivo sai da mesa da equipe. A mesma estrutura passa a dar conta de um volume maior de clientes.",
    ic: "M6 7a2 2 0 100-4 2 2 0 000 4zM2 13c0-2 2-3 4-3s4 1 4 3M11 7.5a2 2 0 10.01-4M14 13c0-1.6-1.2-2.6-3-2.9",
  },
  {
    t: "Menos pendência esquecida",
    d: "Nada de fechar a competência caçando documento no WhatsApp pessoal. O que falta é cobrado e reconciliado sozinho.",
    ic: "M4 8.5l2.6 2.6L12.5 5",
  },
  {
    t: "Cliente que enxerga valor",
    d: "Com painel executivo e atendimento com SLA, o escritório deixa de ser despachante e vira consultor — e retém melhor.",
    ic: "M2 14V8m4 6V4m4 10V9m4 5V6",
  },
];

export default function Results() {
  return (
    <section id="resultados" className="c-section">
      <div className="c-wrap-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
          <div data-reveal style={{ maxWidth: 720 }}>
            <span className="c-eyebrow"><span className="dot" />POR QUE IMPORTA</span>
            <h2 className="c-h2" style={{ margin: "20px 0 0" }}>
              O teto operacional do escritório,{" "}
              <span style={{ color: "var(--gold-light)" }}>destravado.</span>
            </h2>
            <p className="c-lead" style={{ marginTop: 18 }}>
              A conta que não fecha em contabilidade é sempre a mesma: o volume
              cresce, a equipe não acompanha, a margem aperta. Contta·ai ataca
              exatamente a operação repetitiva que consome as horas — para o
              escritório ganhar rentabilidade sem crescer a equipe na mesma proporção.
            </p>
          </div>

          <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 1, marginTop: 48, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
            {outcomes.map((o) => (
              <div key={o.t} style={{ background: "var(--ink)", padding: "30px 28px" }}>
                <span style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 12, background: "var(--em-dim)", border: "1px solid var(--em-line)", color: "var(--em)", marginBottom: 18 }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d={o.ic} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 9 }}>{o.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", textWrap: "pretty" }}>{o.d}</p>
              </div>
            ))}
          </div>

          <p data-reveal style={{ marginTop: 22, fontSize: 13.5, color: "var(--muted)", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="c-live-dot" />
            Em validação com escritórios reais — os primeiros parceiros ajudam a
            moldar o produto e entram em condições de fundador.
          </p>
        </div>
      </div>
    </section>
  );
}
