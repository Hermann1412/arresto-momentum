'use client'

import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const NavButtons = () => {
  return (
    <div className="flex w-32 justify-end gap-3">
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <Button asChild className="rounded-full" size="lg">
          <Link href="/sign-in">Login</Link>
        </Button>
      </Show>
    </div>
  )
}

export default NavButtons
