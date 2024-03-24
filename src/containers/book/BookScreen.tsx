"use client"
import React, { useEffect, useState } from 'react'
import Map, { MapProps } from './Map'
import { Book } from '@/types/books.interface';
import Heart from '@/components/common/Heart';

export interface BookScreenProps extends MapProps { }

const BookScreen: React.FC<BookScreenProps> = ({ params }: any) => {
    const [book, setBook] = useState<Book>();
    const [isLoading, setIsLoading] = useState(true);
    const [favourite, setFavourite] = useState(false);

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
                setFavourite(data.item.isActive)
            })
            .catch((error) => {
                console.error("Ошибка получения книги")
                setIsLoading(false);
            })
    }, [ params ])

    const favouriteClick = async () => {
        if (!book) return;
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
                    <div className="relative flex flex-col">
                        <Heart
                            onClick={favouriteClick}
                            isActive={favourite}
                            className='absolute top-0 right-0 mt-2 mr-2' />
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
