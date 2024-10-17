import { LibraryMemberClass } from './LibraryMember';
import { BookClass } from './Book';
import { AuthorClass } from './Author';

export class Library {
    members: LibraryMemberClass[] = [];
    books: BookClass[] = [];

    addMember(id: number, name: string) {
        if (!this.isMemberPresent(id)) {
            this.members.push(new LibraryMemberClass(id, name));
            console.log(`Member ${name} added.`);
        } else {
            console.log(`Member with ID ${id} already exists.`);
        }
    }

    isMemberPresent(id: number): boolean {
        return this.members.some(member => member.id === id);
    }

    addBook(name: string, authorName: string, yearPublished: number) {
        const author = new AuthorClass(authorName);
        const book = new BookClass(name, author, yearPublished);
        this.books.push(book);
    }

    getBooksByAuthor(authorName: string): Book[] {
        return this.books.filter(book => book.author.name === authorName);
    }

    borrowBook(memberId: number, bookName: string): void {
        const member = this.members.find(member => member.id === memberId);
        const bookToBorrow = this.books.find(book => book.name === bookName);
        
        if (!member) {
            console.log("You are not a member. Please register.");
            return;
        }

        try {
            member.borrowBook(bookToBorrow!);
            console.log(`Book '${bookName}' borrowed successfully.`);
        } catch (error) {
            console.log("you can't borrow");
        }
    }

    returnBook(memberId: number, bookName: string): void {
        const member = this.members.find(member => member.id === memberId);
        if (member) {
            try {
                member.returnBook(bookName, this.books);
                console.log(`Book '${bookName}' returned.`);
            } catch (error) {
                console.log("you are not allowed to return");
            }
        } else {
            console.log("Member not found.");
        }
    }

    payFees(memberId: number): void {
        const member = this.members.find(member => member.id === memberId);
        if (member && !member.feesPaid) {
            member.payFees();
            console.log(`Fees paid by member ${member.name}.`);
        } else {
            console.log("Member not found or fees already paid.");
        }
    }
}
