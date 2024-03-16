import React, { HTMLAttributes } from 'react'
import Map, { MapProps } from './Map'

export interface BookScreenProps extends MapProps {}

const BookScreen: React.FC<BookScreenProps> = ({ params }: any) => {
    return (
        <div>
            <Map params={params} />
        </div>
    )
}

export default BookScreen
