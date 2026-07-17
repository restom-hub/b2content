export default function Wordmark({
  size = 22,
  onDark = true,
}: {
  size?: number;
  onDark?: boolean;
}) {
  // Marca: um "c" geométrico formado por um anel aberto, com um ponto (o "nó" da IA)
  // no vão da abertura. Lê como conta/contábil + sinal ativo.
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <path
          d="M23 8.5A10 10 0 1 0 23 23.5"
          stroke="#34d399"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="24.5" cy="16" r="3.1" fill="#34d399" />
      </svg>
      <span
        style={{
          fontWeight: 800,
          fontSize: size * 0.86,
          letterSpacing: "-0.045em",
          lineHeight: 1,
          color: onDark ? "#f5f5f5" : "#0a0a0a",
        }}
      >
        Contta
        <span style={{ color: "#34d399" }}>·ai</span>
      </span>
    </span>
  );
}
