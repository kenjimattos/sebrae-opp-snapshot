// Tailwind pure — no Figma equivalent
// Wrapper with max-w-[1440px] and padding lateral var(--spacing-margin)

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export default function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px] px-[var(--spacing-margin)] ${className}`}
    >
      {children}
    </section>
  )
}
