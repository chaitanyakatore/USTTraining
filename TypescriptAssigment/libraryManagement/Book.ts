import { Author, AuthorClass } from './Author'; 

export interface Book {
    name: string;
    author: Author;
    yearPublished: number;
    isAvailable: boolean;
}

export class BookClass implements Book {
    name: string;
    author: Author;
    yearPublished: number;
    isAvailable: boolean;

    constructor(name: string, author: AuthorClass, yearPublished: number) { 
        this.name = name;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isAvailable = true;
        author.addBook(this); 
    }
}
