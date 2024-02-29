import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { TCharacter } from '@/lib/types'
import Link from 'next/link'
import { GetCharacterStatusColor } from '@/lib/utils'

type Props = {
  character: TCharacter
  detailsCard?: boolean
}

const CharacterCard = ({ character, detailsCard = false }: Props) => {
  return (
    <Link href={`/character/${character.id}`}>
      <Card className='bg-gray-700 w-[600px] border-none flex overflow-hidden gap-5 text-gray-300 h-full hover:cursor-pointer hover:scale-105 transition-all duration-500'>
        <div className=''>
          <Image src={character.image} alt='rickandmorty' height={300} width={200} />
        </div>

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
      </Card>
    </Link>
  )
}

export default CharacterCard
