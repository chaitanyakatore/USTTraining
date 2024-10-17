import { Theater } from './Theater';

// Create a theater instance
const theater = new Theater(5, 5);

// Demo booking and cancellation
theater.bookSeat(2, 3);
theater.bookSeat(2, 3); // Trying to book the same seat again
theater.cancelSeat(2, 3);
theater.cancelSeat(2, 3); // Trying to cancel an already vacant seat
theater.displaySeats();
