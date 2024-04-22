import { Book } from '@/types/books.interface';
import React, { useEffect, useState } from 'react'
import BookItem from './BookItem';
import BookFilter from '@/components/BookFilter';
import Button from '@/components/interface/Button';
import { useRouter } from 'next/navigation';

const BookSlider = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetch("/api/books", {
            method: "POST",
        })
            .then(response => response.json())
            .then((data) => {
                setBooks(data.items);
            })
            .catch((error) => {
                console.error("Ошибка получения списка книг")
            })
    }, [])

    const filteredBooks = books.filter((book: Book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mx-6">
            <div className="flex flex-row items-center mb-6 justify-center">
                <BookFilter onChange={(e:any) => setSearchTerm(e.target.value)}/>
                <div className='ml-6'><Button onClick={() => { router.replace("/dashboard/book/add") }}>Создать</Button></div>
            </div>
            {filteredBooks.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    )
}

export default BookSlider
