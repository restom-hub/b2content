/* Fila de documentos sendo classificados pela IA (NF-e, NFS-e, CT-e). */
export default function DocsMock() {
  const rows = [
    { file: "NFe_35240...8842.xml", type: ["NF-e", "g"], cli: "Padaria Aurora", conf: "99%" },
    { file: "boleto_energia_07.pdf", type: ["Despesa", "g"], cli: "Clínica Vitale", conf: "97%" },
    { file: "CTe_frete_5521.xml", type: ["CT-e", "g"], cli: "Transportes Léo", conf: "98%" },
    { file: "extrato_itau_jul.pdf", type: ["Extrato", "g"], cli: "Restom Eng.", conf: "95%" },
    { file: "nfse_2231.xml", type: ["NFS-e", "g"], cli: "Studio Nôa", conf: "99%" },
  ];
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">app.<b>contta·ai</b>/documentos</span>
      </div>
      <div style={{ background: "#f6f5f1", padding: "16px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#1c1a16" }}>Entrada de documentos</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, color: "#157347", background: "rgba(22,128,80,.1)", border: "1px solid rgba(22,128,80,.2)", borderRadius: 100, padding: "3px 9px" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} /> IA classificando
            </span>
          </div>
          <span style={{ fontSize: 10.5, color: "#6b6862" }}>5 novos · 0 revisão manual</span>
        </div>

        <div className="c-tbl">
          <div className="c-tbl-h" style={{ gridTemplateColumns: "1.7fr .8fr 1.1fr .7fr" }}>
            <span>Arquivo</span><span>Tipo</span><span>Cliente</span><span style={{ textAlign: "right" }}>Confiança</span>
          </div>
          {rows.map((r) => (
            <div key={r.file} className="c-tbl-r" style={{ gridTemplateColumns: "1.7fr .8fr 1.1fr .7fr" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "ui-monospace, monospace", fontSize: 10.5, color: "#4b483f" }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 2h5l3 3v9H4z" stroke="#8a6a00" strokeWidth="1.3"/><path d="M9 2v3h3" stroke="#8a6a00" strokeWidth="1.3"/></svg>
                {r.file}
              </span>
              <span><i className={`c-chip ${r.type[1]}`}>{r.type[0]}</i></span>
              <span style={{ fontSize: 11.5 }}>{r.cli}</span>
              <span className="num">{r.conf}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
