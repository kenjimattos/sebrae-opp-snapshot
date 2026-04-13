// Indicadores por município para coloração do mapa
// Chave: código IBGE do município

export interface MapIndicator {
  label: string
  value: string
}

export const indicadorOptions = [
  { label: 'IDH-M', value: 'idhm' },
  { label: 'PIB per capita', value: 'pib_per_capita' },
  { label: 'Taxa de urbanização', value: 'taxa_urbanizacao' },
  { label: 'Índice de Gini', value: 'gini' },
] as const

export type IndicadorKey = (typeof indicadorOptions)[number]['value']

// Valores numéricos normalizados para cada indicador
// Quanto maior, melhor (para Gini invertemos na exibição)
interface MunicipioMapData {
  nome: string
  indicadores: Record<IndicadorKey, { valor: number; display: string }>
}

export const municipiosMapData: Record<string, MunicipioMapData> = {
  '2507507': {
    nome: 'João Pessoa',
    indicadores: {
      idhm: { valor: 0.763, display: '0,763' },
      pib_per_capita: { valor: 32450, display: 'R$ 32.450' },
      taxa_urbanizacao: { valor: 99.6, display: '99,6%' },
      gini: { valor: 0.58, display: '0,58' },
    },
  },
  '2504009': {
    nome: 'Campina Grande',
    indicadores: {
      idhm: { valor: 0.72, display: '0,720' },
      pib_per_capita: { valor: 24180, display: 'R$ 24.180' },
      taxa_urbanizacao: { valor: 97.2, display: '97,2%' },
      gini: { valor: 0.55, display: '0,55' },
    },
  },
  '2510808': {
    nome: 'Patos',
    indicadores: {
      idhm: { valor: 0.701, display: '0,701' },
      pib_per_capita: { valor: 18920, display: 'R$ 18.920' },
      taxa_urbanizacao: { valor: 95.8, display: '95,8%' },
      gini: { valor: 0.52, display: '0,52' },
    },
  },
  '2501302': {
    nome: 'Bayeux',
    indicadores: {
      idhm: { valor: 0.649, display: '0,649' },
      pib_per_capita: { valor: 10250, display: 'R$ 10.250' },
      taxa_urbanizacao: { valor: 99.9, display: '99,9%' },
      gini: { valor: 0.49, display: '0,49' },
    },
  },
  '2513505': {
    nome: 'Santa Rita',
    indicadores: {
      idhm: { valor: 0.641, display: '0,641' },
      pib_per_capita: { valor: 12800, display: 'R$ 12.800' },
      taxa_urbanizacao: { valor: 87.3, display: '87,3%' },
      gini: { valor: 0.53, display: '0,53' },
    },
  },
  '2503209': {
    nome: 'Cabedelo',
    indicadores: {
      idhm: { valor: 0.748, display: '0,748' },
      pib_per_capita: { valor: 68900, display: 'R$ 68.900' },
      taxa_urbanizacao: { valor: 99.8, display: '99,8%' },
      gini: { valor: 0.51, display: '0,51' },
    },
  },
  '2506301': {
    nome: 'Guarabira',
    indicadores: {
      idhm: { valor: 0.673, display: '0,673' },
      pib_per_capita: { valor: 14200, display: 'R$ 14.200' },
      taxa_urbanizacao: { valor: 89.5, display: '89,5%' },
      gini: { valor: 0.54, display: '0,54' },
    },
  },
  '2514602': {
    nome: 'Sousa',
    indicadores: {
      idhm: { valor: 0.668, display: '0,668' },
      pib_per_capita: { valor: 13500, display: 'R$ 13.500' },
      taxa_urbanizacao: { valor: 84.1, display: '84,1%' },
      gini: { valor: 0.56, display: '0,56' },
    },
  },
  '2508307': {
    nome: 'Monteiro',
    indicadores: {
      idhm: { valor: 0.628, display: '0,628' },
      pib_per_capita: { valor: 11300, display: 'R$ 11.300' },
      taxa_urbanizacao: { valor: 72.4, display: '72,4%' },
      gini: { valor: 0.57, display: '0,57' },
    },
  },
  '2511004': {
    nome: 'Pombal',
    indicadores: {
      idhm: { valor: 0.634, display: '0,634' },
      pib_per_capita: { valor: 12100, display: 'R$ 12.100' },
      taxa_urbanizacao: { valor: 78.9, display: '78,9%' },
      gini: { valor: 0.55, display: '0,55' },
    },
  },
  '2504405': {
    nome: 'Catolé do Rocha',
    indicadores: {
      idhm: { valor: 0.645, display: '0,645' },
      pib_per_capita: { valor: 10800, display: 'R$ 10.800' },
      taxa_urbanizacao: { valor: 75.2, display: '75,2%' },
      gini: { valor: 0.58, display: '0,58' },
    },
  },
  '2505600': {
    nome: 'Esperança',
    indicadores: {
      idhm: { valor: 0.623, display: '0,623' },
      pib_per_capita: { valor: 9800, display: 'R$ 9.800' },
      taxa_urbanizacao: { valor: 68.3, display: '68,3%' },
      gini: { valor: 0.50, display: '0,50' },
    },
  },
}

// Ranges for color interpolation per indicator
export const indicadorRanges: Record<IndicadorKey, { min: number; max: number }> = {
  idhm: { min: 0.5, max: 0.8 },
  pib_per_capita: { min: 5000, max: 70000 },
  taxa_urbanizacao: { min: 50, max: 100 },
  gini: { min: 0.4, max: 0.65 },
}
