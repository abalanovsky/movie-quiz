import { FC, useContext } from 'react'
import Toolbar from '@containers/Toolbar/Toolbar.tsx'
import ProgressBar from '@components/ProgressBar/ProgressBar.tsx'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import './Header.css'

const Header: FC = () => {
  const { currentStep } = useContext(MovieAppContext)
  const currentProgress = Math.round((Number(currentStep) / 3) * 100)

  return (
    <div className='header-container'>
      <Toolbar progress={currentProgress} />
      <ProgressBar progress={currentProgress} />
    </div>
  )
}

export default Header
