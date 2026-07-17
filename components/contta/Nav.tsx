"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";

const links = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        background: scrolled ? "rgba(10,10,10,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        transition: "background .3s, border-color .3s",
      }}
    >
      <nav
        className="c-wrap-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        <a href="#top" aria-label="Contta·ai — início" style={{ textDecoration: "none" }}>
          <Wordmark size={22} />
        </a>

        <div className="c-nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14.5,
                fontWeight: 500,
                color: "var(--secondary)",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: 8,
                transition: "color .2s, background-color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="c-nav-cta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#demo"
            className="c-btn c-btn-primary"
            style={{ padding: "11px 20px", fontSize: 14 }}
          >
            Agendar demonstração
            <svg className="arr" width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* botão mobile */}
        <button
          className="c-nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--line)",
            borderRadius: 9,
            padding: 9,
            cursor: "pointer",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d={open ? "M4 4l10 10M14 4L4 14" : "M3 5h12M3 9h12M3 13h12"} stroke="#f5f5f5" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* menu mobile */}
      {open && (
        <div
          className="c-nav-mobile"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 4,
            padding: "8px 24px 20px",
            borderTop: "1px solid var(--line)",
            background: "rgba(10,10,10,0.96)",
            backdropFilter: "blur(14px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, color: "var(--secondary)", textDecoration: "none", padding: "12px 4px", borderBottom: "1px solid var(--line-soft)" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="c-btn c-btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
            Agendar demonstração
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 780px) {
          .c-nav-links, .c-nav-cta { display: none !important; }
          .c-nav-burger { display: inline-flex !important; }
          .c-nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
