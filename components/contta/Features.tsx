import type { ReactNode } from "react";
import DocsMock from "./mockups/DocsMock";
import WhatsAppMock from "./mockups/WhatsAppMock";
import ExecMock from "./mockups/ExecMock";
import CertMock from "./mockups/CertMock";

function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M5.5 9.2l2.3 2.3L12.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureRow({
  icon,
  eyebrow,
  title,
  body,
  points,
  media,
  reversed,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  body: string;
  points: string[];
  media: ReactNode;
  reversed?: boolean;
}) {
  return (
    <div data-reveal className={`c-feature${reversed ? " rev" : ""}`}>
      <div>
        <div className="c-feature-ey">
          <span className="ic">{icon}</span>
          {eyebrow}
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul>
          {points.map((p) => (
            <li key={p}><Check />{p}</li>
          ))}
        </ul>
      </div>
      <div className="c-feature-media">{media}</div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="recursos" className="c-section">
      <div className="c-wrap" style={{ textAlign: "center", marginBottom: "clamp(48px,7vw,80px)" }}>
        <div data-reveal>
          <span className="c-eyebrow"><span className="dot" />O QUE O CONTTA·AI FAZ</span>
          <h2 className="c-h2" style={{ margin: "20px auto 0", maxWidth: 720 }}>
            Quatro gargalos do escritório,<br />resolvidos sem aumentar a equipe.
          </h2>
          <p className="c-lead" style={{ margin: "18px auto 0", textAlign: "center" }}>
            Cada recurso ataca uma dor real do dia a dia contábil — da entrada do
            documento ao painel que o seu cliente abre.
          </p>
        </div>
      </div>

      <div className="c-wrap" style={{ display: "flex", flexDirection: "column", gap: "clamp(72px,11vw,128px)" }}>
        <FeatureRow
          icon={<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 2h5l3 3v9H4z" stroke="currentColor" strokeWidth="1.4"/><path d="M9 2v3h3M6 9h4M6 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>}
          eyebrow="Documentos"
          title={<>Documentos que se<br />classificam sozinhos.</>}
          body="Recebe XMLs e PDFs de todas as fontes, lê o conteúdo com IA e classifica por tipo, cliente e competência. Só o que a IA não tem certeza vai para revisão humana."
          points={[
            "NF-e, NFS-e, CT-e, extratos e despesas reconhecidos automaticamente",
            "Nível de confiança por documento — a IA propõe, você confirma",
            "Zero digitação: o documento chega e já entra no processo certo",
          ]}
          media={<DocsMock />}
        />

        <FeatureRow
          reversed
          icon={<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 13l1-3a6 6 0 113 3l-4 0z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>}
          eyebrow="Cobrança"
          title={<>Cobra o que falta,<br />no WhatsApp, sozinho.</>}
          body="Sabe exatamente quais documentos faltam para fechar a competência de cada cliente — e cobra com educação e contexto pelo WhatsApp, sem você levantar o dedo."
          points={[
            "Detecta a pendência e dispara a mensagem no tom do escritório",
            "Recebe o arquivo de volta e já anexa ao processo do cliente",
            "Você acompanha tudo por um inbox único, com histórico",
          ]}
          media={<WhatsAppMock />}
        />

        <FeatureRow
          icon={<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 14V8m4 6V4m4 10V9m4 5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>}
          eyebrow="Painel Executivo"
          title={<>O balancete vira um<br />painel que o cliente entende.</>}
          body="Transforma o balancete em um painel executivo visual, acessível por link público somente-leitura. O cliente enxerga a saúde do próprio negócio — e passa a valorizar o escritório."
          points={[
            "Receita, impostos e resultado em gráficos claros, sem jargão",
            "Link seguro somente-leitura — o cliente acessa quando quiser",
            "Posiciona o escritório como consultor, não só como despachante",
          ]}
          media={<ExecMock />}
        />

        <FeatureRow
          reversed
          icon={<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M5 7V5a3 3 0 016 0v2M4 7h8v7H4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          eyebrow="Certificados"
          title={<>Nenhum certificado<br />vence sem aviso.</>}
          body="Monitora os certificados digitais de todos os clientes e avisa com antecedência o que está vencido ou à vencer. Fim da correria de última hora que trava a emissão fiscal."
          points={[
            "Painel de vencidos e à vencer, sempre atualizado",
            "Alerta antecipado por cliente — antes de virar problema",
            "Uma dor de compliance que some do radar da equipe",
          ]}
          media={<CertMock />}
        />
      </div>
    </section>
  );
}
