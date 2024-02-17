"use client"
import BookFilter from '@/components/BookFilter'
import BookList from '@/components/BookList'
import { Book } from '@/types/books.interface'
import React, { useEffect, useState } from 'react'

const Main = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("/api/books", {
            method: "GET",
        })
            .then(response => response.json())
            .then((data) => {
                setBooks(data.items);
            })
            .catch((error) => {
                console.error("Ошибка получения списка книг")
            })
    })

    const filteredBooks = books.filter((book: Book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <BookFilter onChange={(e:any) => setSearchTerm(e.target.value)}/>
            <BookList title="Список книг" books={filteredBooks} />
        </main>
    )
}

export default Main
