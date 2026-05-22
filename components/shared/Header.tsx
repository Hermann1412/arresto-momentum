import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { auth } from '@clerk/nextjs/server'

const Header = async () => {
  const { userId } = await auth()

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/images/logo.svg" width={128} height={38}
            alt="Arresto Momentum logo" />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          {!userId && (
            <Button asChild className="rounded-4" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
