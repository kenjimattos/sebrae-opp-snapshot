// Figma: Agenda/Indicator (300:32)
// Single indicator row: label + badge

import type { StatusType } from '@/types/indicadores'
import AgendaBadge from '@/components/agenda/AgendaBadge'

interface AgendaIndicatorProps {
  label: string
  valor: string | number
  status: StatusType
}

export default function AgendaIndicator({ label, valor, status }: AgendaIndicatorProps) {
  return (
    <div className="flex items-center gap-[var(--spacing-lg)] px-[var(--spacing-xs)] w-full">
      <span className="flex-1 font-normal text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
        {label}
      </span>
      <AgendaBadge status={status} value={valor} />
    </div>
  )
}
