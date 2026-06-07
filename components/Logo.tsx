export default function Logo({ size = 36, color = "#00e676" }: { size?: number; color?: string }) {
  // The icon is two chevrons (> and <) meeting at the center.
  // Left chevron opens wide on the left, narrows to a point at center-right.
  // Right chevron opens wide on the right, narrows to a point at center-left.
  // Together they read as a funnel that narrows then expands — like a bowtie.
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="B2Content logo icon"
    >
      {/* Left filled triangle — wide on left, tip pointing right */}
      <path
        d="M4 3 L4 41 L30 22 Z"
        fill={color}
        stroke="none"
      />
      {/* Right filled triangle — wide on right, tip pointing left */}
      <path
        d="M60 3 L60 41 L34 22 Z"
        fill={color}
        stroke="none"
      />
    </svg>
  );
}
