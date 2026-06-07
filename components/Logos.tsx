const logos = [
  "Totvs", "RD Station", "Rock Content", "Resultados Digitais",
  "Conta Azul", "Movidesk", "Omie", "Linx",
];

export default function Logos() {
  return (
    <section style={{ padding: "48px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {logos.map((name) => (
            <span
              key={name}
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--surface-3)",
                letterSpacing: "-0.02em",
                filter: "grayscale(1)",
                opacity: 0.5,
                userSelect: "none",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
