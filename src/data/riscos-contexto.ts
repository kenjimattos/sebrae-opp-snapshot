// Contextos de risco para indicadores em alerta/atenção
// Chave: label do indicador (match exato com os JSONs de agendas)
// No futuro, essas descrições podem ser geradas por LLM

interface RiscoContexto {
  descricao: string
  indicadorLabel: string
  contexto: string
}

export const riscosContexto: Record<string, RiscoContexto> = {
  // Alertas de Campina Grande
  'ISDEL': {
    descricao: 'Índice abaixo do limiar mínimo de sustentabilidade econômica local',
    indicadorLabel: 'Indicador de alerta',
    contexto: 'Municípios com ISDEL abaixo de 0,5 tendem a ter maior dependência de transferências federais',
  },
  'Trabalhadores formais com Ensino Superior Completo': {
    descricao: 'Perda de acesso a linhas de crédito verde e fundos ESG até 2028',
    indicadorLabel: 'Indicador de alerta',
    contexto: 'Apenas 12% das MPE possuem práticas sustentáveis formalizadas',
  },
  'Taxa de crescimento do valor das Operações de Crédito': {
    descricao: 'Risco de estagnação tecnológica e perda de competitividade regional',
    indicadorLabel: 'Indicador de alerta',
    contexto: 'Investimento em P&D representa apenas 0.3% do PIB municipal',
  },
  'Total de pequenos negócios extintos no período': {
    descricao: 'Vulnerabilidade a choques setoriais e ciclos de dependência fiscal',
    indicadorLabel: 'Indicador de alerta',
    contexto: '72% da atividade econômica concentrada em 3 setores',
  },
  // Atenções genéricas
  'Índice CFA de Governança Municipal': {
    descricao: 'Governança municipal com lacunas em transparência e participação social',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Score abaixo de 7,0 indica necessidade de fortalecimento institucional',
  },
  'Tempo médio de viabilidade de empresa': {
    descricao: 'Burocracia acima da média estadual impacta abertura de novos negócios',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Meta Redesim é reduzir para 15 dias até 2026',
  },
  'Ranking Redesim': {
    descricao: 'Integração parcial com a rede nacional de simplificação',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Municípios com integração total têm 40% mais abertura de empresas',
  },
  'Tempo de licenciamento': {
    descricao: 'Prazo de licenciamento impacta investimentos de médio porte',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Benchmark regional é de 10 dias para licenças de baixo risco',
  },
  'Trabalhadores nos setores da economia criativa, inovação e TIC': {
    descricao: 'Baixa representatividade da economia criativa no mercado formal',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Média nacional é de 5,8% dos trabalhadores formais',
  },
  'Educação Empreendedora - ISDEL': {
    descricao: 'Cobertura limitada de educação empreendedora na rede escolar',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Meta estadual é atingir 25 escolas com programa ativo até 2027',
  },
  'Taxa de crescimento do valor dos Financiamentos - BACEN': {
    descricao: 'Crescimento marginal de financiamentos indica acesso restrito a crédito',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'MPEs representam apenas 18% do total de financiamentos no município',
  },
  'Total de pequenos negócios abertos': {
    descricao: 'Taxa de sobrevivência de novos negócios precisa ser monitorada',
    indicadorLabel: 'Indicador de atenção',
    contexto: 'Relação abertos/extintos de 1,39 está abaixo da média estadual de 1,8',
  },
}

// Fallback para indicadores sem contexto cadastrado
export const defaultRiscoContexto: RiscoContexto = {
  descricao: 'Indicador requer atenção e acompanhamento contínuo',
  indicadorLabel: 'Indicador de atenção',
  contexto: 'Valor abaixo da referência esperada para o município',
}
