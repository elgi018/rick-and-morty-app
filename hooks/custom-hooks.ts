import { GetCharacterById, GetCharacters, GetEpisodes } from '@/actions/actions'
import { TCharacter, TCharacters } from '@/lib/types'
import { CalcUniqueDimensions } from '@/lib/utils'
import useFilterStore from '@/store/filter-state'
import useLoaderStore from '@/store/loader-state'
import { useEffect, useState } from 'react'

export const useGetEpisodes = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    let episodes: any = []
    const Page1: any = await GetEpisodes(1)
    episodes.push(...Page1.episodes.results)
    const Page2: any = await GetEpisodes(2)
    episodes.push(...Page2.episodes.results)
    const Page3: any = await GetEpisodes(3)
    episodes.push(...Page3.episodes.results)

    const newList = episodes.map((episode: any) => {
      const uniqueDimensions = CalcUniqueDimensions(episode.characters)
      return {
        ...episode,
        uniqueDimensionsNr: uniqueDimensions.length,
      }
    })

    const sortedList = newList.sort((a: any, b: any) => b.uniqueDimensionsNr - a.uniqueDimensionsNr)

    setData(sortedList)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return [data, isLoading]
}

export const useGetCharacters = () => {
  const [data, setData] = useState<any>()
  const [pageNumber, setPageNumber] = useState(1)
  const { filter, setFilter } = useFilterStore((state) => state)
  const { isLoading, setIsLoading } = useLoaderStore((state) => state)

  const getData = async () => {
    setIsLoading(true)
    const characters = await GetCharacters(pageNumber, filter)
    characters && setData(characters)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, pageNumber])

  return { data, setPageNumber, setFilter }
}

export const useGetCharacterById = (id: string) => {
  const [data, setData] = useState<any>()
  const { isLoading, setIsLoading } = useLoaderStore((state) => state)

  const getData = async () => {
    setIsLoading(true)
    const character = await GetCharacterById(id)
    character && setData(character)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return { data }
}
