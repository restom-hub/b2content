export default function WhatsAppMock() {
  return (
    <div className="c-frame" style={{ maxWidth: 400, marginInline: "auto" }}>
      <div className="c-frame-bar">
        <span className="d" /><span className="d" /><span className="d" />
        <span className="url">Contta·ai · Cobrança automática</span>
      </div>
      <div className="c-wa">
        <div className="c-wa-h">
          <div className="c-wa-av">A</div>
          <div>
            <div className="c-wa-name">Padaria Aurora ME</div>
            <div className="c-wa-status">online</div>
          </div>
        </div>

        <div className="c-wa-badge">IA · cobrança de documentos pendentes</div>

        <div className="c-bubble out">
          Olá! Aqui é o assistente da <b>Contta·ai</b> 👋 Para fechar a competência
          de julho, ainda faltam <b>2 notas de entrada</b> e o <b>extrato bancário</b>.
          <span className="t">09:14 ✓✓</span>
        </div>

        <div className="c-bubble in">
          Opa, o extrato eu mando agora. As notas eu já pedi pro fornecedor.
          <span className="t">09:21</span>
        </div>

        <div className="c-bubble out">
          Perfeito 🙌 Recebi o extrato — <b>já anexei ao seu processo</b>.
          Aviso quando as 2 notas chegarem.
          <span className="t">09:22 ✓✓</span>
        </div>

        <div style={{ alignSelf: "flex-start", background: "#202c33", borderRadius: 12, borderBottomLeftRadius: 4, padding: "10px 14px" }}>
          <span className="c-typing"><i /><i /><i /></span>
        </div>
      </div>
    </div>
  );
}
