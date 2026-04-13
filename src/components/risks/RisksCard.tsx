// Figma: Risks/Card (set 563:4445)
// Variants: Alert (red), Warning (yellow)

interface RisksCardProps {
  titulo: string
  descricao: string
  percentual: number
  tipo: 'alert' | 'warning'
  className?: string
}

const tipoStyles = {
  alert: {
    bg: 'bg-[var(--semantic-alert-surface)]',
    border: 'border-[var(--semantic-alert)]',
    valueColor: 'text-[color:var(--primitives-red-800)]',
  },
  warning: {
    bg: 'bg-[var(--semantic-warning-surface)]',
    border: 'border-[var(--semantic-warning)]',
    valueColor: 'text-[color:var(--primitives-yellow-800)]',
  },
}

export default function RisksCard({ titulo, descricao, percentual, tipo, className = '' }: RisksCardProps) {
  const styles = tipoStyles[tipo]

  return (
    <div
      className={`flex flex-col gap-[var(--spacing-md)] border border-solid rounded-[var(--radius-sm)] p-[var(--spacing-lg)] ${styles.bg} ${styles.border} ${className}`}
    >
      <div className="flex items-center gap-[var(--spacing-lg)] w-full">
        <span className="flex-1 font-semibold text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
          {titulo}
        </span>
        <span className={`font-black text-[length:var(--font-size-display-small)] leading-none ${styles.valueColor}`}>
          {percentual}%
        </span>
      </div>
      <p className="font-normal text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
        {descricao}
      </p>
    </div>
  )
}
