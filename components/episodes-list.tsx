'use client'

import { useGetEpisodes } from '@/hooks/custom-hooks'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { TCharacter } from '@/lib/types'
import Link from 'next/link'

type Props = {}

const EpisodesList = (props: Props) => {
  const { data } = useGetEpisodes()
  const [selectedCharacterList, setSelectedCharacterList] = useState<TCharacter[]>([])

  return (
    <div className='max-w-[1920px] mx-auto p-5 flex justify-around'>
      <div className='flex flex-col gap-2'>
        {data &&
          data.slice(0, 10).map((episode) => (
            <Card
              key={episode.id}
              onClick={() => setSelectedCharacterList(episode.characters)}
              className='bg-gray-700 w-[600px] border-none flex overflow-hidden gap-5 p-5 line-clamp-1 text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-500'
            >
              <div className='flex gap-2 '>
                <span className='border-r-2 border-gray-500 pr-2'>{episode.episode}</span>

                <span className='border-r-2 border-gray-500 pr-2'>{episode.name}</span>

                <span>{episode.air_date}</span>
              </div>
            </Card>
          ))}
      </div>

      <div className=''>
        <Card className='bg-gray-700 w-[600px] border-none flex flex-col overflow-hidden gap-5 p-5 text-gray-300'>
          <CardHeader>
            <CardTitle>Characters on episode</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-3 gap-2'>
              {selectedCharacterList.length < 1 && <h1 className='italic'>No Episode Selected!</h1>}
              {selectedCharacterList.map((char) => (
                <CharacterFromEpisodeCard key={char.id} char={char} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

type TCharacterFromEpisodeCardProps = {
  char: TCharacter
}

const CharacterFromEpisodeCard = ({ char }: TCharacterFromEpisodeCardProps) => {
  return (
    <Link
      href={`/character/${char.id}`}
      onClick={() => console.log(char.id)}
      key={char.id}
      className='hover:cursor-pointer hover:scale-105 transition-all duration-500'
    >
      <span className=' text-sm line-clamp-1'>{char.name}</span>
      <Image src={char.image} alt='' width={200} height={300} className='rounded-xl' />
    </Link>
  )
}

export default EpisodesList
