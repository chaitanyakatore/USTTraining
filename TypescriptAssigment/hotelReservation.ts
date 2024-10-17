interface Room {
    number: number;
    type: string; // e.g., "Single", "Double", "Suite"
    pricePerNight: number;
    isBooked: boolean;
    startDate?: Date;
    endDate?: Date;
}

interface Customer {
    name: string;
    room?: Room;
}

class Hotel {
    hotelName: string;
    rooms: Room[];

    constructor(hotelName: string) {
        this.hotelName = hotelName;
        this.rooms = [];
    }

    addRoom(room: Room) {
        this.rooms.push(room);
    }

    listRooms() {
        console.log(`Rooms available at ${this.hotelName}:`);
        this.rooms.forEach(room => {
            const status = room.isBooked ? "Booked" : "Available";
            console.log(`Room ${room.number} - Type: ${room.type}, Price: $${room.pricePerNight}/night - Status: ${status}`);
        });
    }

    // method to find a room by its number
    getRoomByNumber(roomNumber: number): Room | undefined {
        for (let room of this.rooms) {
            if (room.number === roomNumber) {
                return room;
            }
        }
        return undefined; // Room not found
    }

    checkIn(customer: Customer, roomNumber: number) {
        const room = this.getRoomByNumber(roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            customer.room = room;
            console.log(`${customer.name} checked in to room ${roomNumber} at ${this.hotelName}`);
        } else {
            console.log(`Room ${roomNumber} is not available or already booked.`);
        }
    }

    bookRoom(customer: Customer, roomNumber: number, startDate: Date, endDate: Date) {
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

    checkOut(customer: Customer) {
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

// Example usage
const hotel = new Hotel("Grand Hotel");

hotel.addRoom({ number: 101, type: "Single", pricePerNight: 100, isBooked: false });
hotel.addRoom({ number: 102, type: "Double", pricePerNight: 150, isBooked: false });
hotel.addRoom({ number: 103, type: "Suite", pricePerNight: 200, isBooked: false });

const customer1: Customer = { name: "Alice" };
const customer2: Customer = { name: "Bob" };

hotel.listRooms(); 

hotel.bookRoom(customer1, 102, new Date('2023-10-01'), new Date('2023-10-05')); 
hotel.bookRoom(customer2, 101, new Date('2023-10-03'), new Date('2023-10-06')); 

hotel.checkOut(customer1); 
hotel.checkOut(customer2); 

hotel.listRooms();
