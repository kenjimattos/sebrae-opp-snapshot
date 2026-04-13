// Figma: Section/Panorama (390:578)
// Map + IDHM ranking — map will be added in Fase 8

import type { Panorama } from '@/types/indicadores'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeader from '@/components/SectionHeader'

interface SectionPanoramaProps {
  panorama: Panorama
  municipio: string
}

export default function SectionPanorama({ panorama, municipio }: SectionPanoramaProps) {
  return (
    <SectionContainer className="flex flex-col gap-[var(--spacing-lg)] py-[var(--spacing-lg)]">
      <SectionHeader
        title="Panorama do município"
        description="Visão geral dos indicadores socioeconômicos e ranking comparativo entre municípios da Paraíba."
      />

      <div className="flex gap-[var(--spacing-sm)] w-full">
        {/* Map placeholder — will be replaced in Fase 8 */}
        <div className="flex-1 bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] min-h-[400px] flex items-center justify-center">
          <span className="text-[color:var(--semantic-text-inactive)] text-[length:var(--font-size-body)]">
            Mapa da Paraíba (Fase 8)
          </span>
        </div>

        {/* IDHM Ranking */}
        <div className="w-[380px] bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] flex flex-col gap-[var(--spacing-md)]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[length:var(--font-size-h3)] leading-none text-[color:var(--semantic-text-primary)]">
              IDHM
            </span>
            <span className="font-black text-[length:var(--font-size-display-small)] leading-none text-[color:var(--semantic-text-primary)]">
              {panorama.idhm}
            </span>
          </div>

          <div className="flex flex-col gap-[var(--spacing-xs)]">
            {panorama.ranking
              .sort((a, b) => b.valor - a.valor)
              .map((item) => (
                <div
                  key={item.municipio}
                  className={`flex items-center justify-between px-[var(--spacing-xs)] py-[var(--spacing-2xs)] rounded-[var(--radius-sm)] ${
                    item.municipio === municipio
                      ? 'bg-[var(--semantic-surface-secondary)]'
                      : ''
                  }`}
                >
                  <span className="font-normal text-[length:var(--font-size-body)] text-[color:var(--semantic-text-primary)]">
                    {item.municipio}
                  </span>
                  <span className="font-semibold text-[length:var(--font-size-body)] text-[color:var(--semantic-text-primary)]">
                    {item.valor}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
