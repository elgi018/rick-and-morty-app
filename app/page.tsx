import CharacterList from '@/components/character-list'

type Props = {
  searchParams: {
    q: string
    page: string
  }
}

export default function Home({ searchParams: { q, page } }: Props) {
  return <CharacterList q={q} page={page} />
}
