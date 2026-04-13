// Figma: Buttons (set 378:477)
// Simplified to the 3 main variants: primary, secondary, tertiary

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-[var(--semantic-button-primary)] text-[color:var(--semantic-button-label-primary)]',
  secondary:
    'bg-[var(--semantic-button-secondary)] text-[color:var(--semantic-button-label-secondary)]',
  tertiary:
    'bg-[var(--semantic-button-tertiary)] text-[color:var(--semantic-button-label-tertiary)]',
}

const sizeStyles: Record<string, string> = {
  sm: 'h-[40px] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[length:var(--font-size-button-sm)]',
  md: 'h-[40px] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[length:var(--font-size-button-sm)]',
  lg: 'h-[64px] px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[length:var(--font-size-button)]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'sm',
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[var(--radius-full)] font-semibold leading-none cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  )
}
