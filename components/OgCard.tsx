// Shared visual for the Open Graph / Twitter preview cards (rendered by satori
// via next/og, so it only uses the subset of CSS that satori supports).

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 44"><path d="M4 3 L4 41 L30 22 Z" fill="#34d399"/><path d="M60 3 L60 41 L34 22 Z" fill="#34d399"/></svg>`;

export const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString("base64")}`;

export default function OgCard() {
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
      {/* Accent glow, echoing the hero section */}
      <div
        style={{
          position: "absolute",
          top: -180,
          left: 260,
          width: 720,
          height: 520,
          background:
            "radial-gradient(ellipse, rgba(52,211,153,0.25) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={116} height={80} alt="" />
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700 }}>
          <span style={{ color: "#34d399" }}>b2</span>
          <span style={{ color: "#f5f5f5" }}>content</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 68,
          fontWeight: 700,
          color: "#f5f5f5",
          lineHeight: 1.15,
          letterSpacing: -1.5,
        }}
      >
        IA que opera. Processos que escalam.
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 30,
          color: "#888888",
          lineHeight: 1.4,
          maxWidth: 900,
        }}
      >
        Automatizamos qualquer processo com IA — de workflows internos a agentes
        integrados aos seus sistemas.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 52,
          fontSize: 26,
          color: "#34d399",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            background: "#34d399",
          }}
        />
        b2content.com
      </div>
    </div>
  );
}
