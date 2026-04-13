// Figma: User (405:2038)
// Avatar circle + user name

interface UserProps {
  name?: string
  className?: string
}

export default function User({ name = 'João Maria', className = '' }: UserProps) {
  return (
    <div
      className={`flex items-center gap-[10px] h-[60px] px-[var(--spacing-md)] py-[10px] rounded-[var(--radius-full)] ${className}`}
    >
      {/* Avatar placeholder */}
      <div className="shrink-0 size-[32px] rounded-full bg-[var(--semantic-surface-primary)] overflow-hidden flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--semantic-text-inactive)]">
          <circle cx="7" cy="5" r="2.5" fill="currentColor" />
          <path d="M2 13c0-2.76 2.24-5 5-5s5 2.24 5 5" fill="currentColor" />
        </svg>
      </div>
      <span className="font-normal text-[length:var(--font-size-body-lg)] leading-none text-[color:var(--semantic-text-primary)] whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}
