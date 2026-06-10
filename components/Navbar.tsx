"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const navItems = [
  {
    label: "Soluções",
    href: "#serviços",
    submenu: [
      { label: "SEO & Conteúdo", desc: "Estratégia editorial que domina rankings", href: "#serviços" },
      { label: "Inbound Marketing", desc: "Funil completo de atração e conversão", href: "#serviços" },
      { label: "Demand Generation", desc: "Campanhas multicanal com atribuição clara", href: "#serviços" },
      { label: "Content Operations", desc: "Estrutura editorial escalável", href: "#serviços" },
      { label: "Revenue Marketing", desc: "Conteúdo que vira pipeline mensurável", href: "#serviços" },
      { label: "Estratégia de Marca", desc: "Posicionamento que diferencia no mercado", href: "#serviços" },
    ],
  },
  {
    label: "Projetos",
    href: "#cases",
    submenu: [
      { label: "Automação de Processos com IA", desc: "Em parceria com Quick Solutions AI", href: "#automação", badge: "Parceria" },
      { label: "Arquitetura de Dados de Marketing", desc: "Em parceria com Quick Solutions AI", href: "#automação", badge: "Parceria" },
      { label: "Transformação Digital B2B", desc: "Modernização de presença digital", href: "#automação" },
      { label: "Cases de Resultado", desc: "Resultados reais de clientes reais", href: "#cases" },
    ],
  },
  { label: "Processo", href: "#processo" },
  { label: "Resultados", href: "#resultados" },
];

type SubmenuItem = {
  label: string;
  desc: string;
  href: string;
  badge?: string;
};

function Dropdown({ items, onClose }: { items: SubmenuItem[]; onClose: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "8px",
        minWidth: 320,
        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.8)",
        animation: "dropIn 0.15s ease",
        zIndex: 100,
      }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            padding: "12px 14px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#f5f5f5", lineHeight: 1.3, marginBottom: 2 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.4 }}>{item.desc}</div>
          </div>
          {item.badge && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#34d399",
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: 4,
                padding: "2px 7px",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              {item.badge}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(10,10,10,0.94)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
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
              <div style={{ fontWeight: 800, fontSize: 23, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                <span style={{ color: "#34d399" }}>b2</span>
                <span style={{ color: "#f5f5f5" }}>content</span>
              </div>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.05em", lineHeight: 1 }}>
                IA que opera. Processos que escalam.
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: activeDropdown === item.label ? "#f5f5f5" : "#888",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: 8,
                    transition: "color 0.15s, background 0.15s",
                    background: activeDropdown === item.label ? "rgba(255,255,255,0.05)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
                    if (!item.submenu) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeDropdown !== item.label) {
                      (e.currentTarget as HTMLElement).style.color = "#888";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transition: "transform 0.2s",
                        transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.5,
                      }}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
                {item.submenu && activeDropdown === item.label && (
                  <Dropdown items={item.submenu} onClose={() => setActiveDropdown(null)} />
                )}
              </div>
            ))}

            <a
              href="https://quicksolutions-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: "#888",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 8,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#34d399")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              Parceiros
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ opacity: 0.5 }}>
                <path d="M2 9L9 2M9 2H4M9 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#f5f5f5",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Menu"
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor", transition: "transform 0.2s, opacity 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: "currentColor", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: "#0f0f0f",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px 24px",
            }}
          >
            {navItems.map((item) => (
              <div key={item.label} style={{ marginBottom: 4 }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 500,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div style={{ paddingLeft: 16, paddingTop: 4, paddingBottom: 8 }}>
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        style={{
                          display: "block",
                          padding: "7px 0",
                          color: "#666",
                          textDecoration: "none",
                          fontSize: 13,
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#automação"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                background: "#34d399",
                color: "#0a0a0a",
                padding: "14px 20px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              Falar com especialista
            </a>
          </div>
        )}
      </header>
    </>
  );
}
