# Registro de horas

Apuração de horas trabalhadas por dia, com a fonte de cada bloco explicitada.

Todos os horários em **America/Sao_Paulo (UTC−03:00)**.

## Convenções

- **Verificado** — horário extraído de commit/push. Rastreável.
- **Relato** — informado pelo Carlos, sem registro digital correspondente.
- **Piso** — a janela do primeiro ao último commit nunca cobre o dia inteiro: não pega
  o trabalho anterior ao primeiro commit nem o que não foi commitado. Todo bloco
  "verificado" é piso, não total.

Commits feitos pelo Claude saem assinados com o nome do Carlos para bater com o
histórico do repo, mas carregam `Co-Authored-By: Claude`. **Não contam como hora
trabalhada.** Para excluí-los da contagem:

```sh
git log --all --invert-grep --grep="Co-Authored-By: Claude" \
  --author="restom@gmail.com" --since="AAAA-MM-DD 00:00" --until="AAAA-MM-DD 23:59"
```

Onde procurar, sempre: os 12 repos do `restom-hub`, os 6 do `MarceloSenai` e o
`b2content/jundo`. Filtrar candidatos por `pushed_at` da API antes de clonar —
lembrando que esse campo vem em UTC.

Cuidado ao ler a API do GitHub: `pushed_at` vem em **UTC**. Converter para UTC−03:00
antes de comparar com horário de commit.

---

## 2026-08-15 (sábado)

| Faixa | Duração | Tipo | Fonte |
|---|---|---|---|
| 07:00 → 11:30 | ~4h30m | trabalho (Jundo) | Relato — pendente de verificação |

**Total trabalhado: ~4h30m.**

Nada verificado no GitHub: zero commits do Carlos nos 18 repos de `restom-hub` e
`MarceloSenai`, e zero arquivos tocados no Drive. O trabalho do dia foi todo no
`b2content/jundo`, fora do alcance desta sessão.

> **Atenção ao contar:** o único commit em `restom-hub/b2content` neste dia
> (`8ff6384`, 18:38) foi feito pelo Claude, não pelo Carlos. Está assinado
> `Carlos Restom <restom@gmail.com>` para bater com o histórico do repo, com
> `Co-Authored-By` do Claude. **Não contabilizar como hora trabalhada.**

---

## 2026-08-14 (sexta)

| Faixa | Duração | Tipo | Fonte |
|---|---|---|---|
| 07:43 → 11:54 | 4h11m | trabalho | Verificado — 4 commits |
| 11:54 → 13:30 | 1h36m | deslocamento | Relato — não contabilizado |
| 13:30 → ~22h+ | ~8h30–9h | trabalho (Jundo) | Relato — pendente de verificação |

**Total trabalhado: ~12h40–13h10.** Span porta a porta: ~14h20–14h50.

As três faixas cobrem tudo entre o primeiro commit e o fim do Jundo, sem buraco.

### Commits do bloco da manhã

| Hora | Repo | Commit | Descrição |
|---|---|---|---|
| 07:43 | `restom-hub/b2content` | `ae42864` | og:image e ícone da landing do Contta·ai (5 arquivos, +191) |
| 10:29 | `restom-hub/alkhemylab` | `e2e543b` | docs: e-mail 2 — remoção da senha do board + dicas do Miro |
| 11:31 | `restom-hub/b2content` | `6ae6e88` | fb:app_id do Radar B2Content (+5) |
| 11:54 | `restom-hub/b2content` | `7ebd956` | fix do fb:app_id para o ID de 16 dígitos |

Último push em qualquer repo do GitHub nesse dia: 11:54. Nada depois disso.

### O que foi descartado

- **Google Drive** — nenhum arquivo tocado em 14/08, nenhum arquivo menciona Jundo.
- **GitLab** — pista falsa, já descartada. O Jundo está no GitHub
  (`b2content/jundo`), não no GitLab. Não perder tempo procurando lá de novo.

---

## Mapa das contas

São **três** owners no GitHub. Cuidado com a ambiguidade do nome `b2content`: ele é
ao mesmo tempo uma **org** (`github.com/b2content`) e um **repositório** dentro do
`restom-hub` (`github.com/restom-hub/b2content`). Coisas diferentes.

| Owner | Repos | Acessível na sessão? |
|---|---|---|
| `restom-hub` | 12 — b2content, alkhemylab, radar, radar-cnpj, design-system, picmatconlab, Contabilitta-bkp, 5× pautacerta | sim |
| `MarceloSenai` | 6 — consultoria-protheus-omie, AstroERP, AceleraMatCon, hivegrowth-ai, obraxs-hotsite, pautacerta | sim |
| `b2content` | jundo (pelo menos) | **não** — ver pendência 1 |

Identidade de commit única nos owners visíveis: `Carlos Restom <restom@gmail.com>`.
No alkhemylab são 167 commits dele contra 220 de `Marcelo <soufrater@gmail.com>`.

---

## Pendências

### 1. Verificar os blocos do Jundo — `github.com/b2content/jundo`

O Jundo é o maior volume de horas do registro e nenhum bloco dele está verificado:
~8h30–9h em 14/08 e ~4h30m em 15/08.

O repo é `b2content/jundo`, no GitHub. Uma sessão iniciada a partir do
`restom-hub/b2content` **não consegue alcançá-lo** — está bloqueado nas três vias:

- `add_repo` recusa: não anexa repo de outro owner quando a sessão já tem repos do
  `restom-hub` ("cross-tier adds are not supported in v1")
- API do GitHub pelo proxy: `HTTP 403`, sessions are bound to their configured repositories
- MCP do GitHub: acesso negado, só os repos configurados na sessão

**Solução:** abrir uma sessão nova com `b2content/jundo` como source inicial. Lá o
histórico fica acessível e os blocos saem de "relato" para "verificado".

### 2. Relatório do Radar — não duplicar

Quando o relatório do Radar for puxado, atenção a esta armadilha:

**O repo `restom-hub/radar` não teve atividade em 14/08.** Último push foi 07/08.

Os commits `6ae6e88` e `7ebd956` citam "Radar B2Content" no texto, mas isso é só o
nome do app dentro do `fb:app_id` — o trabalho aconteceu no repo `b2content` e já
está contabilizado no bloco da manhã acima. Se o relatório do Radar varrer por
menção à palavra "Radar", esses dois commits vão aparecer de novo e inflar o total.

Regra: atribuir hora por **repo onde o commit caiu**, não por palavra na mensagem.
