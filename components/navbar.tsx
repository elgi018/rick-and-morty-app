import React from 'react'
import FilterInput from './filter-input'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='bg-gray-900 p-4 text-gray-400'>
      <div className='container flex justify-between flex-row gap-8 items-center'>
        <Link href='/'>
          <h1>Logo</h1>
        </Link>

        {/* Search Input */}
        <FilterInput />

        {/* Top 10 Episodes */}
        <h1>Top 10 Episodes</h1>
      </div>
    </nav>
  )
}

export default Navbar
