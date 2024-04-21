"use client"
import BookFilter from '@/components/BookFilter'
import BookList from '@/components/BookList'
import { Book } from '@/types/books.interface'
import React, { useEffect, useState } from 'react'

const Main = () => {
    // Создаем переменые со стояниями используя хук от react
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Делаем GET запрос к API для получения списка книг
        fetch("/api/books", {
            method: "GET",
        })
            .then(response => response.json())
            .then((data) => {
                // Обновление состояния списка книг после получения данных с сервера
                setBooks(data.items);
            })
            .catch((error) => {
                console.error("Ошибка получения списка книг")
            })
    }, [])

    //Фильтруем массив Book с условием от польщователя
    const filteredBooks = books.filter((book: Book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    //Возвращаем страницу
    return (
        <main className="flex min-h-screen flex-col items-center">
            <BookFilter onChange={(e:any) => setSearchTerm(e.target.value)}/>
            <div className='m-4' />
            <BookList title="Список книг" books={filteredBooks} />
        </main>
    )
}

export default Main
