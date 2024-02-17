import React, { HTMLAttributes } from 'react'
import { Book } from '@/types/books.interface';

export interface BookItemProps extends HTMLAttributes<HTMLDivElement> {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({book}) => {
    return (
        <div className="flex flex-col justify-start p-6">
            <h2>{book.name}</h2>
            <div>Автор: {book.author}</div>
            <div>Жанр: {book.genre}</div>
            <div>Находится на {book.shelfNumber} полке, {book.shelvingNumber} стелажа</div>
        </div>
    )
}

export default BookItem
