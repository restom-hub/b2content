/* Recriação fiel da tela Documentos do Contta·ai — triagem e classificação por IA.
   Colunas reais: Cliente · Arquivo · Obrigação (IA) · Competência · Status · Origem · Recebido em.
   Dados fictícios. */
export default function DocsMock() {
  const cols = "1.5fr 1.5fr .9fr .8fr .9fr .8fr";
  const rows = [
    { cli: "Padaria Aurora ME", file: "NFe_35240...8842.xml", ob: ["Entrada", "warn"], comp: "2026-07", st: ["Classificado", "blue"], org: "WhatsApp" },
    { cli: "Clínica Vitale ME", file: "boleto_energia_07.pdf", ob: ["Despesa", "warn"], comp: "2026-07", st: ["Classificado", "blue"], org: "E-mail" },
    { cli: "Transportes Léo", file: "CTe_frete_5521.xml", ob: ["Frete", "warn"], comp: "2026-07", st: ["Em revisão", "gray"], org: "WhatsApp" },
    { cli: "Studio Nôa", file: "nfse_2231.xml", ob: ["Serviço", "warn"], comp: "2026-06", st: ["Classificado", "blue"], org: "Upload" },
  ];
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">app.<b>contta·ai</b>/documentos</span>
      </div>
      <div style={{ background: "#f6f5f1", padding: "16px 18px" }}>
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#1c1a16" }}>Documentos</span>
        </div>
        <div style={{ fontSize: 10, color: "#6b6862", marginBottom: 12 }}>Triagem, classificação e revisão de documentos recebidos</div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, color: "#157347", background: "rgba(22,128,80,.1)", border: "1px solid rgba(22,128,80,.2)", borderRadius: 100, padding: "3px 9px" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} /> IA classificando
          </span>
          <span style={{ fontSize: 10, color: "#8a877f" }}>4 recebidos · 1 em revisão</span>
        </div>

        <div className="c-tbl">
          <div className="c-tbl-h" style={{ gridTemplateColumns: cols, whiteSpace: "nowrap" }}>
            <span>Cliente</span><span>Arquivo</span><span>Obrigação</span><span>Compet.</span><span>Status</span><span>Origem</span>
          </div>
          {rows.map((r) => (
            <div key={r.file} className="c-tbl-r" style={{ gridTemplateColumns: cols }}>
              <span style={{ fontWeight: 600, fontSize: 11 }}>{r.cli}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#4b483f" }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M4 2h5l3 3v9H4z" stroke="#8a6a00" strokeWidth="1.3" /><path d="M9 2v3h3" stroke="#8a6a00" strokeWidth="1.3" /></svg>
                {r.file}
              </span>
              <span><i className={`c-chip ${r.ob[1]}`}>{r.ob[0]}</i></span>
              <span style={{ fontSize: 10.5, color: "#6b6862", fontVariantNumeric: "tabular-nums" }}>{r.comp}</span>
              <span><i className={`c-chip ${r.st[1]}`}>{r.st[0]}</i></span>
              <span><i className="c-chip gray">{r.org}</i></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
