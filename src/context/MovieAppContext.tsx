import { createContext, useState, FC, ReactNode } from 'react'
import { Steps } from '@/enums/steps.enum.ts'

interface MovieAppContextProps {
  currentStep: Steps
  setCurrentStep: (step: Steps) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const MovieAppContext = createContext<MovieAppContextProps>({
  currentStep: Steps.GENRE_SELECTION,
  setCurrentStep: () => {},
  searchQuery: '',
  setSearchQuery: () => {}
})

interface MovieAppProviderProps {
  children: ReactNode
}

export const MovieAppProvider: FC<MovieAppProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(Steps.GENRE_SELECTION)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <MovieAppContext.Provider
      value={{ currentStep, setCurrentStep, searchQuery, setSearchQuery }}
    >
      {children}
    </MovieAppContext.Provider>
  )
}
