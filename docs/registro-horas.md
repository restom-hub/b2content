# Registro de horas

Apuração de horas trabalhadas por dia, com a fonte de cada bloco explicitada.

Todos os horários em **America/Sao_Paulo (UTC−03:00)**.

## Convenções

- **Verificado** — horário extraído de commit/push. Rastreável.
- **Relato** — informado pelo Carlos, sem registro digital correspondente.
- **Piso** — a janela do primeiro ao último commit nunca cobre o dia inteiro: não pega
  o trabalho anterior ao primeiro commit nem o que não foi commitado. Todo bloco
  "verificado" é piso, não total.

Cuidado ao ler a API do GitHub: `pushed_at` vem em **UTC**. Converter para UTC−03:00
antes de comparar com horário de commit.

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
- **GitLab** — alcançável daqui (`HTTP 401`, não bloqueado), mas sem credencial no
  ambiente. Nenhuma conta encontrada em `gitlab.com` para `restom`, `restom-hub`,
  `carlosrestom`, `crestom`, `restom_hub` ou `carlos.restom`. Existe um usuário
  `Jundo` (id 4994296) no gitlab.com, mas está vazio — zero projetos, zero eventos.
  Coincidência de nome.

---

## Mapa das contas

Não existe conta `b2content` — é um **repositório**: `github.com/restom-hub/b2content`.

| Owner | Repos | Ativo em 14/08 |
|---|---|---|
| `restom-hub` | 12 — b2content, alkhemylab, radar, radar-cnpj, design-system, picmatconlab, Contabilitta-bkp, 5× pautacerta | b2content, alkhemylab |
| `MarceloSenai` | 6 — consultoria-protheus-omie, AstroERP, AceleraMatCon, hivegrowth-ai, obraxs-hotsite, pautacerta | nenhum |

Identidade de commit única nos dois owners: `Carlos Restom <restom@gmail.com>`.
No alkhemylab são 167 commits dele contra 220 de `Marcelo <soufrater@gmail.com>`.

---

## Pendências

### 1. Verificar o bloco do Jundo (GitLab)

As ~8h30–9h de 14/08 são o maior bloco do dia e não têm nenhum rastro verificável.
Para fechar, faltam três coisas:

1. **Host** — `gitlab.com` ou self-hosted da empresa?
2. **Personal Access Token** com escopo `read_api` (só leitura).
3. **Usuário no GitLab** ou o path do projeto.

O token deve entrar como variável de ambiente `GITLAB_TOKEN` nas configurações do
environment — não colar no chat. Com isso dá para puxar
`/api/v4/events?after=…&before=…` e trocar "relato" por "verificado".

### 2. Relatório do Radar — não duplicar

Quando o relatório do Radar for puxado, atenção a esta armadilha:

**O repo `restom-hub/radar` não teve atividade em 14/08.** Último push foi 07/08.

Os commits `6ae6e88` e `7ebd956` citam "Radar B2Content" no texto, mas isso é só o
nome do app dentro do `fb:app_id` — o trabalho aconteceu no repo `b2content` e já
está contabilizado no bloco da manhã acima. Se o relatório do Radar varrer por
menção à palavra "Radar", esses dois commits vão aparecer de novo e inflar o total.

Regra: atribuir hora por **repo onde o commit caiu**, não por palavra na mensagem.
