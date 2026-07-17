/* Painel Executivo — balancete virado em gráfico para o cliente final (read-only). */
export default function ExecMock() {
  const bars = [
    { m: "Fev", h: 44 }, { m: "Mar", h: 58 }, { m: "Abr", h: 51 },
    { m: "Mai", h: 70 }, { m: "Jun", h: 82 }, { m: "Jul", h: 96 },
  ];
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M5 7V5a3 3 0 016 0v2M4 7h8v6H4z" stroke="#25a05f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          contta·ai/exec/aurora · <b>link do cliente</b>
        </span>
      </div>
      <div className="c-exec">
        <div className="c-exec-h">
          <div>
            <div className="c-exec-title">Padaria Aurora ME · Painel Executivo</div>
            <div className="c-exec-sub">Receita bruta — últimos 6 meses</div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#157347", background: "rgba(22,128,80,.1)", borderRadius: 100, padding: "4px 10px", height: "fit-content" }}>+38% no semestre</span>
        </div>

        <div className="c-bars">
          {bars.map((b, i) => (
            <div key={b.m} className={`c-bar${i < 5 ? "" : ""}`} style={{ height: `${b.h}%` }}>
              {i === 5 && (
                <span style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", fontSize: 10, fontWeight: 800, color: "#8a6a00", whiteSpace: "nowrap" }}>R$ 214k</span>
              )}
            </div>
          ))}
        </div>
        <div className="c-bar-x">{bars.map((b) => <span key={b.m}>{b.m}</span>)}</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 16 }}>
          {[["Faturamento", "R$ 214k"], ["Impostos", "R$ 31k"], ["Resultado", "R$ 48k"]].map(([l, v]) => (
            <div key={l} style={{ background: "#f6f5f1", border: "1px solid #e8e5dd", borderRadius: 9, padding: "9px 11px" }}>
              <div style={{ fontSize: 9, letterSpacing: ".05em", textTransform: "uppercase", color: "#8a6a00", fontWeight: 700 }}>{l}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#1c1a16", marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
