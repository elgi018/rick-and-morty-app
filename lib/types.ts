export type TCharacters = {
  info: TInfo
  results: TCharacter[]
}

export type TInfo = {
  count: number | null
  pages: number | null
  next: number | null
  prev: number | null
}

export type TCharacter = {
  id: string
  name: string
  status: string
  species: string
  type: string
  image: string
  origin: { name: string; dimension: string }
  location: { name: string }
  episode: TEpisode[]
}

export type TEpisode = {
  id: string
  name: string
  episode: string
  air_date: string
}
