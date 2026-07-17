/* Monitor de certificados digitais — vencidos / à vencer. */
export default function CertMock() {
  const rows = [
    { n: "Restom Engenharia LTDA", meta: "e-CNPJ A1 · vence em 8 dias", state: "warn", label: "À vencer" },
    { n: "Clínica Vitale ME", meta: "e-CNPJ A1 · vence em 62 dias", state: "ok", label: "Válido" },
    { n: "Transportes Léo", meta: "e-CNPJ A1 · venceu há 3 dias", state: "late", label: "Vencido" },
    { n: "Padaria Aurora ME", meta: "e-CNPJ A1 · vence em 140 dias", state: "ok", label: "Válido" },
  ];
  const ic: Record<string, { bg: string; fg: string; d: string }> = {
    ok: { bg: "rgba(22,128,80,.1)", fg: "#157347", d: "M4 8l3 3 5-6" },
    warn: { bg: "rgba(180,120,10,.12)", fg: "#a16207", d: "M8 4v5M8 11.5v.01" },
    late: { bg: "rgba(190,40,40,.1)", fg: "#b42318", d: "M5 5l6 6M11 5l-6 6" },
  };
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">app.<b>contta·ai</b>/certificados</span>
      </div>
      <div className="c-cert">
        <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1, background: "#fff", border: "1px solid #e8e5dd", borderRadius: 10, padding: "11px 13px" }}>
            <div style={{ fontSize: 9.5, letterSpacing: ".05em", textTransform: "uppercase", color: "#b42318", fontWeight: 700 }}>Vencidos</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1c1a16" }}>1</div>
          </div>
          <div style={{ flex: 1, background: "#fff", border: "1px solid #e8e5dd", borderRadius: 10, padding: "11px 13px" }}>
            <div style={{ fontSize: 9.5, letterSpacing: ".05em", textTransform: "uppercase", color: "#a16207", fontWeight: 700 }}>À vencer (30d)</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1c1a16" }}>1</div>
          </div>
        </div>
        {rows.map((r) => {
          const s = ic[r.state];
          return (
            <div key={r.n} className="c-cert-row">
              <div className="c-cert-ic" style={{ background: s.bg }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d={s.d} stroke={s.fg} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div className="c-cert-name">{r.n}</div>
                <div className="c-cert-meta">{r.meta}</div>
              </div>
              <i className={`c-chip ${r.state}`}>{r.label}</i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
