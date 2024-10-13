import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="px-16 py-4">
      <p className="text-sm text-default-700 italic">
        Imaginé par{' '}
        <Link href="#" className="underline hover:opacity-50 transition-all">
          Mathieu Touillet
        </Link>
        , développé par{' '}
        <Link href="#" className="underline hover:opacity-50 transition-all">
          Axel Pacque
        </Link>
        . Cet outil vous permet de visualiser l'évolution de votre portefeuille en fonction de vos investissements.
      </p>
      <p className="text-sm text-default-700 italic">
        Investir comporte des risques, n'investissez que ce que vous pouvez vous
        permettre de perdre, soyez responsable.
      </p>
    </footer>
  )
}

export default Footer
