"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BookList from '@/components/BookList'
import { useSession } from 'next-auth/react'


const BMScreen = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const { data: session, status: sessionStatus } = useSession();

    const fetchBooksByCategory = async (category: string) => {
        try {
            await fetch("/api/books/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    category,
                })
            })
                .then(response => response.json())
                .then((data) => {
                    setBooks(data.books);
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (category) {
            fetchBooksByCategory(category);
        }
    }, [category]);

    const handleCategoryChange = (category: string, title: string) => {
        setCategory(category);
        setTitle(title);
    }

    if (sessionStatus === "loading") {
        return <h1 className="flex min-h-screen flex-col items-center">Загрузка...</h1>
    }

    return (
        <div className="flex min-h-screen flex-col items-center">
            {!session ? (
                <>
                    <div>
                        Зарегестрируйтесь, что-бы получить доступ.
                    </div>
                </>
            ) : (
                <>
                    <Navbar handleCategoryChange={handleCategoryChange} />
                    <BookList title={title} books={books} />
                </>
            )}
        </div>
    )
}

export default BMScreen
