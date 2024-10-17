interface Book {
    name: string;
    author: Author;
    yearPublished: number;
    isAvailable: boolean;
}

interface Author {
    name: string;
    books: Book[];
    totalBooks: number;
}

interface LibraryMember {
    id: number;
    name: string;
    borrowedBooks: Book[];
    feesPaid: boolean;
}

let members: LibraryMember[] = [];

let books: Book[] = [
    {
        name: "To Kill a Mockingbird",
        author: {
            name: "Harper Lee",
            books: [],
            totalBooks: 1,
        },
        yearPublished: 1960,
        isAvailable: true,
    },
    {
        name: "1984",
        author: {
            name: "George Orwell",
            books: [],
            totalBooks: 1,
        },
        yearPublished: 1949,
        isAvailable: true,
    }
];

function getBooksByAuthor(authorName: string): Book[] {
    return books.filter(book => book.author.name === authorName);
}

function isMemberPresent(id: number): boolean {
    return members.some(member => member.id === id);
}

function payFees(id: number): boolean {
    const member = members.find(member => member.id === id);
    if (member && !member.feesPaid) {
        member.feesPaid = true;
        return true;
    }
    return false;
}

function addMember(id: number, name: string): void {
    if (!isMemberPresent(id)) {
        members.push({
            id: id,
            name: name,
            borrowedBooks: [],
            feesPaid: false,
        });
        console.log(`Member ${name} added.`);
    } else {
        console.log(`Member with ID ${id} already exists.`);
    }
}

function returnBook(id: number, bookName: string): void {
    const member = members.find(member => member.id === id);
    if (member) {
        const bookIndex = member.borrowedBooks.findIndex(b => b.name === bookName);
        if (bookIndex !== -1) {
            member.borrowedBooks.splice(bookIndex, 1);
            const bookToReturn = books.find(b => b.name === bookName);
            if (bookToReturn) {
                bookToReturn.isAvailable = true;
                console.log(`Book '${bookName}' returned.`);
            }
        } else {
            console.log(`Book '${bookName}' not found in borrowed books.`);
        }
    } else {
        console.log("Member not found.");
    }
}

function borrowBook(id: number, bookName: string): void {
    const member = members.find(member => member.id === id);
    if (!member) {
        console.log("You are not a member. Please register.");
        return;
    }

    if (!member.feesPaid) {
        console.log("Please pay your fees before borrowing a book.");
        return;
    }

    const bookToBorrow = books.find(book => book.name === bookName);
    if (bookToBorrow && bookToBorrow.isAvailable) {
        member.borrowedBooks.push(bookToBorrow);
        bookToBorrow.isAvailable = false;
        bookToBorrow.author.books.push(bookToBorrow);
        console.log(`Book '${bookName}' borrowed successfully.`);
    } else {
        console.log("Book not available or does not exist.");
    }
}

// Example usage
addMember(1, "Alice");
borrowBook(1, "1984");
returnBook(1, "1984");
console.log(getBooksByAuthor("George Orwell"));
