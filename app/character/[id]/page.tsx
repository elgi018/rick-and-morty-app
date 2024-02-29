'use client'

import CharacterDetailsCard from '@/components/character-details-card'
import { useGetCharacterById } from '@/hooks/custom-hooks'
import React from 'react'

type Props = {
  params: { id: string }
}

const CharacterPage = ({ params: { id } }: Props) => {
  const { data } = useGetCharacterById(id)
  // console.log('🚀 ~ CharacterPage ~ data:', data?.character)
  if (!data) return null
  return <CharacterDetailsCard character={data.character} />
}

export default CharacterPage
