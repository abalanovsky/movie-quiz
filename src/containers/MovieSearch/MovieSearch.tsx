import { useContext, useState } from 'react'
import Input from '@components/Input/Input.tsx'
import Button from '@components/Button/Button.tsx'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import { Steps } from '@/enums/steps.enum.ts'
import './MovieSearch.css'

const regex = /[%^$*()]+/

const MovieSearch = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const { setCurrentStep, setSearchQuery } = useContext(MovieAppContext)

  const handleInputChange = (value: string) => {
    setInputValue(value)
    setIsValid(!regex.test(value))
  }

  const handleContinueClick = async () => {
    setSearchQuery(inputValue)
    setCurrentStep(Steps.MOVIE_RESULTS)
  }

  return (
    <div className='movie-search-container'>
      <div>
        <h2 className='title-text movie-search-title'>Enter movie title</h2>
        <Input
          value={inputValue}
          isValid={isValid}
          onChange={handleInputChange}
          placeholder='Movie title here'
        />
      </div>
      <Button
        text='Continue'
        onClick={handleContinueClick}
        disabled={!isValid || inputValue.length == 0}
      />
    </div>
  )
}

export default MovieSearch
