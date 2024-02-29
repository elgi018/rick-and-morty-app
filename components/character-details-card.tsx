import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TCharacter } from '@/lib/types'
import Image from 'next/image'
import { GetCharacterStatusColor } from '@/lib/utils'

type Props = {
  character: TCharacter
}

const CharacterDetailsCard = ({ character }: Props) => {
  //   console.log('🚀 ~ CharacterDetailsCard ~ character:', character)
  if (!character) return <h1>No Data</h1>
  return (
    <div className='container pt-10'>
      <Card className='bg-gray-700 w-full border-none flex overflow-hidden text-gray-300 h-full mb-5 pt-5'>
        <CardContent className='flex flex-row gap-5'>
          <Image
            src={character.image}
            alt='rickandmorty'
            height={400}
            width={300}
            className='rounded-lg'
          />

          <div className='flex flex-col justify-between py-2'>
            <div className=''>
              <div className='text-2xl font-bold'>{character.name}</div>
              <div className='text-md font-semibold'>
                <span className={`${GetCharacterStatusColor(character.status)} mr-1`}>•</span>
                {character.status} - {character.species}
              </div>
            </div>

            <div className=''>
              <div className='text-sm font-semibold text-gray-500'>Last known location:</div>
              <div className='text-md font-semibold'>{character.location.name}</div>
            </div>

            <div className='w-[355px]'>
              <div className='text-sm font-semibold text-gray-500'>First seen in:</div>
              <div className='text-md font-semibold truncate'>
                {character.episode[0].episode} - {character.episode[0].name}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-gray-700 w-full border-none overflow-hidden  text-gray-300 h-full p-5'>
        <CardHeader>
          <CardTitle className='text-6xl'>Episodes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-2 flex-col'>
            {character.episode.map((item) => (
              <Card key={item.id} className='bg-gray-800 border-none text-gray-300 pt-5'>
                <CardContent className='flex gap-2'>
                  <span className='border-r-2 border-gray-500 pr-2'>{item.episode}</span>

                  <span className='border-r-2 border-gray-500 pr-2'>{item.name}</span>

                  <span>{item.air_date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CharacterDetailsCard
