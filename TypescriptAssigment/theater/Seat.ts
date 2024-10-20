export class Seat {
    public isBooked: boolean;

    constructor() {
        this.isBooked = false;
    }

    public book(): void {
        if (!this.isBooked) {
            this.isBooked = true;
        } else {
            throw new Error("Seat is already booked.");
        }
    }

    public cancel(): void {
        if (this.isBooked) {
            this.isBooked = false;
        } else {
            throw new Error("Seat is already vacant.");
        }
    }
}
