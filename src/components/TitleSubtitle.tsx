// Figma: TitleSubtitle (set 405:1388)
// Variants: "H2" (larger), "H3" (smaller)

interface TitleSubtitleProps {
  title: string
  content: string
  variant?: 'h2' | 'h3'
  className?: string
}

export default function TitleSubtitle({
  title,
  content,
  variant = 'h2',
  className = '',
}: TitleSubtitleProps) {
  const isH2 = variant === 'h2'

  return (
    <div className={`flex flex-col items-start gap-[var(--spacing-sm)] ${className}`}>
      {isH2 ? (
        <>
          <h3 className="w-full font-bold text-[length:var(--font-size-h2)] leading-none text-[color:var(--semantic-text-primary)]">
            {title}
          </h3>
          <p className="w-full font-normal text-[length:var(--font-size-body-lg)] leading-normal text-[color:var(--semantic-text-primary)]">
            {content}
          </p>
        </>
      ) : (
        <>
          <h4 className="w-full font-bold text-[length:var(--font-size-h3)] leading-none text-[color:var(--semantic-text-primary)]">
            {title}
          </h4>
          <p className="w-full font-normal text-[length:var(--font-size-body)] leading-[var(--spacing-md)] text-[color:var(--semantic-text-primary)]">
            {content}
          </p>
        </>
      )}
    </div>
  )
}
