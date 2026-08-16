# Registro de horas

Apuração de horas trabalhadas por dia, com a fonte de cada bloco explicitada.

Todos os horários em **America/Sao_Paulo (UTC−03:00)**.

## Convenções

- **Verificado** — horário extraído de commit/push. Rastreável.
- **Relato** — informado pelo Carlos, sem registro digital correspondente.
- **Piso** — a janela do primeiro ao último commit nunca cobre o dia inteiro: não pega
  o trabalho anterior ao primeiro commit nem o que não foi commitado. Todo bloco
  "verificado" é piso, não total.

### Commits do Claude: não existe filtro automático confiável

Alguns commits são feitos pelo Claude agindo sozinho, sem o Carlos trabalhando —
esses não são hora trabalhada. Mas **não dá para separá-los por grep.**

> ⚠️ **Não use `--grep="Co-Authored-By: Claude"` como filtro.** Esse trailer
> significa "escrito com apoio do Claude Code", que é como o Carlos trabalha na
> maior parte do tempo: **28 dos 35 commits** dele neste repo o carregam,
> incluindo os três de 14/08 que formam o bloco verificado de 4h11m. Filtrar por
> ele apagaria a manhã inteira de trabalho real.

O trailer `Claude-Session:` é um indício melhor — hoje aparece em 1 commit de 35,
só no que o Claude fez sozinho. Mas depende de configuração e pode passar a
aparecer nos commits assistidos também. Serve como pista, não como regra.

**A regra é manter a lista abaixo à mão.** Ao registrar um dia, conferir se algum
commit dele cai na janela apurada.

#### Commits a excluir da contagem

| Commit | Data | Por quê |
|---|---|---|
| `e732b57` | 15/08 18:38 | squash do PR #1 — o próprio registro de horas, escrito pelo Claude |

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
> (`e732b57`, 18:38) foi feito pelo Claude, não pelo Carlos. Está assinado
> `Carlos Restom <restom@gmail.com>` para bater com o histórico do repo.
> **Não contabilizar como hora trabalhada** — ver a lista de exclusão nas
> convenções.

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

São **três** owners no GitHub.

Até 15/08 o nome `b2content` era ambíguo: era ao mesmo tempo uma **org**
(`github.com/b2content`) e um **repositório** dentro do `restom-hub`
(`github.com/restom-hub/b2content`, o hotsite). Isso me fez afirmar errado, em
15/08, que a org não existia. A migração da pendência 3 resolve a ambiguidade.

| Owner | Repos | Acessível numa sessão iniciada do `restom-hub`? |
|---|---|---|
| `restom-hub` | 12 — b2content (→ migrando para `b2content/hotsite`), alkhemylab, radar, radar-cnpj, design-system, picmatconlab, Contabilitta-bkp, 5× pautacerta | sim |
| `MarceloSenai` | 6 — consultoria-protheus-omie, AstroERP, AceleraMatCon, hivegrowth-ai, obraxs-hotsite, pautacerta | sim |
| `b2content` | jundo, hotsite (após a migração) | **não** — ver pendências 1 e 3 |

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

**Solução imediata:** abrir uma sessão nova com `b2content/jundo` como source
inicial. Lá o histórico fica acessível e os blocos saem de "relato" para
"verificado".

**Depois da migração (pendência 3)** o problema some: hotsite e jundo passam a
viver sob o mesmo owner, e uma única sessão iniciada em qualquer um dos dois
alcança o outro via `add_repo`. Aí dá para apurar hotsite e Jundo de uma vez.

### 2. Relatório do Radar — não duplicar

Quando o relatório do Radar for puxado, atenção a esta armadilha:

**O repo `restom-hub/radar` não teve atividade em 14/08.** Último push foi 07/08.

Os commits `6ae6e88` e `7ebd956` citam "Radar B2Content" no texto, mas isso é só o
nome do app dentro do `fb:app_id` — o trabalho aconteceu no repo `b2content` e já
está contabilizado no bloco da manhã acima. Se o relatório do Radar varrer por
menção à palavra "Radar", esses dois commits vão aparecer de novo e inflar o total.

Regra: atribuir hora por **repo onde o commit caiu**, não por palavra na mensagem.

### 3. Migração: `restom-hub/b2content` → `b2content/hotsite`

Decidido em 15/08. O repo é o hotsite da B2Content (o `package.json` já se chama
`"hotsite"`, e a pasta local também) e vai para a org que é sua dona natural. Mata
a ambiguidade do nome e coloca hotsite e jundo sob o mesmo owner.

**O que foi verificado que NÃO quebra:** nenhuma referência ao repositório no
código — as 12 menções a `b2content` são todas de domínio (`b2content.com`,
`contta-ai.b2content.com`, e-mails). Sem workflow de CI, sem `vercel.json`, sem
GitHub Pages, sem `CNAME` em `public/`. O `.claude/launch.json` aponta para caminho
local, indiferente ao GitHub. Issues, PRs, commits e branches viajam com o repo, e
o GitHub redireciona a URL antiga em web, clone HTTPS, SSH e API.

**O que quebra e precisa de ação:**

- **Conexão Git da Vercel** — o GitHub App da Vercel é instalado por conta/org, e a
  instalação do `restom-hub` não acompanha o repo. Pushes param de disparar deploy
  até religar. O site não cai: fica servindo o último build, e o domínio é
  configuração do projeto na Vercel, não do repositório.
  *(Hospedagem na Vercel é suposição — o proxy da sessão bloqueou saída para
  `b2content.com` e não deu para confirmar. Verificar antes.)*
- **GitHub App do Claude Code** — mesmo motivo. A org `b2content` precisa da
  instalação para sessões futuras alcançarem o repo.
- **Colaboradores** não viram membros de time da org automaticamente.

**Passos:**

1. Fechar PRs abertos antes — após a transferência a sessão atual perde acesso.
2. Anotar a config da Vercel: nome do projeto, root directory, framework preset,
   variáveis de ambiente e domínios ligados.
3. Instalar o GitHub App da Vercel na org `b2content` **antes** da transferência,
   para encurtar a janela sem deploy.
4. `Settings → General → Danger Zone → Transfer ownership`, destino `b2content`,
   já preenchendo `hotsite` no campo de nome — transferência e rename de uma vez.
   Exige admin no repo e permissão de criar repos na org.
5. Religar a Vercel em `Settings → Git`, apontando para `b2content/hotsite`.
6. Testar com um push trivial e confirmar que o deploy dispara.
7. Atualizar o remote local:
   `git remote set-url origin https://github.com/b2content/hotsite`.

**Armadilha do redirect:** ele quebra se alguém criar depois um repo novo chamado
`b2content` dentro do `restom-hub`. Não reusar o nome.

**Rollback:** transferir de volta pelo mesmo caminho, org → usuário. Nada é
destrutivo.
