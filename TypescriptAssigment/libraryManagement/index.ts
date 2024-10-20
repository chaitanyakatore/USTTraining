import { Library } from './Library';

const library = new Library();
library.addMember(1, "Alice");
library.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
library.addBook("1984", "George Orwell", 1949);

library.payFees(1);
library.borrowBook(1, "1984");
library.returnBook(1, "1984");
console.log(library.getBooksByAuthor("George Orwell"));
