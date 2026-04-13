// Tailwind pure — no Figma equivalent
// Standardized wrapper for Recharts charts

interface ChartWrapperProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function ChartWrapper({ title, children, className = '' }: ChartWrapperProps) {
  return (
    <div
      className={`bg-[var(--semantic-surface-primary)] rounded-[var(--radius-md)] p-[var(--spacing-lg)] flex flex-col gap-[var(--spacing-md)] ${className}`}
    >
      <h4 className="font-bold text-[length:var(--font-size-h3)] leading-none text-[color:var(--semantic-text-primary)]">
        {title}
      </h4>
      {children}
    </div>
  )
}
