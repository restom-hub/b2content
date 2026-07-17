/* Recriação fiel do painel Contta·ai — Visão geral (preto + dourado).
   Baseado na tela real do app; dados agregados fictícios, sem clientes reais. */

function SideItem({ label, active, badge, d }: { label: string; active?: boolean; badge?: string; d: string }) {
  return (
    <div className={`c-app-nav${active ? " active" : ""}`}>
      <svg viewBox="0 0 16 16" fill="none"><path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span style={{ flex: 1 }}>{label}</span>
      {badge && <span style={{ background: "#c0392b", color: "#fff", fontSize: 8.5, fontWeight: 800, borderRadius: 100, minWidth: 15, height: 15, display: "grid", placeItems: "center", padding: "0 4px" }}>{badge}</span>}
    </div>
  );
}

function Kpi({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="c-kpi" style={{ display: "flex", flexDirection: "column" }}>
      <div className="lbl">{label}</div>
      <div className="sub" style={{ margin: "0 0 6px" }}>{sub}</div>
      <div style={{ marginTop: "auto" }}>{children}</div>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M5 7V5a3 3 0 016 0v2M4 7h8v6H4z" stroke="#25a05f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          app.<b>contta·ai</b>/dashboard
        </span>
      </div>

      <div className="c-app">
        <aside className="c-app-side">
          <div className="c-app-brand">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M23 8.5A10 10 0 1 0 23 23.5" stroke="#e8cf7a" strokeWidth="3.4" strokeLinecap="round" /><circle cx="24.5" cy="16" r="3.1" fill="#e8cf7a" /></svg>
            <span>Contta·ai</span>
          </div>
          <SideItem label="Visão geral" active d="M2 8l6-5 6 5M4 7v6h8V7" />
          <div className="c-app-navlabel">Operação</div>
          <SideItem label="Clientes" d="M6 7a2 2 0 100-4 2 2 0 000 4zM2 13c0-2 2-3 4-3s4 1 4 3" />
          <SideItem label="Documentos" d="M4 2h5l3 3v9H4z M9 2v3h3" />
          <SideItem label="Notas Fiscais" d="M4 2h8v12l-2-1.3L8 14l-2-1.3L4 14z M6 5h4M6 8h4" />
          <SideItem label="Tarefas" d="M3 4h10M3 8h10M3 12h6" />
          <div className="c-app-navlabel">Atendimento</div>
          <SideItem label="Solicitações" badge="1" d="M8 2a6 6 0 016 6v3a2 2 0 01-2 2M8 2a6 6 0 00-6 6v3a2 2 0 002 2h1v-4H3" />
          <div className="c-app-navlabel">Inteligência</div>
          <SideItem label="Painel Executivo" d="M2 14V8m4 6V4m4 10V9m4 5V6" />
        </aside>

        <main className="c-app-main" style={{ padding: "16px 18px" }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#1c1a16", letterSpacing: "-0.02em" }}>Visão geral</div>
            <div style={{ fontSize: 10.5, color: "#6b6862" }}>Operação do escritório em um relance</div>
          </div>

          {/* abas */}
          <div style={{ display: "flex", gap: 20, borderBottom: "1px solid #e8e5dd", marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#8a6a00", paddingBottom: 8, borderBottom: "2px solid #c9a227", marginBottom: -1 }}>Eficiência Operacional</span>
            <span style={{ fontSize: 11, color: "#8a877f", paddingBottom: 8 }}>Saúde da Carteira de Clientes</span>
          </div>

          {/* 5 KPIs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 12 }}>
            <Kpi label="Status Certificados" sub="Compliance">
              <div style={{ display: "flex", gap: 10 }}>
                <div><div style={{ fontSize: 9, color: "#8a877f" }}>Vencidos</div><div style={{ fontSize: 18, fontWeight: 800, color: "#b42318" }}>1</div></div>
                <div><div style={{ fontSize: 9, color: "#8a877f" }}>À vencer</div><div style={{ fontSize: 18, fontWeight: 800, color: "#a16207" }}>6</div></div>
              </div>
            </Kpi>
            <Kpi label="Docs p/ revisão" sub="Fila de triagem"><div style={{ fontSize: 22, fontWeight: 800, color: "#1c1a16" }}>1</div></Kpi>
            <Kpi label="Última varredura" sub="NF-e · SEFAZ"><div style={{ fontSize: 20, fontWeight: 800, color: "#1c1a16" }}>há 3 min</div></Kpi>
            <Kpi label="Pendências" sub="Em aberto (total)"><div style={{ fontSize: 22, fontWeight: 800, color: "#b42318" }}>726</div></Kpi>
            <Kpi label="Solicitações" sub="Via WhatsApp"><div style={{ fontSize: 22, fontWeight: 800, color: "#8a6a00" }}>1</div></Kpi>
          </div>

          {/* gráficos */}
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 10 }}>
            <div className="c-kpi" style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <span style={{ fontSize: 11.5, fontWeight: 800, color: "#1c1a16" }}>Tarefas &amp; Pendências</span>
                <span style={{ fontSize: 9, color: "#8a877f" }}>jul/2026</span>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 9, color: "#6b6862", marginBottom: 6 }}>
                <span>Em aberto: <b style={{ color: "#8a6a00" }}>726</b></span>
                <span>Geradas: <b style={{ color: "#1c1a16" }}>951</b></span>
                <span>Resolvidas: <b style={{ color: "#157347" }}>225</b></span>
              </div>
              <svg viewBox="0 0 260 78" style={{ width: "100%", height: 78 }} preserveAspectRatio="none">
                <line x1="0" y1="4" x2="260" y2="70" stroke="#d9d4c8" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points="0,10 26,11 52,12 78,12 104,13 130,14 156,15 182,17 208,42 234,58 260,66" fill="none" stroke="#c9a227" strokeWidth="2" />
                {[0,26,52,78,104,130,156,182,208,234,260].map((x,i)=>{const y=[10,11,12,12,13,14,15,17,42,58,66][i];return <circle key={x} cx={x} cy={y} r="1.8" fill="#c9a227"/>;})}
              </svg>
            </div>
            <div className="c-kpi" style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <span style={{ fontSize: 11.5, fontWeight: 800, color: "#1c1a16" }}>Solicitações (WhatsApp)</span>
                <span style={{ fontSize: 9, color: "#8a877f" }}>14 dias</span>
              </div>
              <div style={{ fontSize: 9, color: "#6b6862", marginBottom: 6 }}>Em aberto hoje: <b style={{ color: "#8a6a00" }}>1</b></div>
              <svg viewBox="0 0 240 84" style={{ width: "100%", height: 84 }} preserveAspectRatio="none">
                <polyline points="0,72 20,72 40,72 60,72 80,72 100,72 120,72 140,72 160,72 180,72 200,72 220,30 240,10" fill="none" stroke="#c9a227" strokeWidth="2" />
                {[[0,72],[220,30],[240,10]].map(([x,y])=> <circle key={x} cx={x} cy={y} r="2" fill="#c9a227"/>)}
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
