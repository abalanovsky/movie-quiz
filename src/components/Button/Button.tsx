import { FC } from 'react'
import './Button.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}
const Button: FC<ButtonProps> = ({text, onClick, disabled = false}) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
