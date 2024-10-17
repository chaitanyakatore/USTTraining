export interface Author {
    name: string;
    books: Book[];
    totalBooks: number;
}

export class AuthorClass implements Author {
    name: string;
    books: Book[] = [];
    totalBooks: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    addBook(book: Book) {
        this.books.push(book);
        this.totalBooks++;
    }
}
