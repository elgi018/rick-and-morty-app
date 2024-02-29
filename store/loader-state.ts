import { create } from 'zustand'

interface LoaderState {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const useLoaderStore = create<LoaderState>()((set) => ({
  isLoading: false,
  setIsLoading: (value) => set(() => ({ isLoading: value })),
}))

export default useLoaderStore
