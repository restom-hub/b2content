"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section
      id="contato"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 20 }}>
          DIAGNÓSTICO GRATUITO
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--foreground)",
            marginBottom: 20,
          }}
        >
          Pronto para crescer com consistência?
        </h2>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 48 }}>
          Agende um diagnóstico gratuito de 45 minutos. Analisamos seu funil, identificamos os maiores gaps e entregamos um plano de ação sem compromisso.
        </p>

        {submitted ? (
          <div
            style={{
              background: "var(--accent-dim)",
              border: "1px solid rgba(52,211,153,0.25)",
              borderRadius: 12,
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "var(--foreground)", marginBottom: 8 }}>
              Solicitação recebida!
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)" }}>
              Nossa equipe entrará em contato em até 24 horas úteis para agendar seu diagnóstico.
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "var(--ink)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: 32,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
                  NOME
                </label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  style={{
                    width: "100%",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    fontSize: 14,
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
                  EMPRESA
                </label>
                <input
                  required
                  type="text"
                  placeholder="Sua empresa"
                  style={{
                    width: "100%",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    fontSize: 14,
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
                EMAIL CORPORATIVO
              </label>
              <input
                required
                type="email"
                placeholder="voce@empresa.com"
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "12px 14px",
                  fontSize: 14,
                  color: "var(--foreground)",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
                MAIOR DESAFIO ATUAL
              </label>
              <select
                required
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "12px 14px",
                  fontSize: 14,
                  color: "var(--muted)",
                  outline: "none",
                  appearance: "none",
                  cursor: "pointer",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              >
                <option value="">Selecione...</option>
                <option value="traffic">Gerar mais tráfego qualificado</option>
                <option value="leads">Aumentar geração de leads</option>
                <option value="pipeline">Construir pipeline previsível</option>
                <option value="cac">Reduzir custo de aquisição</option>
                <option value="attribution">Provar ROI do marketing</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? "var(--surface-3)" : "var(--accent)",
                color: loading ? "var(--muted)" : "var(--ink)",
                border: "none",
                borderRadius: 8,
                padding: "14px 24px",
                fontSize: 15,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s",
                marginTop: 4,
              }}
            >
              {loading ? "Enviando..." : "Solicitar diagnóstico gratuito →"}
            </button>

            <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center" }}>
              Sem compromisso. Respondemos em até 24 horas úteis.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
