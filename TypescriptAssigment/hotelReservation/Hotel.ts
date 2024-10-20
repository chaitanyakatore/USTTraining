import { RoomClass, Room } from './Room';
import { CustomerClass, Customer } from './Customer';

export class Hotel {
    private rooms: RoomClass[];

    constructor(public hotelName: string) {
        this.rooms = [];
    }

    addRoom(room: RoomClass) {
        this.rooms.push(room);
    }

    listRooms() {
        console.log(`Rooms available at ${this.hotelName}:`);
        this.rooms.forEach(room => {
            const status = room.isBooked ? "Booked" : "Available";
            console.log(`Room ${room.number} - Type: ${room.type}, Price: $${room.pricePerNight}/night - Status: ${status}`);
        });
    }

    getRoomByNumber(roomNumber: number): RoomClass | undefined {
        return this.rooms.find(room => room.number === roomNumber);
    }

    checkIn(customer: CustomerClass, roomNumber: number) {
        const room = this.getRoomByNumber(roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            customer.room = room;
            console.log(`${customer.name} checked in to room ${roomNumber} at ${this.hotelName}`);
        } else {
            console.log(`Room ${roomNumber} is not available or already booked.`);
        }
    }

    bookRoom(customer: CustomerClass, roomNumber: number, startDate: Date, endDate: Date) {
        const room = this.getRoomByNumber(roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            customer.room = room;
            room.startDate = startDate;
            room.endDate = endDate;
            console.log(`${customer.name} booked room ${roomNumber} from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} at ${this.hotelName}`);
        } else {
            console.log(`Room ${roomNumber} is not available or already booked.`);
        }
    }

    calculateStayPrice(room: Room): number {
        if (!room.startDate || !room.endDate) {
            return 0;
        }
        const duration = (room.endDate.getTime() - room.startDate.getTime()) / (1000 * 3600 * 24);
        return duration * room.pricePerNight;
    }

    checkOut(customer: CustomerClass) {
        if (customer.room) {
            const room = customer.room;
            const totalPrice = this.calculateStayPrice(room);
            console.log(`${customer.name} checked out from room ${room.number}. Total price: $${totalPrice}`);
            room.isBooked = false; 
            customer.room = undefined; 
        } else {
            console.log(`${customer.name} is not checked in to any room.`);
        }
    }
}
