// Figma: Section/Panorama (390:578)
// Map with indicator selector + IDHM ranking

import { useState } from 'react'
import type { Panorama } from '@/types/indicadores'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeader from '@/components/SectionHeader'
import Dropdown from '@/components/ui/Dropdown'
import ParaibaMap from '@/components/ParaibaMap'
import { useMunicipio } from '@/hooks/useMunicipio'
import { sectionContent } from '@/data/sections'
import {
  indicadorOptions,
  type IndicadorKey,
} from '@/data/mapa-indicadores'

interface SectionPanoramaProps {
  panorama: Panorama
  municipio: string
}

export default function SectionPanorama({ panorama, municipio }: SectionPanoramaProps) {
  const { municipio: state } = useMunicipio()
  const [indicador, setIndicador] = useState<IndicadorKey>('idhm')

  const selectedOption = indicadorOptions.find((o) => o.value === indicador)

  return (
    <SectionContainer className="flex flex-col gap-[var(--spacing-lg)] py-[var(--spacing-lg)]">
      <SectionHeader
        title={sectionContent.panorama.title}
        description={sectionContent.panorama.description}
      />

      <div className="flex gap-[var(--spacing-sm)] w-full">
        {/* Map + dropdown */}
        <div className="flex-1 bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-md)] flex flex-col gap-[var(--spacing-md)]">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[length:var(--font-size-body)] text-[color:var(--semantic-text-primary)]">
              Indicador no mapa
            </span>
            <Dropdown
              options={indicadorOptions.map((o) => ({ label: o.label, value: o.value }))}
              value={indicador}
              onChange={(v) => setIndicador(v as IndicadorKey)}
              className="w-[200px]"
            />
          </div>

          {/* Color legend */}
          <div className="flex items-center gap-[var(--spacing-xs)]">
            <span className="text-[length:var(--font-size-body-sm)] text-[color:var(--semantic-text-inactive)]">Pior</span>
            <div className="flex-1 h-[8px] rounded-full" style={{
              background: 'linear-gradient(to right, rgb(210,50,50), rgb(220,180,40), rgb(40,160,50))',
            }} />
            <span className="text-[length:var(--font-size-body-sm)] text-[color:var(--semantic-text-inactive)]">Melhor</span>
          </div>

          <ParaibaMap
            selectedId={state.id}
            indicador={indicador}
          />
        </div>

        {/* Ranking panel */}
        <div className="w-[380px] bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] flex flex-col gap-[var(--spacing-md)]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[length:var(--font-size-h3)] leading-none text-[color:var(--semantic-text-primary)]">
              {selectedOption?.label ?? 'IDHM'}
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
                  <span className={`text-[length:var(--font-size-body)] text-[color:var(--semantic-text-primary)] ${
                    item.municipio === municipio ? 'font-semibold' : 'font-normal'
                  }`}>
                    {item.municipio}
                  </span>
                  <span className={`text-[length:var(--font-size-body)] text-[color:var(--semantic-text-primary)] ${
                    item.municipio === municipio ? 'font-bold' : 'font-semibold'
                  }`}>
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
