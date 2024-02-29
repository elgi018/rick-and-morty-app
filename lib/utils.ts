import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TCharacter } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CalcUniqueDimensions = (characters: TCharacter[]) => {
  const unique = characters
    .map((item: any) => item.origin.dimension)
    .filter((value, index, self) => self.indexOf(value) === index)

  return unique
}

export const GetCharacterStatusColor = (status: string) => {
  let statusColor = ''
  switch (status) {
    case 'Dead':
      statusColor = 'text-red-600'
      break
    case 'Alive':
      statusColor = 'text-green-600'
      break
    default:
      statusColor = ''
      break
  }
  return statusColor
}
