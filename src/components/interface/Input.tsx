import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
    return (
        <input
            type={type}
            className=''
            {...props}
        />
    )
}

export default Input