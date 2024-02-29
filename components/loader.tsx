'use client'

import useLoaderStore from '@/store/loader-state'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  const isLoading = useLoaderStore((state) => state.isLoading)

  if (!isLoading) return null
  return (
    <div className='min-h-screen w-full z-10 top-0 left-0 flex  sticky items-center justify-center bg-gray-700/70'>
      <h1 className='text-8xl text-gray-400'>Loading...</h1>
    </div>
  )
}

export default Loader
