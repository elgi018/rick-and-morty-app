import { TCharacters } from '@/lib/types'
import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://rickandmortyapi.com/graphql'

export const GetEpisodes = async (pageNumber: number) => {
  const query = gql`
  {
    episodes (page: ${pageNumber}) {
    info {
      count
      pages
    }
    results {
      id
      episode
      name
      air_date
      characters {
        id
        image
        name
        origin {
          name
          dimension
        }
      }
    }
  }
}
  `

  const result = await request(MASTER_URL, query)
  return result
}

export const GetCharacters = async (pageNumber: string, filter: string) => {
  const query = gql`
    {
        characters(page: ${pageNumber}, filter: {name: "${filter}"}) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              status
              species
              type
              gender
              origin {
                name
                dimension
              }
              location {
                name
              }
              image
              episode {
                id
                name
                episode
              }
            }
          }
  }
    `

  const result: TCharacters = await request(MASTER_URL, query)
  return result
}

export const GetCharacterById = async (id: string) => {
  const query = gql`
    {
      character(id: "${id}") {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          name
          dimension
        }
        location {
          name
          dimension
        }
        episode {
          id
          name
          episode
          air_date
        }
      }
    }
  `

  const result = await request(MASTER_URL, query)
  return result
}
