import React, { HTMLAttributes, useState } from 'react'
import { Book } from '@/types/books.interface';
import { useRouter } from 'next/navigation';
import Heart from './Heart';

export interface BookItemProps extends HTMLAttributes<HTMLDivElement> {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const [favourite, setFavourite] = useState(book.isActive);
    const router = useRouter();

    const handleClick = () => {
        router.push('/book/' + book.shelvingNumber);
    };

    const favouriteClick = async () => {
        try {
            await fetch("/api/book/favourite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    number: book.id,
                })
            })
                .then(response => response.json())
                .then((data) => {
                    setFavourite(data.res);
                })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div
                className="relative flex flex-col rounded-lg border border-gray-800 p-6 mt-10"
                onClick={handleClick}>
                <Heart
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            favouriteClick()
                        }

                    }
                    isActive={favourite}
                    className='absolute top-0 right-0 mt-2 mr-2' />
                <h2 className="text-center pb-2"><b>{book.name}</b></h2>
                <div className="">
                    <div>Автор: {book.author}</div>
                    <div>Жанр: {book.genre}</div>
                </div>
                <div className="col-2">Находится на {book.shelfNumber} полке, {book.shelvingNumber} стелажа</div>
            </div >
        </div>
    )
}

export default BookItem
