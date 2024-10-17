var Theater = /** @class */ (function () {
    function Theater(rows, columns) {
        this.seats = [];
        for (var i = 0; i < rows; i++) {
            this.seats[i] = [];
            for (var j = 0; j < columns; j++) {
                this.seats[i][j] = false;
            }
        }
    }
    // Book a seat
    Theater.prototype.bookSeat = function (row, column) {
        if (this.isValidSeat(row, column)) {
            if (!this.seats[row][column]) {
                this.seats[row][column] = true;
                console.log("Seat ".concat(row, ", ").concat(column, " booked."));
            }
            else {
                console.log("Seat ".concat(row, ", ").concat(column, " is already booked."));
            }
        }
        else {
            console.log('Invalid seat number.');
        }
    };
    // Cancel a booked seat
    Theater.prototype.cancelSeat = function (row, column) {
        if (this.isValidSeat(row, column)) {
            if (this.seats[row][column]) {
                this.seats[row][column] = false;
                console.log("Seat ".concat(row, ", ").concat(column, " canceled."));
            }
            else {
                console.log("Seat ".concat(row, ", ").concat(column, " is already vacant."));
            }
        }
        else {
            console.log('Invalid seat number.');
        }
    };
    // Check if the seat number is valid
    Theater.prototype.isValidSeat = function (row, column) {
        return row >= 0 && row < this.seats.length && column >= 0 && column < this.seats[0].length;
    };
    // Display the seating arrangement function
    Theater.prototype.displaySeats = function () {
        console.log('Current seating arrangement:');
        this.seats.forEach(function (row, rowIndex) {
            var rowDisplay = row.map(function (seat) { return (seat ? 'X' : 'O'); }).join(' ');
            console.log("Row ".concat(rowIndex, ": ").concat(rowDisplay));
        });
    };
    return Theater;
}());
// demo example 
var theater = new Theater(5, 5);
theater.bookSeat(2, 3);
theater.bookSeat(2, 3);
// theater.cancelSeat(2, 3);
// theater.cancelSeat(2, 3); 
theater.displaySeats();
