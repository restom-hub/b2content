/* Recriação fiel do Painel Executivo do Contta·ai — balancete virado em decisões.
   Cards de indicadores + gráfico + leitura por IA, via link público somente-leitura.
   Dados fictícios. */
function Metric({ label, value, note, tone, d }: { label: string; value: string; note: string; tone: "up" | "flat"; d: string }) {
  const c = tone === "up" ? "#157347" : "#8a6a00";
  return (
    <div style={{ background: "#fff", border: "1px solid #e8e5dd", borderRadius: 12, padding: "11px 13px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
        <span style={{ width: 22, height: 22, borderRadius: 7, background: "rgba(201,162,39,0.12)", display: "grid", placeItems: "center" }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d={d} stroke="#8a6a00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span style={{ fontSize: 9, letterSpacing: ".04em", textTransform: "uppercase", color: "#8a877f", fontWeight: 700 }}>{label}</span>
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, color: "#1c1a16", letterSpacing: "-0.02em" }}>{value}</div>
      <div style={{ fontSize: 9.5, color: c, fontWeight: 600, marginTop: 1 }}>{note}</div>
    </div>
  );
}

export default function ExecMock() {
  const bars = [{ m: "Fev", h: 44 }, { m: "Mar", h: 58 }, { m: "Abr", h: 51 }, { m: "Mai", h: 70 }, { m: "Jun", h: 82 }, { m: "Jul", h: 96 }];
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M5 7V5a3 3 0 016 0v2M4 7h8v6H4z" stroke="#25a05f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          contta·ai/balancete · <b>link do cliente</b>
        </span>
      </div>
      <div className="c-exec">
        <div className="c-exec-h">
          <div>
            <div className="c-exec-title">Padaria Aurora ME · Painel Executivo</div>
            <div className="c-exec-sub">O balancete traduzido em decisões — jul/2026</div>
          </div>
          <span style={{ fontSize: 9, fontWeight: 700, color: "#157347", background: "rgba(22,128,80,.1)", borderRadius: 100, padding: "4px 9px", height: "fit-content" }}>somente leitura</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
          <Metric label="Receita bruta" value="R$ 214 mil" note="↑ 38% no semestre" tone="up" d="M2 12l4-5 3 3 5-6" />
          <Metric label="Resultado" value="R$ 48 mil" note="↑ 12% vs. jun" tone="up" d="M8 13V3M4 7l4-4 4 4" />
          <Metric label="Margem líquida" value="22,4%" note="saudável" tone="flat" d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 5v3l2 1" />
        </div>

        <div style={{ fontSize: 9.5, letterSpacing: ".04em", textTransform: "uppercase", color: "#8a877f", fontWeight: 700, marginBottom: 8 }}>Receita bruta — 6 meses</div>
        <div className="c-bars">
          {bars.map((b, i) => (
            <div key={b.m} className="c-bar" style={{ height: `${b.h}%` }}>
              {i === 5 && <span style={{ position: "absolute", top: -17, left: "50%", transform: "translateX(-50%)", fontSize: 9.5, fontWeight: 800, color: "#8a6a00", whiteSpace: "nowrap" }}>R$ 214k</span>}
            </div>
          ))}
        </div>
        <div className="c-bar-x">{bars.map((b) => <span key={b.m}>{b.m}</span>)}</div>

        <div style={{ display: "flex", gap: 8, marginTop: 14, background: "#f6f5f1", border: "1px solid #e8e5dd", borderRadius: 10, padding: "10px 12px" }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><path d="M8 1.5l1.7 3.8L14 6l-3 3 .8 4.3L8 11.4 4.2 13.3 5 9 2 6l4.3-.7z" stroke="#c9a227" strokeWidth="1.2" strokeLinejoin="round" /></svg>
          <div style={{ fontSize: 10.5, lineHeight: 1.5, color: "#4b483f" }}>
            A receita cresceu <b style={{ color: "#8a6a00" }}>38%</b> no semestre e o resultado somou <b style={{ color: "#8a6a00" }}>R$ 48 mil</b> em julho, com margem de <b style={{ color: "#8a6a00" }}>22,4%</b>.
          </div>
        </div>
      </div>
    </div>
  );
}
