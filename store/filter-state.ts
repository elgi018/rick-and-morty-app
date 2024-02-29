import { create } from 'zustand'

interface FilterState {
  filter: string
  setFilter: (value: string) => void
}

const useFilterStore = create<FilterState>()((set) => ({
  filter: '',
  setFilter: (value) => set(() => ({ filter: value })),
}))

export default useFilterStore
