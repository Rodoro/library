import { BookItemProps } from '@/components/common/BookItem'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const router = useRouter();
    const [selectedBook, setSelectedBook] = useState(book.available);

    const handleCheckboxChange = (bookId: number) => {
        fetch(`/api/book/${bookId}/toggleAvailable`, {
            method: 'PUT',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка изменения состояния');
                }
                setSelectedBook(!selectedBook)
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
    };

    return (
        <div key={book.id}>
            <hr className="h-px border-0 bg-gray-700 my-2" />
            <div className='flex flex-row justify-between'
                onClick={() => {
                    router.push('/dashboard/book/' + book.id + '/update');
                }}>
                <div className="flex flex-row">
                    <p>ID: {book.id}</p>
                    <h2 className='pb-2 mx-2'><b>{book.name}</b></h2>
                    <p>{book.author} </p>
                </div>
                <div className="">
                    <input
                        className='w-6 h-6 mr-3'
                        type="checkbox"
                        checked={selectedBook}
                        onClick={(e) => { e.stopPropagation() }}
                        onChange={() => handleCheckboxChange(book.id)}
                    />
                </div>
            </div>
        </div >
    )
}

export default BookItem
