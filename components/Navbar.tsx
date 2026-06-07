"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <Logo size={32} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: "0.07em", lineHeight: 1.1 }}>
              <span style={{ color: "var(--accent)" }}>b2</span><span style={{ color: "var(--foreground)" }}>content</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.02em", lineHeight: 1 }}>
              Growth Marketing B2B
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-links">
          {["Serviços", "Resultados", "Processo", "Cases"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#contato"
            style={{
              background: "var(--accent)",
              color: "var(--ink)",
              padding: "10px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Falar com especialista
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </header>
  );
}
