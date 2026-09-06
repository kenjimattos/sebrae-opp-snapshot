# Plataforma OPP — Observatório de Políticas Públicas

> **📸 Snapshot para portfólio.** Este repositório é um **snapshot estático e sanitizado** de um projeto real desenvolvido para o Sebrae Paraíba, publicado exclusivamente para fins de portfólio. Não é o repositório de desenvolvimento (que é privado) e não recebe atualizações. Hosts, credenciais e detalhes de infraestrutura interna foram substituídos por placeholders (`<host-do-lake>`, `<usuário>`, etc.). Os dados incluídos são um recorte estático de indicadores públicos agregados por município.

**🔗 Demo ao vivo:** https://sebrae-h9u611qsr-kenjimattos-1396s-projects.vercel.app/

Plataforma de dados municipais para o Sebrae Paraíba. Consolida indicadores socioeconômicos, agendas prioritárias, riscos estratégicos e oportunidades de recursos em uma interface unificada para gestores públicos — a **Jornada do Município Empreendedor**, cobrindo os **223 municípios da Paraíba**.

## O que tem aqui

O projeto completo, em três camadas:

| Camada | Pasta | Descrição |
|---|---|---|
| **Frontend** | `src/` | SPA React 19 + Vite, design system próprio via tokens CSS + Tailwind |
| **API de leitura** | `server/` | Node/Fastify sobre MongoDB — devolve agendas + indicadores com semáforo já calculado |
| **ETL / dados** | `database/` | Geradores Python (data lake → seeds MongoDB), seeds e mapeamento das fontes oficiais |

Este snapshot inclui também um **recorte estático da API** (`public/api-snapshot/` + rewrites em `vercel.json`): deployado no Vercel, o frontend funciona como demo completa **sem banco de dados**.

## Destaques técnicos

- **Mapa da Paraíba em SVG puro** — gerado do GeoJSON do IBGE (projeção lon/lat → viewBox feita à mão), sem lib de mapa: hover com tooltip, seleção por clique e coloração coroplética por indicador (`src/components/map/ParaibaOutlineMap.tsx`).
- **Semáforo orientado a dados** — a classificação bom/atenção/alerta de cada indicador vem do campo `threshold` no banco (faixas oficiais publicadas pelas fontes), calculada no servidor. Nenhum corte hardcoded no frontend; indicador sem faixa oficial simplesmente não exibe semáforo.
- **Barra de indicador com marcador gradual** — posição e cor contínuas dentro da faixa oficial, amostrando o gradiente da própria barra via `background-position` (sem cálculo de cor em JS, compatível com dark mode por tokens).
- **ETL de dados públicos** — geradores Python que leem o data lake (RAIS, Receita Federal, PNCP, Redesim, ESTBAN/BCB, IDEB, IBGE) e emitem seeds MongoDB idempotentes, com inspeção de schema, breakdown por município e marcação de confiabilidade amostral (médias com `n<30` são ocultadas pela API em vez de exibir valores enganosos).
- **Design system do Figma a tokens** — 16 estilos tipográficos, espaçamentos, cores primitivas/semânticas e raios como CSS variables integradas ao Tailwind; dark mode por tokens.
- **Formulador de projetos** — fluxo de 10 etapas com rascunho por município em `localStorage` e estado global via Context.
- **IA em quatro superfícies, um contrato só** — modal do indicador, formulador, análise do Panorama e chat global entram todos por `POST /api/ai`, com o núcleo de prompts compartilhado por três transportes (function Vercel, middleware de dev do Vite, rota Fastify). A chave nunca chega ao bundle: capacidade nova é um literal novo na união de tipos, nunca um endpoint paralelo.
- **Emendas parlamentares nas duas esferas** — federal atribuído por código IBGE (censo) e estadual inferido do texto livre do objeto. As duas medem cobertura municipal sobre bases diferentes de propósito, e zero no estadual vira `null` em vez de `0`, para a interface distinguir "não recebeu" de "não medimos".
- **Suíte de 156 testes** — dois projetos Vitest (client/jsdom e server/node) cobrindo a régua do semáforo, a costura da API, a cobertura das emendas, a completude do formulador e os primitivos de UI. As regras testadas foram verificadas por mutação: inverter a regra tem de deixar o teste vermelho.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v3 + design tokens · React Router v7 · Node/Fastify · MongoDB · Vitest · Python (ETL)

## Rodando

**Como demo (sem banco)** — a [demo ao vivo](https://sebrae-h9u611qsr-kenjimattos-1396s-projects.vercel.app/) é um deploy de preview gerado pelo Vercel a partir da branch `preview/snapshot` do repositório de trabalho — o mesmo conteúdo deste snapshot, mesma versão. O build estático usa o recorte da API em `public/api-snapshot/` via rewrites (`/api/*` → JSON estático), então a demo funciona sem banco. Importar este repositório no Vercel reproduz o mesmo resultado.

**Desenvolvimento completo** exigiria um MongoDB populado pelos seeds de `database/` e a API de `server/` rodando — infraestrutura que não acompanha este snapshot:

```bash
npm install --legacy-peer-deps   # peer deps do React 19
npm run dev                      # frontend (http://localhost:5173, /api → :3000)
```

## Estrutura

```
src/
├── components/        # Componentes por grupo do Figma
│   ├── agenda/        # Cards de agenda, barras de indicador com semáforo
│   ├── map/           # ParaibaOutlineMap (SVG do GeoJSON)
│   ├── formulator/    # Fluxo de 10 etapas + revisão
│   ├── economics/     # Panorama socioeconômico
│   ├── risks/         # Riscos estratégicos (extração automática de alertas)
│   └── ...
├── data/              # Conteúdo editorial + client da API
├── hooks/             # MunicipalityProvider, FormulatorProvider, AuthProvider
└── types/             # Contratos TypeScript (espelhados pela API)

server/src/            # Rotas, repositório Mongo, cálculo de status (threshold)
database/
├── scripts/           # Geradores Python (lake → seeds)
├── seed/              # Seeds MongoDB por indicador
└── data/              # Dados intermediários (fontes públicas agregadas)
```

## Licença

Código publicado apenas para fins de demonstração de portfólio. Todos os direitos reservados — Sebrae Paraíba.
