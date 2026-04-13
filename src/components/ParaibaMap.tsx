// Mapa SVG interativo da Paraíba — React Simple Maps + GeoJSON IBGE

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL =
  'https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json'

interface ParaibaMapProps {
  selectedId: string
  onSelect: (id: string, nome: string) => void
  className?: string
}

export default function ParaibaMap({ selectedId, onSelect, className = '' }: ParaibaMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={className}>
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
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = String(geo.properties.id)
              const nome = geo.properties.name as string
              const isSelected = id === selectedId
              const isHovered = id === hoveredId

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelect(id, nome)}
                  style={{
                    default: {
                      fill: isSelected
                        ? 'var(--primitives-blue-500)'
                        : 'var(--semantic-surface-secondary)',
                      stroke: 'var(--semantic-surface-primary)',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    hover: {
                      fill: isSelected
                        ? 'var(--primitives-blue-500)'
                        : isHovered
                          ? 'var(--primitives-blue-200)'
                          : 'var(--semantic-surface-secondary)',
                      stroke: 'var(--semantic-surface-primary)',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: 'var(--primitives-blue-800)',
                      stroke: 'var(--semantic-surface-primary)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
