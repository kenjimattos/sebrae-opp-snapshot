// Figma: Economics/Analysis (368:834)
// Bar chart comparing economic indicators across municipalities

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import ChartWrapper from '@/components/ui/ChartWrapper'

const comparisonData = [
  { municipio: 'João Pessoa', pib: 28.5, arrecadacao: 3.2, exportacoes: 1.1 },
  { municipio: 'Campina Grande', pib: 10.2, arrecadacao: 1.1, exportacoes: 0.38 },
  { municipio: 'Patos', pib: 2.1, arrecadacao: 0.245, exportacoes: 0.045 },
]

export default function EconomicsAnalysis({ className = '' }: { className?: string }) {
  return (
    <ChartWrapper title="Comparativo econômico (R$ bilhões)" className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={comparisonData} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--semantic-surface-secondary)" />
          <XAxis
            dataKey="municipio"
            tick={{ fill: 'var(--semantic-text-primary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--semantic-surface-secondary)' }}
          />
          <YAxis
            tick={{ fill: 'var(--semantic-text-primary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--semantic-surface-secondary)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--semantic-surface-primary)',
              border: '1px solid var(--semantic-surface-secondary)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--semantic-text-primary)',
            }}
          />
          <Legend />
          <Bar dataKey="pib" name="PIB" fill="var(--primitives-blue-500)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="arrecadacao" name="Arrecadação" fill="var(--primitives-green-500)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="exportacoes" name="Exportações" fill="var(--primitives-yellow-500)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
