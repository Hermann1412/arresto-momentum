'use client';

import React from 'react'
import Link from 'next/link'
import { headerLinks } from '@constants'
import { usePathname } from 'next/navigation'

const Navitems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li 
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navitems