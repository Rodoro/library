import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({ children, ...props}) => {
    return (
        <button {...props} className="px-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {children}
        </button>
    )
}

export default Button
