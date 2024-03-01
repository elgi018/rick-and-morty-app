'use client'

import React from 'react'
import FilterInput from './filter-input'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  return (
    <nav className='bg-gray-900 p-4 text-gray-400'>
      <div className='container flex justify-between flex-row gap-8 items-center'>
        {/* Links */}
        <div className='flex flex-row gap-10 items-center'>
          <Link href='/'>
            <h1>Logo</h1>
          </Link>

          <Link
            href='/'
            className={`text-2xl font-semibold hover:text-gray-300 ${
              !pathname.includes('episodes') && 'text-gray-300'
            }`}
          >
            Home
          </Link>
          <Link
            href='/episodes'
            className={`text-2xl font-semibold hover:text-gray-300 ${
              pathname.includes('episodes') && 'text-gray-300'
            }`}
          >
            Top 10 Episodes
          </Link>
        </div>

        {/* Search Input */}
        <div className=''>
          <FilterInput />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
