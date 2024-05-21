import { FC } from 'react'
import RadioCheckedIcon from '@assets/radioCheckedIcon.svg'
import './RadioItem.css'

interface RadioItemProps {
  value: string
  icon: string
  onChange: (value: string) => void
  checked?: boolean
  name: string
}

const RadioItem: FC<RadioItemProps> = ({
  value,
  icon,
  onChange,
  checked = false,
  name
}) => {
  return (
    <label className={`radio-item ${checked ? 'checked' : ''}`}>
      <input
        type='radio'
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        name={name}
        className='radio-input'
      />
      <div className='radio-item-content'>
        <span className='radio-item-icon'>{icon}</span>
        <span>{value}</span>
      </div>
      <div className='radio-item-circle'>
        {checked && <img src={RadioCheckedIcon} alt='Checked icon' />}
      </div>
    </label>
  )
}

export default RadioItem
