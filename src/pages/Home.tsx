import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useMunicipio } from '@/hooks/useMunicipio'

export default function Home() {
  const { municipio } = useMunicipio()

  return (
    <div className="min-h-screen bg-[var(--semantic-background-primary)]">
      <Header municipio={municipio.nome} />

      <main className="mx-auto w-full max-w-[1440px]">
        {/* Sections will be added in Fase 7 */}
      </main>

      <Footer />
    </div>
  )
}
