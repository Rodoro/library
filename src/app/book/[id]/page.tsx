import React from 'react'
import BookScreen from '@/containers/book/BookScreen';

const page = ({ params }: { params: { id: number } }) => {
    return (
        <BookScreen params={params} />
    )
}

export default page
