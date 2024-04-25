import { FC } from 'react'
import RadioCheckedIcon from '@assets/radioCheckedIcon.svg'
import './RadioItem.css'

interface RadioItemProps {
  value: string
  icon: string
  onChange: (value: string) => void
  checked?: boolean
}
const RadioItem: FC<RadioItemProps> = ({
  value,
  icon,
  onChange,
  checked = false
}) => {
  return (
    <div
      className={`radio-item ${checked ? 'checked' : ''}`}
      onClick={() => onChange(value)}
    >
      <div className='radio-item-content'>
        <span className='radio-item-icon'>{icon}</span>
        <span>{value}</span>
      </div>
      <div className='radio-item-circle'>
        {checked && <img src={RadioCheckedIcon} alt='Checked icon' />}
      </div>
    </div>
  )
}

export default RadioItem
