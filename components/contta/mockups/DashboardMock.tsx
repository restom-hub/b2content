/* Recriação fiel do painel Contta·ai (preto + dourado), dados fictícios. */

function SideItem({ label, active, d }: { label: string; active?: boolean; d: string }) {
  return (
    <div className={`c-app-nav${active ? " active" : ""}`}>
      <svg viewBox="0 0 16 16" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M5 7V5a3 3 0 016 0v2M4 7h8v6H4z" stroke="#25a05f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          app.<b>contta·ai</b>/dashboard
        </span>
      </div>

      <div className="c-app">
        <aside className="c-app-side">
          <div className="c-app-brand">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M23 8.5A10 10 0 1 0 23 23.5" stroke="#e8cf7a" strokeWidth="3.4" strokeLinecap="round"/><circle cx="24.5" cy="16" r="3.1" fill="#e8cf7a"/></svg>
            <span>Contta·ai</span>
          </div>
          <div className="c-app-navlabel">Visão</div>
          <SideItem label="Dashboard" active d="M2 8l6-5 6 5M4 7v6h8V7" />
          <SideItem label="Clientes" d="M6 7a2 2 0 100-4 2 2 0 000 4zM2 13c0-2 2-3 4-3s4 1 4 3M11 7.5a2 2 0 10.01-4 2 2 0 00-.01 4z" />
          <div className="c-app-navlabel">Operação</div>
          <SideItem label="Documentos" d="M4 2h5l3 3v9H4z M9 2v3h3" />
          <SideItem label="Cobrança" d="M2 4h12v8H2z M2 7h12" />
          <SideItem label="Solicitações" d="M3 3h10v7H6l-3 3z" />
          <div className="c-app-navlabel">Inteligência</div>
          <SideItem label="Painel Exec." d="M2 14V8m4 6V4m4 10V9m4 5V6" />
        </aside>

        <main className="c-app-main">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#1c1a16", letterSpacing: "-0.02em" }}>Visão Geral</div>
              <div style={{ fontSize: 10.5, color: "#6b6862" }}>Julho · 128 clientes ativos</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 10, color: "#8a6a00", fontWeight: 700, background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.28)", borderRadius: 7, padding: "5px 10px" }}>Este mês</span>
            </div>
          </div>

          <div className="c-kpis">
            <div className="c-kpi">
              <div className="lbl">Docs processados</div>
              <div className="val">3.482 <span className="u">notas</span></div>
              <div className="sub">↑ 12% vs. junho</div>
            </div>
            <div className="c-kpi">
              <div className="lbl">Pendências abertas</div>
              <div className="val">47</div>
              <div className="sub">18 cobradas hoje</div>
            </div>
            <div className="c-kpi">
              <div className="lbl">SLA no prazo</div>
              <div className="val">96<span className="u">%</span></div>
              <div className="sub">solicitações de clientes</div>
            </div>
          </div>

          <div className="c-tbl">
            <div className="c-tbl-h" style={{ gridTemplateColumns: "1.6fr 1fr .9fr" }}>
              <span>Cliente</span><span>Situação</span><span style={{ textAlign: "right" }}>Docs</span>
            </div>
            {[
              { n: "Padaria Aurora ME", s: ["ok", "Em dia"], v: "214" },
              { n: "Restom Engenharia", s: ["warn", "3 pendências"], v: "189" },
              { n: "Clínica Vitale", s: ["ok", "Em dia"], v: "156" },
              { n: "Transportes Léo", s: ["late", "CT-e atrasado"], v: "132" },
            ].map((r) => (
              <div key={r.n} className="c-tbl-r" style={{ gridTemplateColumns: "1.6fr 1fr .9fr" }}>
                <span style={{ fontWeight: 600 }}>{r.n}</span>
                <span><i className={`c-chip ${r.s[0]}`}>{r.s[1]}</i></span>
                <span className="num">{r.v}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
