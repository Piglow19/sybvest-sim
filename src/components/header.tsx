import { Button } from '@nextui-org/react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-4">
      <Link href={'/'} className="text-2xl font-bold uppercase">
        sybsim.
      </Link>
      <div className="flex gap-4">
        <Button color="default" variant="flat">
          Être accompagné
        </Button>
        <Button color="primary" variant="solid">
          Commencer
        </Button>
      </div>
    </header>
  )
}

export default Header
