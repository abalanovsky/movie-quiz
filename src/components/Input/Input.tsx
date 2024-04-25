import { FC, ChangeEvent } from 'react'
import './Input.css'

interface InputProps {
  value: string
  isValid: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const Input: FC<InputProps> = ({ placeholder, onChange, value, isValid }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`input ${isValid ? '' : 'error'}`}>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className='input-field'
      />
      {!isValid && <span className='error-text'>Error text</span>}
    </div>
  )
}

export default Input
