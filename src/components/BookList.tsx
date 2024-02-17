import { Book } from '@/types/books.interface';
import React, { HTMLAttributes } from 'react'
import BookItem from './common/BookItem';

export interface BookListProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ title, books }) => {

  if (!books.length) {
    return (
      <h1>
        Книги не найдены!
      </h1>
    )
  }

  return (
    <div>
      <h1 className='text-center'>
        {title}
      </h1>
      {books.map((book: Book) =>
        <BookItem key={book.id} book={book} />
      )}
    </div>
  )
}

export default BookList
