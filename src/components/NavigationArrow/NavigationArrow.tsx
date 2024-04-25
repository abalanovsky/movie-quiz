import { useContext } from 'react'
import { MovieAppContext } from '@context/MovieAppContext.tsx'
import { Steps } from '@/enums/steps.enum.ts'
import BackArrow from '@assets/backArrow.svg'
import BackArrowDisabled from '@assets/backArrowDisabled.svg'

const NavigationArrow = () => {
  const { currentStep, setCurrentStep } = useContext(MovieAppContext)

  const handleClick = () => {
    let previousStep
    switch (currentStep) {
      case Steps.MOVIE_RESULTS:
        previousStep = Steps.MOVIE_SEARCH
        break
      case Steps.MOVIE_SEARCH:
        previousStep = Steps.GENRE_SELECTION
        break
      default:
        previousStep = currentStep
    }
    setCurrentStep(previousStep)
  }

  const arrowImage =
    currentStep === Steps.GENRE_SELECTION ? BackArrowDisabled : BackArrow

  return <img src={arrowImage} alt='Navigation arrow' onClick={handleClick} />
}

export default NavigationArrow
