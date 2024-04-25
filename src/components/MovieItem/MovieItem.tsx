import { FC } from 'react'
import './MovieItem.css'

interface MovieItemProps {
  title: string
  year: string
  poster: string
}

const MovieItem: FC<MovieItemProps> = ({ title, year, poster }) => {
  return (
    <div className='movie-item-container'>
      <img src={poster} alt={title} className='movie-item-image' />
      <div className='movie-item-info'>
        <h2 className='title-text'>{title}</h2>
        <p className='movie-item-year'>{year}</p>
      </div>
    </div>
  )
}

export default MovieItem
