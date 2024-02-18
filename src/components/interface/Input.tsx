import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
    return (
        <input
            type={type}
            className='rounded m-6 border border-gray-600'
            {...props}
        />
    )
}

export default Input
