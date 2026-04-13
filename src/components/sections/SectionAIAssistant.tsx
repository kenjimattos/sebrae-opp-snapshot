// Figma: Section/AIAssistant (390:635)

import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

export default function SectionAIAssistant() {
  return (
    <SectionContainer className="flex flex-col items-center gap-[var(--spacing-lg)] py-[var(--spacing-3xl)]">
      <div className="flex flex-col items-center gap-[var(--spacing-md)] max-w-[800px] text-center">
        <h2 className="font-bold text-[length:var(--font-size-h1)] leading-none text-[color:var(--semantic-text-primary)]">
          Assistente IA
        </h2>
        <p className="font-normal text-[length:var(--font-size-body-lg)] leading-normal text-[color:var(--semantic-text-primary)]">
          Use inteligência artificial para analisar indicadores, gerar relatórios e encontrar oportunidades de desenvolvimento para o seu município.
        </p>
      </div>

      <div className="flex flex-col gap-[var(--spacing-md)] bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] w-full max-w-[800px]">
        <div className="bg-[var(--semantic-surface-secondary)] rounded-[var(--radius-sm)] p-[var(--spacing-md)]">
          <p className="font-normal text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-inactive)]">
            Ex: "Quais indicadores de educação estão em alerta em Campina Grande?"
          </p>
        </div>

        <div className="flex gap-[var(--spacing-sm)]">
          <Button variant="primary">Analisar indicadores</Button>
          <Button variant="secondary">Gerar relatório</Button>
          <Button variant="tertiary">Comparar municípios</Button>
        </div>
      </div>
    </SectionContainer>
  )
}
