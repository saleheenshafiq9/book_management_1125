import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    { id: 1, name: 'In Search of Lost Time', year: 2004, availability: true },
    { id: 2, name: 'Ulysses', year: 2002, availability: false },
    { id: 3, name: 'Don Quixote', year: 2003, availability: true },
    {
      id: 4,
      name: 'One Hundred Years of Solitude',
      year: 2001,
      availability: false,
    },
    { id: 5, name: 'The Great Gatsby', year: 2007, availability: true },
    { id: 6, name: 'Moby Dick', year: 2006, availability: true },
    { id: 7, name: 'War and Peace', year: 2011, availability: true },
    { id: 8, name: 'Hamlet', year: 2014, availability: false },
    { id: 9, name: 'The Odyssey', year: 2005, availability: false },
    { id: 10, name: 'The Divine Comedy', year: 2015, availability: true },
  ];

  bookTobeUpdated = new Book();
  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  deleteBook(givenBook: Book): Book[] {
    this.books = this.books.filter((book) => givenBook.id != book.id);
    return this.books;
  }

  setBookTobeUpdated(givenBook: Book) {
    this.bookTobeUpdated = givenBook;
  }

  getBookTobeUpdated(): Book {
    return this.bookTobeUpdated;
  }
}
