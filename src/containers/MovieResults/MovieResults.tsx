import { useContext, useEffect, useState } from 'react'
import Button from '@components/Button/Button.tsx'
import MovieItem from '@components/MovieItem/MovieItem.tsx'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import {
  MovieItemData,
  MovieResponse
} from '@/interfaces/MovieItemData.interface.ts'
import { Steps } from '@/enums/steps.enum.ts'
import loader from '@assets/loader.gif'
import notFoundImage from '@assets/notFoundImage.svg'
import './MovieResults.css'

const API_KEY = import.meta.env.VITE_API_KEY

const MovieResults = () => {
  const [searchResults, setSearchResults] = useState<MovieItemData[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { searchQuery, setCurrentStep } = useContext(MovieAppContext)

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`)
      .then(async (response) => {
        const data: MovieResponse = await response.json()
        if (data.Search) {
          setSearchResults(data.Search)
        }
        if (data.Error) {
          setIsError(true)
          setSearchResults([])
        }
      })
      .catch(() => {
        setIsError(true)
        setSearchResults([])
      })
      .finally(() => setIsLoading(false))
  }, [searchQuery])

  return (
    <div className='movie-results-container'>
      <div className='movie-results-block'>
        {isLoading ? (
          <div>
            <img src={loader} alt='Loading' width='64' />
          </div>
        ) : (
          <>
            {searchResults.map(({ Title, Year, Poster, imdbID }) => (
              <MovieItem
                key={imdbID}
                title={Title}
                year={Year}
                poster={Poster}
              />
            ))}
            {isError && (
              <div>
                <img src={notFoundImage} alt='Not found' />
                <h2 className='title-text not-found-text'>
                  Oops, no movie found
                </h2>
              </div>
            )}
          </>
        )}
      </div>
      <Button
        text='Complete'
        onClick={() => setCurrentStep(Steps.GENRE_SELECTION)}
      />
    </div>
  )
}

export default MovieResults
