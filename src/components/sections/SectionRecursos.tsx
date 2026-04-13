// Figma: Section/Recursos (390:600)

import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeader from '@/components/SectionHeader'
import TitleSubtitle from '@/components/TitleSubtitle'
import ResourcesCard from '@/components/resources/ResourcesCard'

export default function SectionRecursos() {
  return (
    <SectionContainer className="flex flex-col gap-[var(--spacing-lg)] py-[var(--spacing-lg)]">
      <SectionHeader title="Acesso a recursos" />

      {/* Emendas parlamentares */}
      <div className="flex flex-col gap-[var(--spacing-md)]">
        <TitleSubtitle
          title="Emendas parlamentares disponíveis"
          content="Recursos destinados por deputados federais e senadores que podem financiar projetos estruturantes no município."
          variant="h2"
        />

        <div className="grid grid-cols-4 gap-[var(--spacing-sm)] w-full">
          <ResourcesCard title="Total empenhado até o momento" value="R$ 4 BI" />
          <ResourcesCard title="Total liquidado" value="R$ 2.8 BI" />
          <ResourcesCard title="Emendas disponíveis" value="142" />
          <ResourcesCard title="Valor médio por emenda" value="R$ 28M" />
        </div>
      </div>

      {/* Convênios */}
      <div className="flex flex-col gap-[var(--spacing-md)]">
        <TitleSubtitle
          title="Convênios e transferências"
          content="Programas do governo federal com recursos disponíveis para o município via convênios e contratos de repasse."
          variant="h2"
        />

        <div className="grid grid-cols-4 gap-[var(--spacing-sm)] w-full">
          <ResourcesCard title="Convênios ativos" value="38" />
          <ResourcesCard title="Valor total" value="R$ 156M" />
          <ResourcesCard title="Em execução" value="24" />
          <ResourcesCard title="Aguardando prestação" value="14" />
        </div>
      </div>
    </SectionContainer>
  )
}
