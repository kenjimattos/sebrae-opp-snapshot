// Figma: Section/Riscos (390:594)

import type { Risco } from '@/types/indicadores'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeader from '@/components/SectionHeader'
import RisksCard from '@/components/risks/RisksCard'

interface SectionRiscosProps {
  riscos: Risco[]
}

export default function SectionRiscos({ riscos }: SectionRiscosProps) {
  return (
    <SectionContainer className="flex flex-col gap-[var(--spacing-lg)] py-[var(--spacing-lg)]">
      <SectionHeader
        title="Riscos e alertas"
        description="Indicadores que demandam atenção imediata e podem impactar o desenvolvimento do município."
      />

      <div className="grid grid-cols-3 gap-[var(--spacing-sm)] w-full">
        {riscos.map((risco) => (
          <RisksCard
            key={risco.titulo}
            titulo={risco.titulo}
            descricao={risco.descricao}
            percentual={risco.percentual}
            tipo={risco.tipo}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
