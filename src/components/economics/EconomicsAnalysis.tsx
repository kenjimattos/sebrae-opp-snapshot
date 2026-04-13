// Figma: Economics/Analysis (368:834)
// Bloco de análise textual — futuro: conectado a LLM

interface EconomicsAnalysisProps {
  analise?: string
  className?: string
}

const defaultAnalise =
  'A economia local apresenta crescimento moderado do PIB per capita e melhora nos índices de competitividade, porém mantém alta dependência do setor público e parcela significativa da população em faixa de baixa renda. O fortalecimento das MPE e a diversificação produtiva são caminhos prioritários.'

export default function EconomicsAnalysis({ analise = defaultAnalise, className = '' }: EconomicsAnalysisProps) {
  return (
    <div
      className={`bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] px-[var(--spacing-xl)] py-[var(--spacing-md)] flex flex-col gap-[var(--spacing-xs)] w-full ${className}`}
    >
      <h4 className="font-semibold text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
        Análise
      </h4>
      <p className="font-normal text-[length:var(--font-size-body)] leading-[25px] text-[color:var(--semantic-text-primary)]">
        {analise}
      </p>
    </div>
  )
}
