class Theater {
    private seats: boolean[][];

    constructor(rows: number, columns: number) {
        this.seats = [];
        for (let i = 0; i < rows; i++) {
            this.seats[i] = [];
            for (let j = 0; j < columns; j++) {
                this.seats[i][j] = false;
            }
        }
    }
      

    // Book a seat
    public bookSeat(row: number, column: number): void {
        if (this.isValidSeat(row, column)) {
            if (!this.seats[row][column]) {
                this.seats[row][column] = true;
                console.log(`Seat ${row}, ${column} booked.`);
            } else {
                console.log(`Seat ${row}, ${column} is already booked.`);
            }
        } else {
            console.log('Invalid seat number.');
        }
    }

    // Cancel a booked seat
    public cancelSeat(row: number, column: number): void {
        if (this.isValidSeat(row, column)) {
            if (this.seats[row][column]) {
                this.seats[row][column] = false;
                console.log(`Seat ${row}, ${column} canceled.`);
            } else {
                console.log(`Seat ${row}, ${column} is already vacant.`);
            }
        } else {
            console.log('Invalid seat number.');
        }
    }

    // Check if the seat number is valid
    private isValidSeat(row: number, column: number): boolean {
        return row >= 0 && row < this.seats.length && column >= 0 && column < this.seats[0].length;
    }

    // Display the seating arrangement function
    public displaySeats(): void {
        console.log('Current seating arrangement:');
        this.seats.forEach((row, rowIndex) => {
            const rowDisplay = row.map(seat => (seat ? 'X' : 'O')).join(' ');
            console.log(`Row ${rowIndex}: ${rowDisplay}`);
        });
    }
}

// demo example 
const theater = new Theater(5, 5); 
theater.bookSeat(2, 3);
theater.bookSeat(2, 3); 
theater.cancelSeat(2, 3);
theater.cancelSeat(2, 3); 
theater.displaySeats(); 