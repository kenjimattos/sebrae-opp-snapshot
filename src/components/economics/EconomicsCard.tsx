// Figma: Economics/Card (563:4015)
// Metric card: icon + label (uppercase) + large value + variation

interface EconomicsCardProps {
  label: string
  valor: string
  variacao: string
  className?: string
}

export default function EconomicsCard({ label, valor, variacao, className = '' }: EconomicsCardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-between bg-[var(--semantic-surface-primary)] border border-solid border-[var(--semantic-surface-primary)] rounded-[var(--radius-sm)] p-[var(--spacing-md)] h-[172px] w-[230px] ${className}`}
    >
      <span className="font-normal text-[length:var(--font-size-h4)] leading-none text-[color:var(--semantic-text-primary)] uppercase">
        {label}
      </span>
      <div className="flex items-end justify-between w-full">
        <span className="font-black text-[length:var(--font-size-display-small)] leading-none text-[color:var(--semantic-text-primary)] max-w-[130px]">
          {valor}
        </span>
        <span className="font-semibold text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
          {variacao}
        </span>
      </div>
    </div>
  )
}
