import React from 'react'
import Input from './interface/Input'

const BookFilter = ({...props}: any) => {
    return (
        <Input
            type='text'
            {...props}
        />
    )
}

export default BookFilter
