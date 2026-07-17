import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16 Proxy (antigo middleware).
 * Serve a landing do Contta·ai no subdomínio contta-ai.b2content.com,
 * reescrevendo o host para a rota interna /contta-ai. O site principal
 * (b2content.com) segue intacto na raiz.
 *
 * A rota /contta-ai também continua acessível diretamente (útil em preview).
 */
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const { pathname } = request.nextUrl;

  const isConttaHost = host.split(":")[0].startsWith("contta-ai.");

  if (isConttaHost && !pathname.startsWith("/contta-ai")) {
    const url = request.nextUrl.clone();
    url.pathname = `/contta-ai${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Roda em páginas; ignora assets, _next e api.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
