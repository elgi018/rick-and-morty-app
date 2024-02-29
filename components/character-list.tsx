'use client'

// import { useState } from 'react'
import { useGetCharacters } from '@/hooks/custom-hooks'
import { TCharacter } from '@/lib/types'
import React from 'react'
import CharacterCard from './character-card'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/navigation'

type Props = {
  q: string
  page: string
}

const CharacterList = ({ q = '', page = '1' }: Props) => {
  const router = useRouter()
  // const [selectedPage, setSelectedPage] = useState(+page - 1)
  const { data } = useGetCharacters(q, page)

  const handlePageClick = (e: any) => {
    // setSelectedPage(e.selected)
    // setPageNumber(e.selected + 1)
    router.push(`/?q=${q}&page=${e.selected + 1}`)
  }

  return (
    <div className='max-w-[1920px] mx-auto'>
      <div className='flex flex-row flex-wrap  gap-4 p-10 justify-center items-center'>
        {data?.characters.results?.map((item: TCharacter) => (
          <div key={item.id} className=''>
            <CharacterCard character={item} />
          </div>
        ))}
      </div>

      {data?.characters.info.count > 1 && (
        <ReactPaginate
          pageCount={data?.characters.info.pages || 0}
          className='flex flex-row text-gray-500 text-xl gap-4 items-center justify-center p-4'
          breakLabel='...'
          nextLabel='Next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          previousLabel='< Previous'
          renderOnZeroPageCount={null}
          activeClassName='font-bold text-gray-200'
          forcePage={+page - 1}
        />
      )}
    </div>
  )
}

export default CharacterList
