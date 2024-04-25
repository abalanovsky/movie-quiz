import { useContext } from 'react'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import Header from '@containers/Header/Header.tsx'
import MovieSearch from '@containers/MovieSearch/MovieSearch.tsx'
import MovieResults from '@containers/MovieResults/MovieResults.tsx'
import GenreSelection from '@containers/GenreSelection/GenreSelection.tsx'
import { Steps } from '@/enums/steps.enum.ts'
import './Layout.css'

const Layout = () => {
  const { currentStep } = useContext(MovieAppContext)

  return (
    <>
      <Header />
      <div className='app-container'>
        {currentStep === Steps.GENRE_SELECTION && <GenreSelection />}
        {currentStep === Steps.MOVIE_SEARCH && <MovieSearch />}
        {currentStep === Steps.MOVIE_RESULTS && <MovieResults />}
      </div>
    </>
  )
}

export default Layout
