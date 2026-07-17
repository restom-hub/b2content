"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement das animações de entrada.
 * - Marca o container `.contta` com `.c-js` (o CSS só esconde/anima quando essa
 *   classe existe — sem JS o conteúdo aparece normalmente).
 * - Revela cada `[data-reveal]` quando entra na viewport, com stagger sutil.
 * Respeita prefers-reduced-motion e faz fallback seguro (tudo visível).
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.querySelector(".contta");
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("c-in"));
      return;
    }

    root.classList.add("c-js");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("c-in");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    // Fallback: garante que nada fique invisível se o observer não disparar.
    const safety = window.setTimeout(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("c-in");
      });
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
