import { Book } from './Book';

export interface LibraryMember {
    id: number;
    name: string;
    borrowedBooks: Book[];
    feesPaid: boolean;
}

export class LibraryMemberClass implements LibraryMember {
    id: number;
    name: string;
    borrowedBooks: Book[] = [];
    feesPaid: boolean = false;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    payFees() {
        this.feesPaid = true;
    }

    borrowBook(book: Book) {
        if (this.feesPaid && book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
        } else {
            throw new Error("Cannot borrow the book.");
        }
    }

    returnBook(bookName: string, books: Book[]) {
        const bookIndex = this.borrowedBooks.findIndex(b => b.name === bookName);
        if (bookIndex !== -1) {
            const bookToReturn = this.borrowedBooks[bookIndex];
            this.borrowedBooks.splice(bookIndex, 1);
            bookToReturn.isAvailable = true;
        } else {
            throw new Error("Book not found in borrowed books.");
        }
    }
}
