'use client'

import React, { FormEvent, useState } from 'react'
import useFilterStore from '@/store/filter-state'
import { usePathname, useRouter } from 'next/navigation'

type Props = {}

const FilterInput = (props: Props) => {
  const setFilter = useFilterStore((state) => state.setFilter)
  const pathname = usePathname()
  const router = useRouter()
  const [value, setValue] = useState<string>('')

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFilter(value)

    if (pathname !== '/') {
      router.push('/')
    }
  }

  return (
    <form className='relative' onSubmit={(e) => onFormSubmit(e)}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='bg-gray-700 rounded-full p-2 pl-10 transition '
        placeholder='Search by name...'
      />
      <svg
        className='absolute left-2 top-1/2 -translate-y-1/2'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
        <path d='M21 21l-6 -6' />
      </svg>
    </form>
  )
}

export default FilterInput
