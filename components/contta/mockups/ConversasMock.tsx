/* Recriação fiel da tela Solicitações do Contta·ai — inbox de WhatsApp + thread.
   Bolhas douradas (identidade do produto), atendimento automático e sugestão por IA.
   Dados fictícios. */
export default function ConversasMock() {
  const list = [
    { av: "PA", nm: "Padaria Aurora ME", badge: "2", active: true },
    { av: "CV", nm: "Clínica Vitale", badge: "" },
    { av: "TL", nm: "Transportes Léo", badge: "6" },
  ];
  return (
    <div className="c-frame">
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">app.<b>contta·ai</b>/solicitacoes</span>
      </div>
      <div className="c-cv">
        <aside className="c-cv-list">
          <div className="c-cv-search">Buscar conversa…</div>
          {list.map((c) => (
            <div key={c.nm} className={`c-cv-item${c.active ? " active" : ""}`}>
              <span className="c-cv-av">{c.av}</span>
              <span className="c-cv-nm">{c.nm}</span>
              {c.badge && <span className="c-cv-badge">{c.badge}</span>}
            </div>
          ))}
        </aside>

        <section className="c-cv-thread">
          <div className="c-cv-h">
            <span className="c-cv-av">PA</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: "#1c1a16" }}>Padaria Aurora ME</div>
              <span style={{ fontSize: 8.5, fontWeight: 700, color: "#8a6a00", background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,.28)", borderRadius: 100, padding: "1px 7px" }}>Automático</span>
            </div>
            <span style={{ fontSize: 9.5, color: "#8a877f", border: "1px solid #e8e5dd", borderRadius: 7, padding: "4px 9px" }}>Encerrar</span>
          </div>

          <div className="c-cv-msgs">
            <span className="c-cv-day">Hoje</span>
            <div className="c-cv-b out">
              Olá! Para fechar a competência de <b>julho</b>, ainda faltam <b>2 notas de entrada</b> e o <b>extrato bancário</b>. 🙏
              <div className="c-cv-t">09:14 ✓✓</div>
            </div>
            <div className="c-cv-b in">
              Opa! O extrato eu mando agora, as notas já pedi pro fornecedor.
              <div className="c-cv-t" style={{ color: "#b8b3a4" }}>09:21</div>
            </div>
            <div className="c-cv-b out">
              Perfeito 🙌 Recebi o extrato — <b>já anexei ao seu processo</b>. Aviso quando as 2 notas chegarem.
              <div className="c-cv-t">09:22 ✓✓</div>
            </div>
          </div>

          <div className="c-cv-composer">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L5 9a2 2 0 003 3l5-5a3.5 3.5 0 00-5-5L3 7a5 5 0 007 7l4-4" stroke="#9a968c" strokeWidth="1.3" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 10.5, color: "#9a968c" }}>Escreva uma resposta…</span>
            <span className="c-cv-suggest">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.4 3.1L12.5 6l-2.2 2.2.6 3.3L8 9.9 5.1 11.5l.6-3.3L3.5 6l3.1-.9z" stroke="#c9a227" strokeWidth="1.2" strokeLinejoin="round" /></svg>
              Sugerir
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
