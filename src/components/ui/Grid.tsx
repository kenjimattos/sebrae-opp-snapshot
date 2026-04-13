// Tailwind pure — no Figma equivalent
// Configurable grid helper

interface GridProps {
  children: React.ReactNode
  cols?: number
  gap?: string
  className?: string
}

export default function Grid({
  children,
  cols = 3,
  gap = 'var(--spacing-sm)',
  className = '',
}: GridProps) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  )
}
