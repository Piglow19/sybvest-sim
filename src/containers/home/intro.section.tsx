import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import { AuroraBackground } from '@/components/aurora-background'

export const HomeIntroSection = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl">
      <AuroraBackground className="top-0 left-0" />
      <h1 className="text-6xl font-bold">
        Élevez votre portefeuille vers de nouveaux sommets
      </h1>
      <p className="opacity-70">
        Découvrez comment Sybbex peut vous aider à investir dans des actions et
        des ETF. Effectuez une simulation pour imaginer l'évolution de votre
        portefeuille et commencez à investir dès demain !
      </p>
      <div className="flex flex-wrap gap-5">
        <Button
          as={Link}
          size="md"
          radius="full"
          color="primary"
          href="/simulation"
          endContent={<FaArrowRight />}
        >
          Commencer ma simulation
        </Button>
        {/* Will be replaced by a button that opens a modal in the future */}
        <Button color="default" radius="full" size="md" variant="light">
          Je souhaite être accompagné
        </Button>
      </div>
    </section>
  )
}
