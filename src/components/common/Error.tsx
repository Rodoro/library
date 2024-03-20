import React, { HTMLAttributes } from 'react'

export interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
    return (
        <div className="text-center text-red-600 ">
            {text}
        </div>
    )
}

export default Error
