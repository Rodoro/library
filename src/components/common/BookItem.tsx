import React, { HTMLAttributes } from 'react'
import { Book } from '@/types/books.interface';
import { useRouter } from 'next/navigation';

export interface BookItemProps extends HTMLAttributes<HTMLDivElement> {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/book/' + book.shelvingNumber);
    };

    return (
        <div
            className="flex flex-col rounded-lg border border-gray-800 p-6 mt-10"
            onClick={handleClick}>
            <h2 className="text-center pb-2"><b>{book.name}</b></h2>
            <div className="">
                <div>Автор: {book.author}</div>
                <div>Жанр: {book.genre}</div>
            </div>
            <div className="col-2">Находится на {book.shelfNumber} полке, {book.shelvingNumber} стелажа</div>
        </div >
    )
}

export default BookItem
