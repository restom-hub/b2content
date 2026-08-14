// Shared visual for the Contta·ai Open Graph / Twitter preview cards (rendered
// by satori via next/og, so it only uses the subset of CSS that satori supports).

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M23 8.5A10 10 0 1 0 23 23.5" stroke="#34d399" stroke-width="3.4" stroke-linecap="round" fill="none"/><circle cx="24.5" cy="16" r="3.1" fill="#34d399"/></svg>`;

export const markDataUri = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;

export default function ConttaOgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0a0a0a",
        padding: "0 88px",
        position: "relative",
      }}
    >
      {/* Emerald glow (casa) with a warm gold wash (produto) */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: 300,
          width: 760,
          height: 540,
          background:
            "radial-gradient(ellipse, rgba(52,211,153,0.22) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: -80,
          width: 620,
          height: 440,
          background:
            "radial-gradient(ellipse, rgba(201,162,39,0.14) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          alignSelf: "flex-start",
          border: "1px solid rgba(201,162,39,0.28)",
          background: "rgba(201,162,39,0.12)",
          borderRadius: 100,
          padding: "10px 22px",
          fontSize: 22,
          fontWeight: 600,
          color: "#e8cf7a",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            background: "#c9a227",
          }}
        />
        IA CONTÁBIL · UM PRODUTO B2CONTENT
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri} width={62} height={62} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 50,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#f5f5f5" }}>Contta</span>
          <span style={{ color: "#34d399" }}>·ai</span>
        </div>
      </div>

      {/* satori collapses whitespace between inline spans, so the words are
          flex items with an explicit column gap standing in for the spaces. */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px 18px",
          marginTop: 40,
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: -2,
          color: "#f5f5f5",
        }}
      >
        <span>A IA que</span>
        <span style={{ color: "#34d399" }}>opera</span>
        <span>o seu</span>
        <span>escritório contábil.</span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 26,
          fontSize: 27,
          color: "#8b8f96",
          lineHeight: 1.4,
          maxWidth: 940,
        }}
      >
        Recebe e classifica documentos, cobra o que falta no WhatsApp, atende
        seus clientes e transforma balancetes em painéis executivos.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 44,
          fontSize: 24,
          color: "#34d399",
        }}
      >
        <div
          style={{ width: 10, height: 10, borderRadius: 5, background: "#34d399" }}
        />
        contta-ai.b2content.com
      </div>
    </div>
  );
}
