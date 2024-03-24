"use client"
import React, { useEffect, useState } from 'react'
import Map, { MapProps } from './Map'
import { Book } from '@/types/books.interface';

export interface BookScreenProps extends MapProps { }

const BookScreen: React.FC<BookScreenProps> = ({ params }: any) => {
    const [book, setBook] = useState<Book>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: params.id,
            })
        })
            .then(response => response.json())
            .then((data) => {
                setBook(data.item);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка получения книги")
                setIsLoading(false);
            })
    }, [params])

    if (isLoading) {
        return <div className="flex justify-center items-center">Загрузка...</div>;
    }

    return (
        <div>
            {!book ? (
                <div className="flex justify-center items-center">
                    Извините, книга не найдена.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2" >
                    <div className="flex flex-col">
                        <h2 className='text-center text-2xl mb-6'>{book.name}</h2>
                        <div className='ml-16'>
                            <div>Автор: {book.author}</div>
                            <div>Жанр: {book.genre}</div>
                            <div>Находится на {book.shelfNumber} полке, {book.shelvingNumber} стелажа</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Map idBook={book.shelvingNumber} />
                    </div>
                </div >
            )}
        </div>

    )
}

export default BookScreen
