import { Seat } from './Seat';

export class Theater {
    private seats: Seat[][];

    constructor(rows: number, columns: number) {
        this.seats = Array.from({ length: rows }, () => Array.from({ length: columns }, () => new Seat()));
    }

    public bookSeat(row: number, column: number): void {
        if (this.isValidSeat(row, column)) {
            try {
                this.seats[row][column].book();
                console.log(`Seat ${row}, ${column} booked.`);
            } catch (error) {
                console.log("unble to book the seat");
            }
        } else {
            console.log('Invalid seat number.');
        }
    }

    public cancelSeat(row: number, column: number): void {
        if (this.isValidSeat(row, column)) {
            try {
                this.seats[row][column].cancel();
                console.log(`Seat ${row}, ${column} canceled.`);
            } catch (error) {
                console.log("unble to cancel the seat");
            }
        } else {
            console.log('Invalid seat number.');
        }
    }

    private isValidSeat(row: number, column: number): boolean {
        return row >= 0 && row < this.seats.length && column >= 0 && column < this.seats[0].length;
    }

    public displaySeats(): void {
        console.log('Current seating arrangement:');
        this.seats.forEach((row, rowIndex) => {
            const rowDisplay = row.map(seat => (seat.isBooked ? 'X' : 'O')).join(' ');
            console.log(`Row ${rowIndex}: ${rowDisplay}`);
        });
    }
}
