// Figma: Section/BaseEconomica (390:581)

import type { BaseEconomicaItem } from '@/types/indicadores'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeader from '@/components/SectionHeader'
import EconomicsCard from '@/components/economics/EconomicsCard'
import EconomicsAnalysis from '@/components/economics/EconomicsAnalysis'
import { sectionContent } from '@/data/sections'

interface SectionBaseEconomicaProps {
  dados: BaseEconomicaItem[]
}

export default function SectionBaseEconomica({ dados }: SectionBaseEconomicaProps) {
  return (
    <SectionContainer className="flex flex-col gap-[var(--spacing-lg)] py-[var(--spacing-lg)]">
      <SectionHeader
        title={sectionContent.baseEconomica.title}
        description={sectionContent.baseEconomica.description}
      />

      <div className="grid grid-cols-5 gap-[var(--spacing-sm)] w-full">
        {dados.map((item) => (
          <EconomicsCard
            key={item.label}
            label={item.label}
            valor={item.valor}
            variacao={item.variacao}
          />
        ))}
      </div>

      <EconomicsAnalysis />
    </SectionContainer>
  )
}
