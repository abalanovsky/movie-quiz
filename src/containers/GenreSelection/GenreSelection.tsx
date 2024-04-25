import { useEffect, useState, useContext } from 'react'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import RadioItem from '@components/RadioItem/RadioItem.tsx'
import Button from '@components/Button/Button.tsx'
import { options } from './GenreSelection.constants.ts'
import { Steps } from '@/enums/steps.enum.ts'
import './GenreSelection.css'

const GenreSelection = () => {
  const [genre, setGenre] = useState('')
  const { setCurrentStep } = useContext(MovieAppContext)

  const handleChange = (value: string) => {
    setGenre(value)
    localStorage.setItem('genre', value)
  }

  useEffect(() => {
    const predefinedGenre = localStorage.getItem('genre')
    if (predefinedGenre) {
      setGenre(predefinedGenre)
    }
  }, [])

  const handleNextStep = () => {
    setCurrentStep(Steps.MOVIE_SEARCH)
  }

  return (
    <div>
      <h2 className='title-text selection-title'>Your favorite movie genre?</h2>

      {options.map(({ value, icon }) => (
        <RadioItem
          key={value}
          value={value}
          icon={icon}
          onChange={handleChange}
          checked={genre === value}
        />
      ))}
      <Button
        text='Continue'
        onClick={handleNextStep}
        disabled={genre === ''}
      />
    </div>
  )
}

export default GenreSelection
