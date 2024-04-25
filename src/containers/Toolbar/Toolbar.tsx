import { FC } from 'react'
import NavigationArrow from '@components/NavigationArrow/NavigationArrow.tsx'
import MenuIcon from '@assets/menuIcon.svg'
import './Toolbar.css'

interface ToolbarProps {
  progress: number
}
const Toolbar: FC<ToolbarProps> = ({ progress }) => {
  return (
    <div className='toolbar-container'>
      <NavigationArrow />
      <div className='toolbar-right'>
        <span className='toolbar-percentage'>{progress}%</span>
        <img src={MenuIcon} alt='Menu icon' />
      </div>
    </div>
  )
}

export default Toolbar
