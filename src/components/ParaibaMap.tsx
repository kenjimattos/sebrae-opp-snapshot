// Mapa SVG interativo da Paraíba — React Simple Maps + GeoJSON IBGE
// Coloração por indicador, zoom, tooltip no hover, destaque do município selecionado

import { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import {
  municipiosMapData,
  indicadorRanges,
  type IndicadorKey,
} from '@/data/mapa-indicadores'

const GEO_URL =
  'https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json'

interface ParaibaMapProps {
  selectedId: string
  indicador: IndicadorKey
  className?: string
}

// Interpola entre vermelho → amarelo → verde com base no valor normalizado (0..1)
function getColorForValue(t: number): string {
  // Clamp
  const v = Math.max(0, Math.min(1, t))

  if (v < 0.5) {
    // red(210,50,50) → yellow(220,180,40)
    const r = Math.round(210 + (220 - 210) * (v / 0.5))
    const g = Math.round(50 + (180 - 50) * (v / 0.5))
    const b = Math.round(50 + (40 - 50) * (v / 0.5))
    return `rgb(${r},${g},${b})`
  }
  // yellow(220,180,40) → green(40,160,50)
  const p = (v - 0.5) / 0.5
  const r = Math.round(220 + (40 - 220) * p)
  const g = Math.round(180 + (160 - 180) * p)
  const b = Math.round(40 + (50 - 40) * p)
  return `rgb(${r},${g},${b})`
}

function getNormalizedValue(id: string, indicador: IndicadorKey): number | null {
  const data = municipiosMapData[id]
  if (!data) return null
  const val = data.indicadores[indicador].valor
  const range = indicadorRanges[indicador]

  // Gini is inverted — lower is better
  if (indicador === 'gini') {
    return 1 - (val - range.min) / (range.max - range.min)
  }
  return (val - range.min) / (range.max - range.min)
}

function getDisplayValue(id: string, indicador: IndicadorKey): string | null {
  const data = municipiosMapData[id]
  if (!data) return null
  return data.indicadores[indicador].display
}

function getMunicipioNome(id: string): string | null {
  return municipiosMapData[id]?.nome ?? null
}

interface TooltipData {
  nome: string
  valor: string
  x: number
  y: number
}

export default function ParaibaMap({ selectedId, indicador, className = '' }: ParaibaMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)

  const handleMouseEnter = useCallback(
    (geo: { properties: { id: string; name: string } }, event: React.MouseEvent) => {
      const id = String(geo.properties.id)
      const nome = getMunicipioNome(id) || (geo.properties.name as string)
      const valor = getDisplayValue(id, indicador) || 'N/D'
      const rect = (event.currentTarget as Element).closest('svg')?.getBoundingClientRect()
      if (rect) {
        setTooltip({
          nome,
          valor,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top - 12,
        })
      }
    },
    [indicador],
  )

  const handleMouseLeave = useCallback(() => {
    setTooltip(null)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-36.5, -7.1],
          scale: 6000,
        }}
        width={600}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup
          minZoom={1}
          maxZoom={8}
          translateExtent={[
            [-100, -100],
            [700, 500],
          ]}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = String(geo.properties.id)
                const isSelected = id === selectedId
                const normalized = getNormalizedValue(id, indicador)

                let fill: string
                if (isSelected) {
                  fill = 'var(--primitives-blue-500)'
                } else if (normalized !== null) {
                  fill = getColorForValue(normalized)
                } else {
                  fill = 'var(--semantic-surface-secondary)'
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) =>
                      handleMouseEnter(
                        geo as unknown as { properties: { id: string; name: string } },
                        event as unknown as React.MouseEvent,
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill,
                        stroke: isSelected
                          ? 'var(--primitives-blue-800)'
                          : 'var(--semantic-surface-primary)',
                        strokeWidth: isSelected ? 1.5 : 0.5,
                        outline: 'none',
                        cursor: 'default',
                      },
                      hover: {
                        fill: isSelected ? fill : normalized !== null ? getColorForValue(Math.min(1, (normalized ?? 0) + 0.1)) : 'var(--primitives-blue-200)',
                        stroke: 'var(--primitives-blue-500)',
                        strokeWidth: 1,
                        outline: 'none',
                        cursor: 'default',
                      },
                      pressed: {
                        fill,
                        stroke: 'var(--primitives-blue-800)',
                        strokeWidth: 1.5,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-20 bg-[var(--semantic-surface-primary)] rounded-[var(--radius-sm)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] shadow-lg"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <p className="font-semibold text-[length:var(--font-size-body-sm)] text-[color:var(--semantic-text-primary)] whitespace-nowrap">
            {tooltip.nome}
          </p>
          <p className="font-normal text-[length:var(--font-size-body-sm)] text-[color:var(--semantic-text-inactive)] whitespace-nowrap">
            {tooltip.valor}
          </p>
        </div>
      )}

      {/* Zoom hint */}
      <p className="absolute bottom-[var(--spacing-xs)] right-[var(--spacing-xs)] text-[length:var(--font-size-body-sm)] text-[color:var(--semantic-text-inactive)]">
        Scroll para zoom
      </p>
    </div>
  )
}
