# Changelog

Todas as alterações relevantes do projeto são documentadas neste arquivo.

## [Unreleased]

### Added
- Design tokens (typography, spacing, radius, colors) em `src/index.css` extraídos das Figma Variables
- Fonte Inter via Google Fonts
- Path alias `@/` configurado em Vite e TypeScript
- Suporte a dark mode via classe `.dark` com tokens semânticos

### Changed
- `index.html`: lang `pt-BR`, título atualizado para "OPP — Observatório de Políticas Públicas"
- `App.tsx`: substituído boilerplate Vite por shell mínimo com Tailwind
- `main.tsx`: removida importação de `.tsx` extensão desnecessária

### Removed
- Boilerplate Vite: `App.css`, `hero.png`, `react.svg`, `vite.svg`
- CSS legado do template Vite em `index.css`
