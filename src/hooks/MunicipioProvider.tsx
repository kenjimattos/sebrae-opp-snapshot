import { useState, useCallback, type ReactNode } from 'react'
import { MunicipioContext, type MunicipioState } from '@/hooks/useMunicipio'
import type { IndicadoresData } from '@/types/indicadores'

import joaoPessoaData from '@/data/indicadores/joao-pessoa.json'
import campinaGrandeData from '@/data/indicadores/campina-grande.json'
import patosData from '@/data/indicadores/patos.json'

const dataMap: Record<string, IndicadoresData> = {
  '2507507': joaoPessoaData as IndicadoresData,
  '2504009': campinaGrandeData as IndicadoresData,
  '2510808': patosData as IndicadoresData,
}

const defaultMunicipio: MunicipioState = {
  id: '2504009',
  nome: 'Campina Grande',
  dados: campinaGrandeData as IndicadoresData,
}

export default function MunicipioProvider({ children }: { children: ReactNode }) {
  const [municipio, setMunicipioState] = useState<MunicipioState>(defaultMunicipio)

  const setMunicipio = useCallback((id: string, nome: string) => {
    setMunicipioState({
      id,
      nome,
      dados: dataMap[id] ?? null,
    })
  }, [])

  return (
    <MunicipioContext.Provider value={{ municipio, setMunicipio }}>
      {children}
    </MunicipioContext.Provider>
  )
}
