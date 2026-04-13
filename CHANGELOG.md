# Changelog

Todas as alterações relevantes do projeto são documentadas neste arquivo.

## [Unreleased]

### Added
- Gráfico comparativo econômico com Recharts (`EconomicsAnalysis`, `ChartWrapper`)
- Mapa interativo da Paraíba com React Simple Maps (`ParaibaMap`)
- Seções completas: Agendas, Panorama, BaseEconomica, Riscos, Recursos, Capacitação, Casos de Sucesso, Assistente IA
- Componentes de card: `AgendaCard`, `AgendaBadge`, `AgendaIndicator`, `AgendaStats`, `EconomicsCard`, `RisksCard`, `ResourcesCard`
- Estado global com `MunicipioContext` + `useMunicipio` hook
- Mock data JSON para 3 municípios: João Pessoa, Campina Grande, Patos
- Layout: `Header` (405:2044), `Footer` (419:917), `User` (405:2038), `CitySelector` (509:3274)
- Página `Home` com React Router
- Componentes primitivos do Figma: `SectionHeader`, `TitleSubtitle`, `Button`
- Componentes Tailwind puros: `SectionContainer`, `Grid`, `ChartWrapper`
- Estrutura de pastas espelhando grupos do Figma (`agenda/`, `economics/`, `risks/`, etc.)
- Interfaces TypeScript para dados de indicadores municipais (`src/types/indicadores.ts`)
- Design tokens (typography, spacing, radius, colors) em `src/index.css` extraídos das Figma Variables
- Fonte Inter via Google Fonts
- Path alias `@/` configurado em Vite e TypeScript
- Suporte a dark mode via classe `.dark` com tokens semânticos
- Logo Sebrae em `public/assets/`

### Changed
- `index.html`: lang `pt-BR`, título atualizado para "OPP — Observatório de Políticas Públicas"
- `App.tsx`: React Router com MunicipioProvider
- `main.tsx`: removida importação de `.tsx` extensão desnecessária

### Removed
- Boilerplate Vite: `App.css`, `hero.png`, `react.svg`, `vite.svg`
- CSS legado do template Vite em `index.css`
